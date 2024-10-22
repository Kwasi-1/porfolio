/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['"Grandslang roman"', 'serif'],  // Custom font
      },
      colors: {
        primary: '#1a1818',   // Black background for Work Page
        accent: '#f5f5f5',    // Light background for Home Page
      },
      backgroundColor: {
        'dark': '#1a1818',    // Background for Work Page
        'light': '#ece7e1',   // Background for Home Page
      }
    },
  },
  plugins: [],
}

