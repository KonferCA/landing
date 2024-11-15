/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                'eerie-black': '#1C1C1C',
                'azure': '#5084F5',
                'celestial-blue': '#449DD1',
                'almond': '#FBE4CE',
                'seasalt': '#F8F8F8',
            },
            backgroundImage: {
                'expertise-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 50%, rgba(80, 132, 245, 0.22) 100%)',
            },
        },
    },

    plugins: [],
}
