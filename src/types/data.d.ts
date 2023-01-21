type NavbarButton = {
    section: string;
    children: string;
};

type Social = {
    name: string;
    href: string;
    svg: SVG;
};

type Skill = {
    name: string;
    technologies: {
        name: string;
        svg: SVG;
    }[];
};

type Project = {
    title: string;
    url: string;
    repository: string;
    description: string;
    technologies: string[];
};
