type NavbarButton = {
    section: string;
    children: string;
};

type Social = {
    name: string;
    href: string;
    svg: SVG;
    hover: {
        fill: string;
    };
};

type Skill = {
    name: string;
    technologies: {
        name: string;
        svg: SVG;
        hover: {
            fill: string;
            text: string;
        };
    }[];
};

type Project = {
    title: string;
    url: string;
    repository: string;
    description: string;
    technologies: string[];
};
