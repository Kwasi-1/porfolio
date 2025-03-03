/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Grandslang Roman', 'Poppins' , 'sans-serif'],  // Custom font
        'body' : ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#1a1818',   // Black background for Work Page
        accent: '#ece7e1',    // Light background for Home Page
      },
      backgroundColor: {
        'dark': '#1a1818',    // Background for Work Page
        'light': '#ece7e1',   // Background for Home Page
      }
    },
  },
  plugins: [],
}

