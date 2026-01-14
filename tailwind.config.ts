import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Figma
        primary: {
          purple: "#812ffb",
          "purple-light": "#c9a4ff",
          navy: "#092c4c",
        },
        neutral: {
          white: "#FFFFFF",
          black: "#000000",
          "gray-1": "#1C1C1C",
          "gray-2": "#2E2E3A",
          "gray-3": "#323C47",
          "gray-4": "#4C5862",
          "gray-5": "#6a707e",
          "gray-6": "#999999",
          "gray-7": "#AEAEAE",
          "gray-8": "#C2CFE0",
          "gray-9": "#D3D8DD",
          "gray-10": "#D5D5D5",
          "gray-11": "#E2E2EA",
          "gray-12": "#E4E4E4",
          "gray-13": "#EBEFF2",
        },
        background: {
          dark: "#12141d",
          black: "#000000",
        },
        success: {
          green: "#00BA34",
        },
        blue: {
          primary: "#2B59FF",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "plus-jakarta": ["var(--font-plus-jakarta)", "sans-serif"],
      },
      backdropBlur: {
        xs: "12.486px",
        sm: "12.737px",
        md: "20.95px",
      },
      boxShadow: {
        "purple-glow": "0px_0px_83.25px_11.25px_rgba(129,47,251,0.5)",
        "white-glow": "0px_0px_83.25px_11.25px_rgba(255,255,255,0.5)",
        "inset-purple": "inset_3.746px_3.746px_4.994px_0px_rgba(171,115,255,0.17)",
        "inset-purple-lg": "inset_4px_4px_19.1px_0px_rgba(187,160,229,0.25),inset_-7px_-2px_19.1px_0px_rgba(41,10,87,0.53)",
      },
    },
  },
  plugins: [],
};
export default config;

