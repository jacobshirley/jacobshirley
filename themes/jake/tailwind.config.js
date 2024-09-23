/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Open Sans", "serif"],
    },
    screens: {
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      main: "#7691FF",
      black: "#000000",
      lightgrey: "#F7F7F7",
    },
  },
};
