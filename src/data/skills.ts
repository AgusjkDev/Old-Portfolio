import * as svgs from "./svgs";

const skills: Skill[] = [
    {
        name: "Frontend",
        technologies: [
            {
                name: "HTML",
                svg: svgs.html,
                hover: {
                    fill: "group-hover:fill-html",
                    text: "group-hover:text-html",
                },
            },
            {
                name: "CSS",
                svg: svgs.css,
                hover: {
                    fill: "group-hover:fill-css",
                    text: "group-hover:text-css",
                },
            },
            {
                name: "TailwindCSS",
                svg: svgs.tailwindCss,
                hover: {
                    fill: "group-hover:fill-tailwindcss",
                    text: "group-hover:text-tailwindcss",
                },
            },
            {
                name: "JavaScript",
                svg: svgs.javaScript,
                hover: {
                    fill: "group-hover:fill-javascript",
                    text: "group-hover:text-javascript",
                },
            },
            {
                name: "TypeScript",
                svg: svgs.typeScript,
                hover: {
                    fill: "group-hover:fill-typescript",
                    text: "group-hover:text-typescript",
                },
            },
            {
                name: "Astro",
                svg: svgs.astro,
                hover: {
                    fill: "group-hover:fill-astro",
                    text: "group-hover:text-astro",
                },
            },
            {
                name: "Vite.js",
                svg: svgs.viteJs,
                hover: {
                    fill: "group-hover:fill-vitejs",
                    text: "group-hover:text-vitejs",
                },
            },
            {
                name: "React.js",
                svg: svgs.reactJs,
                hover: {
                    fill: "group-hover:fill-reactjs",
                    text: "group-hover:text-reactjs",
                },
            },
            {
                name: "Next.js",
                svg: svgs.nextJs,
                hover: {
                    fill: "group-hover:fill-nextjs",
                    text: "group-hover:text-nextjs",
                },
            },
        ],
    },
    {
        name: "Backend",
        technologies: [
            {
                name: "Node.js",
                svg: svgs.nodeJs,
                hover: {
                    fill: "group-hover:fill-nodejs",
                    text: "group-hover:text-nodejs",
                },
            },
            {
                name: "Express",
                svg: svgs.express,
                hover: {
                    fill: "group-hover:fill-express",
                    text: "group-hover:text-express",
                },
            },
            {
                name: "MongoDB",
                svg: svgs.mongoDb,
                hover: {
                    fill: "group-hover:fill-mongodb",
                    text: "group-hover:text-mongodb",
                },
            },
            {
                name: "Python",
                svg: svgs.python,
                hover: {
                    fill: "group-hover:fill-python",
                    text: "group-hover:text-python",
                },
            },
            {
                name: "Flask",
                svg: svgs.flask,
                hover: {
                    fill: "group-hover:fill-flask",
                    text: "group-hover:text-flask",
                },
            },
            {
                name: "PostgreSQL",
                svg: svgs.postgreSql,
                hover: {
                    fill: "group-hover:fill-postgresql",
                    text: "group-hover:text-postgresql",
                },
            },
            {
                name: "JSON Web Tokens",
                svg: svgs.JsonWebTokens,
                hover: {
                    fill: "group-hover:fill-jsonwebtokens",
                    text: "group-hover:text-jsonwebtokens",
                },
            },
        ],
    },
    {
        name: "Otros",
        technologies: [
            {
                name: "Adobe Photoshop",
                svg: svgs.adobePhotoshop,
                hover: {
                    fill: "group-hover:fill-adobephotoshop",
                    text: "group-hover:text-adobephotoshop",
                },
            },
            {
                name: "Excel",
                svg: svgs.excel,
                hover: {
                    fill: "group-hover:fill-excel",
                    text: "group-hover:text-excel",
                },
            },
            {
                name: "Git",
                svg: svgs.git,
                hover: {
                    fill: "group-hover:fill-git",
                    text: "group-hover:text-git",
                },
            },
            {
                name: "GitHub",
                svg: svgs.gitHubFilled,
                hover: {
                    fill: "group-hover:fill-github",
                    text: "group-hover:text-github",
                },
            },
            {
                name: "Swagger",
                svg: svgs.swagger,
                hover: {
                    fill: "group-hover:fill-swagger",
                    text: "group-hover:text-swagger",
                },
            },
            {
                name: "Telerik Fiddler",
                svg: svgs.telerikFiddler,
                hover: {
                    fill: "group-hover:fill-telerikfiddler",
                    text: "group-hover:text-telerikfiddler",
                },
            },
            {
                name: "Web Scrapping",
                svg: svgs.webScrapping,
                hover: {
                    fill: "group-hover:fill-webscrapping",
                    text: "group-hover:text-webscrapping",
                },
            },
        ],
    },
];

export default skills;
