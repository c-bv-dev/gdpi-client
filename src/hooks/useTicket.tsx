import TicketContext from '@contexts/TicketContext';
import { useContext } from 'react';

const useTicket = () => {
    const context = useContext(TicketContext);
    if (!context) throw new Error('Context must be use inside provider');
    return context;
};

export default useTicket;