/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','.//*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '600px',
      lg: '1200px',
      xl: '1440px',
      '2xl': '1836px',
      '3xl': '2500px',

    },
    extend: {
      fontFamily: {
        text: ['Quicksand'
          , 'sans-serif'], // Add the font family here
      },
    },
    
  },
  plugins: [],
  
  
}

