import { useContext } from 'react';
import LoaderContext from '@contexts/LoaderContext';

const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;
};

export default useLoader;