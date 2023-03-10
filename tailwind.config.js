/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      blue: "#0007BF",
      black: colors.black,
      brightorange: "#E15027",
      current: "currentColor",
      cyan: "#00FFFF",
      darkorange: "#B74128",
      deepblue: "#00002A",
      gray: colors.gray,
      green: "#6CFF6A",
      orange: "#DD5127",
      pink: "#FF3FFD",
      red: "#D41100",
      transparent: "transparent",
      white: colors.white,
      yellow: "#F4FF15",
    },
    extend: {
      animation: {
        loop: "loop var(--loop-duration) linear infinite var(--loop-direction)",
      },
      borderWidth: {
        16: "16px",
      },
      fontSize: {
        "fluid-m": "clamp(1rem, calc(1rem + .78vw), 2rem)",
        "fluid-l": "clamp(1.4rem, calc(1rem + 2.28vw), 3rem)",
        "fluid-xl": "clamp(2rem, calc(1.32rem + 4.28vw), 9rem)",
      },
      keyframes: {
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    fontFamily: {
      cotext: ["cotext", "system-ui", "sans-serif"],
      cohead: ["cohead", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
