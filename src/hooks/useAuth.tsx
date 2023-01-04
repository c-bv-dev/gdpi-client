import { useState } from 'react';
import { IUser } from '../utils/types';

const useAuth = () => {
    const [user, setUser] = useState({} as IUser);

    return {
        user, setUser
    };
};

export default useAuth;