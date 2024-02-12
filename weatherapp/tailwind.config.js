/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
  './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'card-transp-white': 'rgba(255, 255, 255, 0.05)',
        'primary-txt': 'rgba(245, 245, 245, 1)',
        'accent-txt': 'rgba(200, 200, 200, 1)',
        'fade-txt': 'rgba(30,30,30,1)'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(347deg, rgba(15,15,15,1) 0%, rgba(40,40,40,1) 35%, rgba(15,15,15,1) 100%);'
      }
    },
  },
  plugins: [],
}

