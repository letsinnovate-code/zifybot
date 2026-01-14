interface RoutProps {
    className?: string;
    rout?: string;
}

export const Rout = ({
    className,
    rout = "https://c.animaapp.com/mkdwl6j9ZtNmSf/img/rout.svg",
}: RoutProps) => {
    return (
        <img
            className={`absolute top-0 left-0 w-6 h-6 ${className}`}
            alt="Rout"
            src={rout}
        />
    );
};

export default Rout;
