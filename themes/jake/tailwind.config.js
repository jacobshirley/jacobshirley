/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "300px",
      // => @media (min-width: 300px) { ... }

      desktop: "900px",
      // => @media (min-width: 768px) { ... }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Open Sans", "serif"],
    },
    colors: {
      white: "#FFFFFF",
      main: "#7691FF",
      black: "#000000",
      lightgrey: "#F7F7F7",
    },
  },
};
