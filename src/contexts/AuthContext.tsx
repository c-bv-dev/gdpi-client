import useFetch from '@hooks/useFetch';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: any) => {

    const navigate = useNavigate();

    const fetcher = useFetch();

    const login = async (email: string, password: string): Promise<void> => {
        const data = await fetcher(`${process.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (data) {
            localStorage.setItem('user', JSON.stringify({ token: data.token, id: data.id }));
            return data;
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
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <AuthContext.Provider
            value={{
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