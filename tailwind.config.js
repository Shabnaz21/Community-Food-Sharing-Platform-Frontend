/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": "'Jost', sans- serif",
        "montserrat": "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [require("daisyui"), ('flowbite/plugin')],
  daisyui: {
    themes: ['emerald', 'dark'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },
}

