/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
  './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'card-transp-white': 'rgba(255, 255, 255, 0.25)'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(347deg, rgba(25,25,25,1) 0%, rgba(80,80,80,1) 35%, rgba(17,17,17,1) 100%);'
      }
    },
  },
  plugins: [],
}

