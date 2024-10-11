/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wati-green": "#00E785",
        "Text/Brand/Default": "#2C2C2C",
        "Text/Default/Secondary": "#757575",
        "Text/Default/Tertiary": "#B3B3B3",
        "Background/Brand/Default": "#2C2C2C",
        "Background/Default/Secondary": "#F5F5F5",
        "greyscale/text/title": "#1B1D1C",
        "greyscale/text/body": "#353735",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};