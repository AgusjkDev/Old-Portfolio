import { externalLink, gitHubFilledSmall } from "./svgs";

const projects: Project[] = [
    {
        title: "Shade Shop",
        anchors: [
            {
                ariaLabel: "Ir a Shade Shop",
                title: "¡Visita Shade Shop!",
                href: "https://shadeshop.vercel.app",
                svg: externalLink,
            },
            {
                ariaLabel: "Ir al repositorio de Shade Shop",
                title: "¡Visita el repositorio de Shade Shop!",
                href: "https://github.com/agusjkdev/shade-shop",
                svg: gitHubFilledSmall,
            },
        ],
        description:
            "E-commerce ficticio en el que encontrarás una gran lista de prendas de vestir. Cuenta con filtrado por categoría, orden alfabético y de precio. Además, ¡podrás registrarte y añadir productos a tu carrito de compras!",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
    },
    {
        title: "Claves Seguras",
        anchors: [
            {
                ariaLabel: "Ir a Claves Seguras",
                title: "¡Visita Claves Seguras!",
                href: "https://claves-seguras.vercel.app",
                svg: externalLink,
            },
            {
                ariaLabel: "Ir al repositorio de Claves Seguras",
                title: "¡Visita el repositorio de Claves Seguras!",
                href: "https://github.com/agusjkdev/claves-seguras",
                svg: gitHubFilledSmall,
            },
        ],
        description:
            "Un sitio web para aprender a asegurar tus contraseñas de los peligrosos ciberdelincuentes. En él podrás calcular y visualizar qué tan segura es tu clave.",
        technologies: ["React.js", "JavaScript", "Vite.js", "TailwindCSS"],
    },
    {
        title: "Technologies Memory Game",
        anchors: [
            {
                ariaLabel: "Ir a Technologies Memory Game",
                title: "¡Visita Technologies Memory Game!",
                href: "https://techsmemo.vercel.app",
                svg: externalLink,
            },
            {
                ariaLabel: "Ir al repositorio de Technologies Memory Game",
                title: "¡Visita el repositorio de Technologies Memory Game!",
                href: "https://github.com/agusjkdev/technologies-memory-game",
                svg: gitHubFilledSmall,
            },
        ],
        description:
            "Como su nombre lo indica, éste es un juego de memoria, con el divertido detalle de que las cartas son tecnologías de todo tipo. ¡También guardará tu récord de puntos!",
        technologies: ["React.js", "JavaScript", "Vite.js", "TailwindCSS"],
    },
    {
        title: "Portfolio",
        anchors: [
            {
                ariaLabel: "Ir a mi portfolio",
                title: "¡Visita mi portfolio!",
                href: "https://arnoldiagustin.vercel.app",
                svg: externalLink,
            },
            {
                ariaLabel: "Ir al repositorio de mi portfolio",
                title: "¡Visita el repositorio de mi portfolio!",
                href: "https://github.com/agusjkdev/portfolio",
                svg: gitHubFilledSmall,
            },
        ],
        description:
            "Éste proyecto, mi portafolio personal. Hecho con mucho amor y con una tecnología que nunca antes había usado, ¡espero que te agrade!",
        technologies: ["Astro", "TypeScript", "TailwindCSS"],
    },
    {
        title: "Poems RESTful API",
        anchors: [
            {
                ariaLabel: "Ir a Poems RESTful API",
                title: "¡Visita Poems RESTful API!",
                href: "https://poems-crud-backend.vercel.app/api/poems",
                svg: externalLink,
            },
            {
                ariaLabel: "Ir al repositorio de Poems RESTful API",
                title: "¡Visita el repositorio de Poems RESTful API!",
                href: "https://github.com/agusjkdev/poems-restful-api",
                svg: gitHubFilledSmall,
            },
        ],
        description:
            "RESTful API para un CRUD de poemas. Cuenta con una robusta verificación de los datos proporcionados y también paginación por cantidad de poemas.",
        technologies: ["Node.js", "Express", "JavaScript", "MongoDB"],
    },
    {
        title: "WhatsApp Bot",
        anchors: [
            {
                ariaLabel: "Ir a WhatsApp Bot",
                title: "¡Visita WhatsApp Bot!",
                href: "https://github.com/agusjkdev/whatsapp-bot/releases/latest",
                svg: externalLink,
            },
            {
                ariaLabel: "Ir al repositorio de WhatsApp Bot",
                title: "¡Visita el repositorio de WhatsApp Bot!",
                href: "https://github.com/agusjkdev/whatsapp-bot",
                svg: gitHubFilledSmall,
            },
        ],
        description:
            "Bot de WhatsApp totalmente automatizado para iniciar sesión, recibir/controlar mensajes y comandos. Conectado a una base de datos para guardar todo tipo de información. Totalmente personalizable y de código abierto para su libre uso.",
        technologies: ["Python", "Selenium", "PostgreSQL"],
    },
];

export default projects;
