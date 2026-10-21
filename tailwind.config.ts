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
        background: "#F7F5F0",
        brand: {
          offwhite: "#F7F5F0",
          card: "#FFFFFF",
          iceblue: {
            DEFAULT: "#A9C1D0",
            light: "#EAF2F6",
            muted: "#C5D8E4",
            dark: "#7B9EAE",
          },
          slate: {
            DEFAULT: "#29333A",
            muted: "#4A5964",
            dark: "#1C242A",
          },
          graphite: "#111417",
          border: "#E7EAEC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(17, 20, 23, 0.04)",
        card: "0 8px 30px rgba(17, 20, 23, 0.06)",
        hover: "0 14px 40px rgba(41, 51, 58, 0.10)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 9s ease-in-out 3s infinite",
        "orbit-slow": "orbit 60s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
