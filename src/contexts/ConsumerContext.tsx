import useFetch from '@hooks/useFetch';
import useUser from '@hooks/useUser';
import { createContext } from 'react';

const ConsumerContext = createContext({} as any);

export const ConsumerProvider = ({ children }: any) => {

    const fetcher = useFetch();

    const { user } = useUser();

    const getConsumers = async () => {
        return await fetcher(`${process.env.VITE_API_URL}/consumer`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    const getConsumer = async (id: string) => {
        return await fetcher(`${process.env.VITE_API_URL}/consumer/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    const createConsumer = async (consumer: any) => {
        return await fetcher(`${process.env.VITE_API_URL}/consumer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(consumer)
        });
    };

    const updateConsumer = async (id: string, consumer: any) => {
        return await fetcher(`${process.env.VITE_API_URL}/consumer/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(consumer)
        });
    };

    const deleteConsumer = async (id: string) => {
        return await fetcher(`${process.env.VITE_API_URL}/consumer/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    return (
        <ConsumerContext.Provider
            value={{
                getConsumers,
                getConsumer,
                createConsumer,
                updateConsumer,
                deleteConsumer
            }}
        >
            {children}
        </ConsumerContext.Provider>
    );
};

export default ConsumerContext;