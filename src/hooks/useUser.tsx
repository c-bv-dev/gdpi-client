import UserContext from '@contexts/UserContext';
import { useContext } from 'react';

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;
};

export default useUser;