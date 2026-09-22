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
        // Almond Cream / Olive Grove / Coastal Sage / Meadow Mist / Golden Chamomile
        paper: "#F0EAD8",
        "paper-tint": "#E6DFC9",
        ink: "#6A673F",
        graphite: "#4A4830",
        rule: "#DDD5BE",
        signal: "#5F7671",
        sage: "#ACB090",
        gold: "#D2BF81",
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
