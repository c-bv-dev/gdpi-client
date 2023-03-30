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

    const getUsers = async () => {
        return await fetcher(`${process.env.VITE_API_URL}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    const createUser = async (user: IUser) => {
        return await fetcher(`${process.env.VITE_API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(user)
        });
    };

    const updateUser = async (userData: IUser) => {
        return await fetcher(`${process.env.VITE_API_URL}/user/${userData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(userData)
        });

    };

    const deleteUser = async (id: string, users: IUser[]) => {
        await fetcher(`${process.env.VITE_API_URL}/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}`
            }
        });
        return users.filter((user) => user.id !== id);
    };

    return (
        <UserContext.Provider
            value={{
                user, setUser,
                getUser,
                getUsers,
                createUser,
                updateUser,
                deleteUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;