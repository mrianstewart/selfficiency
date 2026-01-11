import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

const requestSchema = z.object({
  input: z.string().trim().min(1).max(500)
});

const fallbackCopy = {
  stop: "Pause this for the next 24 hours. If it still matters tomorrow, you can decide then.",
  simplify:
    "Define “good enough” for this week: the smallest version that reduces the pressure.",
  protect: "Rule: if it isn’t essential this week, it doesn’t get time."
};

const bannedPhrases = [
  "prioritize your well-being",
  "prioritize your wellbeing",
  "it's okay to",
  "it’s okay to",
  "aim for",
  "try to",
  "remember to",
  "make time",
  "balance"
];

const MAX_FIELD_LENGTH = 300;

const hasBannedPhrase = (value: string) => {
  const lower = value.toLowerCase();
  return bannedPhrases.some((phrase) => lower.includes(phrase));
};

const countSentences = (value: string) =>
  value.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length;

const hasContradiction = (stop: string, simplify: string, protect: string) => {
  const stopLower = stop.toLowerCase();
  const simplifyLower = simplify.toLowerCase();
  const protectLower = protect.toLowerCase();
  const pauseSignals = /pause|stop|set aside|shelve|drop it/;
  const continueSignals = /keep|continue|finish|complete|push through|follow through/;
  const immediateTiming = /today|this week|this weekend|tonight|each day|every day|daily/;

  if (!pauseSignals.test(stopLower)) {
    return false;
  }

  const simplifyConflict =
    continueSignals.test(simplifyLower) && immediateTiming.test(simplifyLower);
  const protectConflict =
    continueSignals.test(protectLower) && immediateTiming.test(protectLower);

  return simplifyConflict || protectConflict;
};

const hasLargeInputOverlap = (value: string, input: string) => {
  if (!value || !input) return false;
  const normalizedValue = value.toLowerCase();
  const normalizedInput = input.toLowerCase();
  const limit = normalizedInput.length - 12;
  if (limit < 0) return false;
  for (let index = 0; index <= limit; index += 1) {
    const chunk = normalizedInput.slice(index, index + 12);
    if (chunk.trim().length < 12) {
      continue;
    }
    if (normalizedValue.includes(chunk)) {
      return true;
    }
  }
  return false;
};

const isOptionalInput = (input: string) => {
  const lower = input.toLowerCase();
  return [
    "optional",
    "nice to have",
    "someday",
    "maybe",
    "if i can",
    "if time",
    "not urgent",
    "non-urgent",
    "low priority"
  ].some((hint) => lower.includes(hint));
};

const isSevenDayPauseStop = (stop: string) => {
  const lower = stop.toLowerCase().trim();
  return (
    lower.startsWith("pause for seven days") ||
    lower.startsWith("pause this for seven days") ||
    lower.startsWith("pause for 7 days") ||
    lower.startsWith("pause this for 7 days")
  );
};

const validateOutput = (data: {
  stop?: string;
  simplify?: string;
  protect?: string;
}, input: string) => {
  if (!data?.stop || !data?.simplify || !data?.protect) return false;
  const fields = [data.stop, data.simplify, data.protect];
  for (const field of fields) {
    if (!field) return false;
    if (field.length > MAX_FIELD_LENGTH) return false;
    if (countSentences(field) > 2) return false;
    if (hasBannedPhrase(field)) return false;
    if (hasLargeInputOverlap(field, input)) return false;
  }
  if (isSevenDayPauseStop(data.stop) && !isOptionalInput(input)) return false;
  if (hasContradiction(data.stop, data.simplify, data.protect)) return false;
  return true;
};

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    console.error("[/api/unload] Missing OPENAI_API_KEY");
  }
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Input must be a non-empty string up to 500 characters." },
      { status: 400 }
    );
  }

  const { input } = parsed.data;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const systemMessage =
    "You are Selfficiency: calm, personal, and intuitive “AI for subtraction” for capable but overloaded adults. You do not motivate or sound corporate. You reduce load with human, grounded language. No therapy language. No generic wellness advice. No moralizing. Be specific, bounded, and actionable.";
  const baseUserMessage = [
    "Return JSON only with keys stop, simplify, protect.",
    "HARD RULES:",
    "- Each value 1–2 short sentences max.",
    "- STOP must choose ONE decisive move: (1) Lower the standard (minimum version), (2) Cap the effort (time box), (3) Delegate/hand off (share ownership), (4) Sunset (stop entirely), (5) Rule it away (remove repeated decisions).",
    "- STOP must be a closed decision with a boundary (time/threshold/ownership), but not always “pause for 7 days”. Only use “pause for 7 days” when the input is clearly optional/non-urgent.",
    "- Do not reuse the same STOP pattern across requests; vary based on input. If STOP begins with “Pause for seven days” more than rarely, rewrite.",
    "- SIMPLIFY must define “good enough this week” as a concrete minimum (time/distance/number/threshold).",
    "- PROTECT must be an if/then boundary rule.",
    "- Ensure STOP/SIMPLIFY/PROTECT are mutually consistent and do not contradict each other.",
    "- Do not repeat the user’s exact words verbatim.",
    "- Avoid generic phrases: “prioritize wellbeing”, “it’s okay to”, “try to”, “aim for”, “remember to”, “make time”, “balance”.",
    "- If output feels like obvious common sense, rewrite to be more specific and decisive.",
    `User input: "${input}"`
  ].join("\n");

  const attempt = async (extraInstruction?: string) => {
    const userMessage = extraInstruction
      ? `${baseUserMessage}\n${extraInstruction}`
      : baseUserMessage;
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: systemMessage
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });
    const content = completion.choices[0]?.message?.content ?? "";
    if (!content) {
      console.error("[/api/unload] Empty model response");
      return null;
    }
    try {
      return JSON.parse(content) as {
        stop?: string;
        simplify?: string;
        protect?: string;
      };
    } catch {
      console.error("[/api/unload] Failed to parse JSON", content);
      return null;
    }
  };

  try {
    const first = await attempt();
    if (first && validateOutput(first, input)) {
      return NextResponse.json(first);
    }
    const second = await attempt(
      "Rewrite to be more decisive and bounded. No generic reassurance."
    );
    if (second && validateOutput(second, input)) {
      return NextResponse.json(second);
    }
  } catch (error) {
    console.error("[/api/unload] OpenAI request failed", error);
  }

  return NextResponse.json(fallbackCopy);
}
