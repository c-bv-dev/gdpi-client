import { toast } from 'react-toastify';

interface IToast {
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
};

const useToast = () => {
    
    const notify = ({ message, type }: IToast) => {
        toast[type](message);
    };
    return { notify };
};

export default useToast;