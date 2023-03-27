import useFetch from '@hooks/useFetch';
import { IUser } from '@utils/types/types';
import { createContext, useState } from 'react';

const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any) => {
    const fetcher = useFetch();

    const [user, setUser] = useState({} as IUser);

    const getUser = async () => {
        const user = localStorage.getItem('user');
        if (!user) return;
        const { id: userId } = JSON.parse(user);
        const data = await fetcher(`${process.env.VITE_API_URL}/user/${userId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (data) setUser(data);
    };

    return (
        <UserContext.Provider
            value={{
                user, setUser,
                getUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;