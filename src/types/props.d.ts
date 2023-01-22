type ButtonProps = {
    title: string;
    href: string;
    download?: boolean;
    classes?: string;
};

type SideColumnProps = {
    orientation: "left" | "right";
};

type SectionProps = {
    id: string;
    title: string;
    number: string;
};
