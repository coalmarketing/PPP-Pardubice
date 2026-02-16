/** @type {import('tailwindcss').Config} */
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: "selector",
    content: {
        files: ["./src/**/*.{html,njk,js}"],
        extract,
    },
    theme: {
        fontSize: fontSize,
        screens: screens,
        extend: {
            fontFamily: {
                "sans": ["Inclusive Sans", defaultTheme.fontFamily.sans],
                "inter": ["Inter", defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: "#262464",
                secondary: {
                    DEFAULT: '#5CC8FF',
                    50: '#EFF9FF',
                    100: '#DFF2FF',
                    200: '#BFE6FF',
                    300: '#9AD8FF',
                    400: '#7ACDFF',
                    500: '#5CC8FF',
                    600: '#3BB7F0',
                    700: '#2498CC',
                    800: '#1D7BA3',
                    900: '#175F7D'
                }
            }
        },
    },
    plugins: [
        fluid,
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}