import useFetch from '@hooks/useFetch';
import { IUser } from '@utils/types/types';
import { createContext, useState } from 'react';

const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any) => {
    const fetcher = useFetch();

    const [user, setUser] = useState(null as IUser | null);

    const getUser = async (id: string) => {
        return await fetcher(`${process.env.VITE_API_URL}/user/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
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