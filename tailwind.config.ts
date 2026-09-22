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
        // Villa Nova / Ocean Deep / Big River / Siren Song
        paper: "#E2E0C8",
        "paper-tint": "#D9D7BE",
        ink: "#4E635E",
        graphite: "#3F4F4A",
        rule: "#C9C8AE",
        signal: "#6B7663",
        sage: "#A6B49E",
        mist: "#C3CDBB",
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
