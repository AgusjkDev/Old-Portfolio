import { star, fork } from "./svgs";

const footerAnchors: FooterAnchor[] = [
    {
        key: "stars",
        ariaLabel: "Dar estrella al repositorio",
        title: "¡Dale una estrella al repositorio!",
        href: "https://github.com/agusjkdev/portfolio/stargazers",
        svg: star,
    },
    {
        key: "forks",
        ariaLabel: "Forkear repositorio",
        title: "¡Hazle fork al repositorio!",
        href: "https://github.com/agusjkdev/portfolio/network/members",
        svg: fork,
    },
];

export default footerAnchors;
