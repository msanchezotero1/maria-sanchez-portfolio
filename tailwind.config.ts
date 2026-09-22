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
        // Beige / Dark green / Midnight green / Moss green / Rosy brown
        paper: "#F7F4D5",
        "paper-tint": "#ECE8C6",
        ink: "#0A3323",
        graphite: "#2F4A3E",
        rule: "#DCD8B6",
        signal: "#105666",
        sage: "#839958",
        rose: "#D3968C",
        wine: "#A12A1E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
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
