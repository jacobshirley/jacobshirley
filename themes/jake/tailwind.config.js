/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Outfit", "sans-serif"],
    },
    screens: {
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      blue: "#7691FF",
      black: "#000000",
      lightgrey: "#F1F1F1",
    },
  },
};
