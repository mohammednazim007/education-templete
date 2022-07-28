/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '.1rem',
    },
    screens: {
      sm: '640px',
      md: '768px', //tab
      lg: '992px',
      xl: '1200px'
    }
  },
  plugins: [

  ],
}
