import ModalContext from '@contexts/ModalContext';
import { useContext } from 'react';

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;

};

export default useModal;