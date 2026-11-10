import type { Config } from "tailwindcss";

// Every color reads from the CSS variables in app/globals.css, stored as
// RGB channels so opacity modifiers like `text-cream/80` keep working.
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury tech: cherry and cream
        cream: token("cream"),
        paper: token("paper"),
        ink: token("ink"),
        "ink-muted": token("ink-muted"),
        cherry: token("cherry"),
        "cherry-deep": token("cherry-deep"),
        blush: token("blush"),
        sand: token("sand"),
        hairline: token("hairline"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        base: ["16px", "26px"],
        hero: ["64px", "1.02"],
        "hero-mobile": ["44px", "1.02"],
        h2: ["44px", "1.08"],
        "h2-mobile": ["32px", "1.08"],
        h3: ["30px", "1.15"],
        metric: ["28px", "1.1"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        btn: "2px",
        card: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
