/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        montasimDev: {
          primary: '#64ffda',
          accent: '#ccd6f6',
          'base-100': '#0a192f',
          'tertiary': '#112240',
          'quaternary': '#233554',
          'quinary': '#e6f1ff',
          'senary': '#ccd6f6',
          'septenary': '#a8b2d1',
          'octonary': '#8892b0',
        },
      }
    ],
  },
  plugins: [require("daisyui")]
}
