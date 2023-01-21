import { whatsApp, twitter, instagram, gitHubOutline, linkedIn } from "./svgs";

const socials: Social[] = [
    {
        name: "WhatsApp",
        href: "https://api.whatsapp.com/send/?phone=5491154896222",
        svg: whatsApp,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/agusjkdev",
        svg: twitter,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/agusjkdev",
        svg: instagram,
    },
    {
        name: "GitHub",
        href: "https://github.com/agusjkdev",
        svg: gitHubOutline,
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/agusjkdev",
        svg: linkedIn,
    },
];

export default socials;
