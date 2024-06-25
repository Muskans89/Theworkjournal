/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom1': ['Noto Sans'],
        'custom2': ['Dancing Script'],
        'custom3': ['Roboto Condensed'],
        'custom4': ['Lora'],
        'custom5': ['Raleway'],
        'custom6': ['Forum'],
        'custom7': ['Brittany'],
        'custom8': ['Montserrat'],
      },
      colors: {
        customLightBlue: '#cbdde0', // You can name it anything you want
        customDarkBlue: '#152238', 
      },
    },
  },
  plugins: [
    
  ],
}