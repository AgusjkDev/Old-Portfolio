import { whatsApp, twitter, instagram, gitHubOutline, linkedIn } from "./svgs";

const socials: Social[] = [
    {
        name: "WhatsApp",
        href: "https://api.whatsapp.com/send/?phone=5491154896222",
        svg: whatsApp,
        hover: {
            fill: "group-hover:fill-whatsapp",
        },
    },
    {
        name: "Twitter",
        href: "https://twitter.com/agusjkdev",
        svg: twitter,
        hover: {
            fill: "group-hover:fill-twitter",
        },
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/agusjkdev",
        svg: instagram,
        hover: {
            fill: "group-hover:fill-instagram",
        },
    },
    {
        name: "GitHub",
        href: "https://github.com/agusjkdev",
        svg: gitHubOutline,
        hover: {
            fill: "group-hover:fill-github",
        },
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/agusjkdev",
        svg: linkedIn,
        hover: {
            fill: "group-hover:fill-linkedin",
        },
    },
];

export default socials;
