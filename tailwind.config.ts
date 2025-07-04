import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["var(--font-prompt)"],
      },
    },
  },
  plugins: [],
};

export default config;
