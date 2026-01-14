interface IconProps {
    className?: string;
    icon?: string;
}

export const Icon = ({
    className,
    icon = "https://c.animaapp.com/mkdwl6j9ZtNmSf/img/icon-1.svg",
}: IconProps) => {
    return (
        <img
            className={`absolute top-0 left-0 w-6 h-6 ${className}`}
            alt="Icon"
            src={icon}
        />
    );
};

export default Icon;
