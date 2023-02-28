/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
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
