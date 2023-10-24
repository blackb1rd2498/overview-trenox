

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend:
    {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}