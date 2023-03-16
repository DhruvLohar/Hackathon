/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#252525"
      },
      fontFamily: {
        title: "Aquatico",
        outline: "PorticoOutline"
      }
    },
  },
  plugins: [],
}
