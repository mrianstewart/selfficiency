import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f5f2",
        surface: "#ffffff",
        line: "#e7e2db",
        ink: "#0d0d0b",
        muted: "#7a756e",
        accent: "#0f5e5c"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(17, 17, 15, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
