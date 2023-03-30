interface IProps {
    type: string;
    name?: string;
    label?: string;
    value?: string | undefined;
    reference?: React.RefObject<HTMLInputElement>;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
    props?: any;
};

const Input = (props: IProps) => {
    const {
        type,
        name,
        label,
        value,
        reference,
        placeholder,
        onChange,
        className,
        error,
        ...rest
    } = props;

    return (
        <div>
            {label && <label htmlFor={name} className='block text-sm text-gray-300'>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                ref={reference}
                placeholder={placeholder}
                onChange={onChange}
                className={`
                    w-full px-3 py-2 mt-1 text-sm text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md focus:border-blue-500 focus:outline-none  
                    ${error && 'border-red-500'}
                    ${className}
                `}
            />
            <p className='text-red-500 text-xs'>{error}</p>
        </div>
    );
};

export default Input;