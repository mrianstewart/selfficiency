import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f6f3",
        surface: "#fbfbf9",
        line: "#d9ded7",
        ink: "#1f2a24",
        muted: "#5e6b63"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(31, 42, 36, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
