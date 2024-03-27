/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "card-section": "#F3F5FE",
        card1: "#dfe2e2",
        card1h: "#ffFF6F",
        "brand-red": "#FF5656",
        "brand-gray": "#7E7E7E",
      },
      listStyleImage: {
        checkmark: 'url("/img/check.png")',
        cancel: 'url("/img/check.png")',
      },
      width: {
        content: "fit-content",
      },
      fontFamily: {
        DINAlternate: ["DINAlternate", "sans-serif"],
      },
    },
  },
  plugins: [],
};
