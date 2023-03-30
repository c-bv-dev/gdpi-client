import useFetch from '@hooks/useFetch';
import useUser from '@hooks/useUser';
import { createContext } from 'react';

const TicketContext = createContext({} as any);

export const TicketProvider = ({ children }: any) => {

    const fetcher = useFetch();

    const { user } = useUser();

    const getTickets = async () => {
        return await fetcher(`${process.env.VITE_API_URL}/ticket`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    const getTicket = async (id: string) => {
        return await fetcher(`${process.env.VITE_API_URL}/ticket/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    const createTicket = async (ticket: any) => {
        return await fetcher(`${process.env.VITE_API_URL}/ticket`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(ticket)
        });
    };

    const updateTicket = async (id: string, ticket: any) => {
        return await fetcher(`${process.env.VITE_API_URL}/ticket/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify(ticket)
        });
    };

    const deleteTicket = async (id: string) => {
        return await fetcher(`${process.env.VITE_API_URL}/ticket/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        });
    };

    return (
        <TicketContext.Provider
            value={{
                getTickets,
                getTicket,
                createTicket,
                updateTicket,
                deleteTicket
            }}
        >
            {children}
        </TicketContext.Provider>
    );
};

export default TicketContext;