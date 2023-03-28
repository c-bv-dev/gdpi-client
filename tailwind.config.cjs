/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': 'linear-gradient(rgba(24, 24, 27, 0.7), rgba(24, 24, 27, 0.7)), url(src/assets/images/grid.svg)',
            },
            animation: {
                'shimmer': 'shimmer 1s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': {
                        width: '75%',
                    },
                    '50%': {
                        width: '50%',
                    },
                    '100%': {
                        width: '100%',
                        transform: 'translateX(100%)',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
