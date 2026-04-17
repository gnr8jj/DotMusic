const { Colors } = require("./constants/Colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                accent: Colors.coloraccent,
                primary: Colors.colorprimary,
                secondary: Colors.colorsecondary,
                outline: Colors.coloroutline,
                maintext: Colors.textprimary,
            },
        },
    },
    plugins: [],
};