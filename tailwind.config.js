/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
        script: ["Allura", "cursive"],
      },
      colors: {
        accent: {
          50: "#fbf3f6",
          100: "#f6e6ec",
          200: "#ecd0dc",
          300: "#dba7bd",
          400: "#c97b98",
          500: "#b3577c",
          600: "#984764",
          700: "#7c3a54",
          800: "#5f2c40",
          900: "#4a2331",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e0",
          300: "#b1b9c6",
          400: "#8690a3",
          500: "#667088",
          600: "#515971",
          700: "#42485c",
          800: "#2b2f3d",
          900: "#181b24",
          950: "#0c0e13",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
