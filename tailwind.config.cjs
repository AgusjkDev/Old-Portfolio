const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,tsx,ts}"],
    theme: {
        extend: {
            fontFamily: {
                calibre: ["Calibre", ...fontFamily.sans],
                sfmono: ["SF Mono", ...fontFamily.mono],
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
                "fade-in-down": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-125%)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0%)",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(125%)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0%)",
                    },
                },
                floating: {
                    "0%": {
                        transform: "translateY(-15%)",
                    },
                    "50%": {
                        transform: "translateY(15%)",
                    },
                    "100%": {
                        transform: "translateY(-15%)",
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 2s 3s both",
                "fade-in-down": "fade-in-down 1.75s 2.5s both",
                "fade-in-up": "fade-in-up 1.75s 2.5s both",
                arrow: "fade-in 2.5s 3s both, floating 1.5s 3s infinite",
            },
            maxWidth: {
                "prose-lg": "75ch",
            },
            colors: {
                whatsapp: "#25d366",
                twitter: "#1da1f2",
                instagram: "#de52b2",
                github: "#f0f6fc",
                linkedin: "#0e76a8",
                html: "#e34f26",
                css: "#1572b6",
                tailwindcss: "#06b6d4",
                javascript: "#f7df1e",
                typescript: "#3178c6",
                astro: "#ff5d01",
                vitejs: "#646cff",
                reactjs: "#61dafb",
                nextjs: "#000000",
                nodejs: "#339933",
                express: "#000000",
                mongodb: "#47a248",
                python: "#3776ab",
                flask: "#000000",
                postgresql: "#4169e1",
                jsonwebtokens: "#000000",
                adobephotoshop: "#31a8ff",
                excel: "#217346",
                git: "#f05032",
                swagger: "#85ea2d",
                telerikfiddler: "#5ce500",
                webscrapping: "#43b02a",
            },
            dropShadow: {
                white: "0px 0px 5px #ffffff25",
            },
        },
    },
    plugins: [
        plugin(({ addUtilities, e }) => {
            const [from, to, incrementBy] = [0, 2000, 250];
            const values = Array.from(
                { length: (to - from) / incrementBy + 1 },
                (_, i) => from + incrementBy * i
            );

            const animationProperties = values.reduce((acc, value) => {
                const key = value === 0 ? "none" : value;

                return {
                    ...acc,
                    [`.${e(`animation-duration-${key}`)}`]: {
                        animationDuration: `${value}ms`,
                    },
                    [`.${e(`animation-delay-${key}`)}`]: {
                        animationDelay: `${value}ms`,
                    },
                };
            }, {});

            addUtilities(animationProperties);
        }),
    ],
};
