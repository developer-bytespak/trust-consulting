import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          offwhite: "#FAFAF8",
          gold: "#B8960C",
          "gold-light": "#D4AF37",
          "gold-muted": "#C9A84C",
          divider: "#F0EDE8",
          "gold-bg": "#FBF8F0",
          "footer-bg": "#0D0D0D",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sub: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
