import {
    adobePhotoshop,
    astro,
    css,
    excel,
    express,
    flask,
    git,
    gitHubFilled,
    html,
    javaScript,
    JsonWebTokens,
    mongoDb,
    nextJs,
    nodeJs,
    postgreSql,
    python,
    reactJs,
    swagger,
    tailwindCss,
    telerikFiddler,
    typeScript,
    viteJs,
    webScrapping,
} from "./svgs";

const skills: Skill[] = [
    {
        name: "Frontend",
        technologies: [
            {
                name: "HTML",
                svg: html,
            },
            {
                name: "CSS",
                svg: css,
            },
            {
                name: "TailwindCSS",
                svg: tailwindCss,
            },
            {
                name: "JavaScript",
                svg: javaScript,
            },
            {
                name: "TypeScript",
                svg: typeScript,
            },
            {
                name: "Astro",
                svg: astro,
            },
            {
                name: "Vite.js",
                svg: viteJs,
            },
            {
                name: "React.js",
                svg: reactJs,
            },
            {
                name: "Next.js",
                svg: nextJs,
            },
        ],
    },
    {
        name: "Backend",
        technologies: [
            {
                name: "Node.js",
                svg: nodeJs,
            },
            {
                name: "Express",
                svg: express,
            },
            {
                name: "MongoDB",
                svg: mongoDb,
            },
            {
                name: "Python",
                svg: python,
            },
            {
                name: "Flask",
                svg: flask,
            },
            {
                name: "PostgreSQL",
                svg: postgreSql,
            },
            {
                name: "JSON Web Tokens",
                svg: JsonWebTokens,
            },
        ],
    },
    {
        name: "Otros",
        technologies: [
            {
                name: "Adobe Photoshop",
                svg: adobePhotoshop,
            },
            {
                name: "Excel",
                svg: excel,
            },
            {
                name: "Git",
                svg: git,
            },
            {
                name: "GitHub",
                svg: gitHubFilled,
            },
            {
                name: "Swagger",
                svg: swagger,
            },
            {
                name: "Telerik Fiddler",
                svg: telerikFiddler,
            },
            {
                name: "Web Scrapping",
                svg: webScrapping,
            },
        ],
    },
];

export default skills;
