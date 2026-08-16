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
        primary: {
          DEFAULT: "#0F6E56",
          dark: "#0B5443",
          light: "#E4F0EC",
        },
        accent: {
          DEFAULT: "#D85A30",
          dark: "#B84A26",
          light: "#FBEAE2",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F5",
          border: "#E7E5E1",
        },
        ink: {
          DEFAULT: "#1B1F1E",
          muted: "#5B615F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
