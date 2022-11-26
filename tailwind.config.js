/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {      
      center: true,
      // padding: {
      //   sm: '2rem',
      //   md: '3rem',
      //   lg: '6rem',
      //   xl: '7rem',
      //   '2xl': '8rem',
      // },
    },
    extend: {},
  },
  plugins: [],
}