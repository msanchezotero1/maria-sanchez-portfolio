import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Beige / Navy / Teal / Sky Blue / White
        paper: "#F5EFEB",
        "paper-tint": "#EAE3DE",
        ink: "#2F4156",
        graphite: "#3E4C5E",
        rule: "#DDD5CF",
        signal: "#567C8D",
        sky: "#C8D9E6",
        wine: "#A12A1E",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        content: "75rem",
      },
      letterSpacing: {
        tight: "-0.01em",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
