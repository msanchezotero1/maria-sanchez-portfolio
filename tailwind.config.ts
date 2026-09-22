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
        // Cream / Dark green / Midnight green / Moss green / Rosy brown
        paper: "#F5F1E8",
        "paper-tint": "#EAE4D8",
        ink: "#0A3323",
        graphite: "#2F4A3E",
        rule: "#DDD6C8",
        signal: "#5A7039",
        sage: "#839958",
        rose: "#D3968C",
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
