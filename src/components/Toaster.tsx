import { ToastContainer } from 'react-toastify';

interface IProps {
    delay?: number;
    theme?: 'light' | 'dark';
};

const Toaster = (props: IProps) => {
    const { delay, theme } = props;

    return (
        <ToastContainer
            position='top-right'
            autoClose={delay || 3000}
            newestOnTop
            theme={theme || 'dark'}
        />
    );
};

export default Toaster;