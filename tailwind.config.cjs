const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.astro"],
    theme: {
        extend: {
            fontFamily: {
                calibre: ["Calibre", ...fontFamily.sans],
                sfmono: ["SF Mono", ...fontFamily.mono],
            },
        },
    },
    plugins: [],
};
