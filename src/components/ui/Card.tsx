interface IProps {
    title: string,
    description: string
};

const Card = ({ title, description }: IProps) => {
    return (
        <div className='rounded bg-gray-900 h-24 w-60 ring-2 ring-blue-700 p-2'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Card;