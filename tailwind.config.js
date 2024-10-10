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
        "Text/Default/Default": "#1E1E1E",
        "Text/Default/Secondary": "#757575",
        "Background/Brand/Default": "#2C2C2C",
        "Background/Default/Secondary": "#F5F5F5",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};