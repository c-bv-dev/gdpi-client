import { useState } from 'react';
import { IUser } from '../utils/types';

const useAuth = () => {
    const [user, setUser] = useState({
        id: '',
        email: '',
        role: '',
    } as IUser);

    return {
        user, setUser,
    };
};

export default useAuth;