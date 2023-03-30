import { useNavigate } from 'react-router-dom';

interface IProps {
    previousPath: string;
    currentPath: string;
};

const Breadcrumbs = (props: IProps) => {
    const navigate = useNavigate();
    const { previousPath, currentPath } = props;

    return (
        <div className='py-4 flex flex-row items-center'>
            <ol className='list-reset flex'>
                <li>
                    <span
                        onClick={() => navigate(`/${previousPath}`)}
                        className='font-semibold text-2xl text-neutral-2 cursor-pointer capitalize hover:text-blue-500'
                    >
                        {previousPath}
                    </span>
                </li>
                {currentPath &&
                    <>
                        <li>
                            <span className='mx-2 text-neutral-500'>/</span>
                        </li>
                        <li>
                            <span
                                className='font-semibold text-2xl text-neutral-700 capitalize'
                            >
                                {currentPath}
                            </span>
                        </li>
                    </>
                }
            </ol>
        </div>
    );
};

export default Breadcrumbs;