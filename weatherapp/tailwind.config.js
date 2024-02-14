/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'card-transp-white': 'rgba(255, 255, 255, 0.05)',
                'primary-col': '#0066FF',
                'primary-col-transp': '#0066FF55',
                'accent-col': '#00C2FF',
                'accent-col-transp': '#00C2FF12',
                'fade-col': '#C6D3E3'
            },
            backgroundImage: {
                'gradient': 'linear-gradient(45deg, #C6D3E3 0%, #FAFBFD 100%);'
            },
            keyframes: {
                'rotate-kf': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
            },
            animation: {
                'rotate': 'rotate-kf 25s linear infinite'
            }
        },
    },
    plugins: [],
}

