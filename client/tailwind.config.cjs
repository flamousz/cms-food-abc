/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      lato: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
