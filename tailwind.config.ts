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
        paper: "#F3EEE5",
        "paper-tint": "#EAE3D7",
        ink: "#1E1915",
        graphite: "#574D44",
        rule: "#D8CFC2",
        signal: "#7A4B2C",
        sand: "#D8C3A5",
        wine: "#B42318",
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
