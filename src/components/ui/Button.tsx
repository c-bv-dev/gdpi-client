interface IProps {
    name?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children: React.ReactNode;
};

const Button = (props: IProps) => {
    const {
        name,
        onClick,
        className,
        children
    } = props;

    return (
        <button
            name={name}
            onClick={onClick}
            className={`bg-gray-800 text-white px-4 py-2 rounded-md ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;