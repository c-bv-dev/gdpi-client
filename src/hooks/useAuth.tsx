import AuthContext from '@contexts/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;
};

export default useAuth;