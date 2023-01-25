interface ButtonProps {
    title: string;
    href: string;
    download?: boolean;
    classes?: string;
}

interface SideColumnProps {
    orientation: "left" | "right";
}

interface SectionProps {
    id: string;
    title: string;
    number: string;
}
