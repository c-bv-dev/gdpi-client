import useFetch from '@hooks/useFetch';
import { IUser } from '@utils/types/types';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: any) => {

    const navigate = useNavigate();

    const fetcher = useFetch();

    const [user, setUser] = useState({} as IUser);

    const login = async (email: string, password: string): Promise<void> => {
        const data = await fetcher(`${process.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (data) {
            setUser(data);
            navigate('dashboard');
        }
    };

    const register = (email: string, password: string) => {
        return fetch(`${process.env.VITE_API_URL}/auth/register`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
    };

    const logout = () => {
        return fetch(`${process.env.VITE_API_URL}/auth/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;