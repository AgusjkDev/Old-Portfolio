const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.astro"],
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
        },
    },
    plugins: [
        plugin(({ addUtilities, _, e }) => {
            const [from, to, incrementBy] = [0, 2000, 250];

            let values = [];
            for (let i = from; i <= to; i += incrementBy) {
                values.push(i);
            }

            let animationProperties = {};
            values.forEach(value => {
                const key = value > 0 ? value : "none";

                animationProperties = Object.assign({}, animationProperties, {
                    [`.${e(`animation-duration-${key}`)}`]: {
                        animationDuration: `${value}ms`,
                    },
                    [`.${e(`animation-delay-${key}`)}`]: {
                        animationDelay: `${value}ms`,
                    },
                });
            });

            addUtilities(animationProperties);
        }),
    ],
};
