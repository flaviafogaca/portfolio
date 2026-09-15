/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          50: "#effcf6",
          100: "#c9f7e4",
          200: "#94eec9",
          300: "#5cdfae",
          400: "#2ecc94",
          500: "#14b37f",
          600: "#0c9268",
          700: "#0c7355",
          800: "#0d5b45",
          900: "#0c4b3a",
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
