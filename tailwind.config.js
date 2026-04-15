const { Colors } = require("./constants/Colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: Colors.colorprimary,
                secondary: Colors.colorsecondary,
                accent: Colors.coloraccent,
                outline: Colors.coloroutline,
            },
        },
    },
    plugins: [],
};