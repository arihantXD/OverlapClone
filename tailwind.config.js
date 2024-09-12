/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      primary: "#ff2b00",
      grey: "#E8E2E2",
      blue: "#7695FF",
      ligthGrey: "#DDDDDD",
    },
    screens: {
      sm: { max: "650px" },
      md: { max: "850px", min: "650px" },
      lg: "max:1280px",
    },
  },
  plugins: [],
});
