import { Table } from "@components/ui";
import useTicket from "@hooks/useTicket";
import { useEffect, useState } from "react";

interface IProps {

};

const Tickets = (props: IProps) => {

    const {
        getTickets,
    } = useTicket();

    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        const tickets = await getTickets();
        setTickets(tickets);
    };

    const tableHeaders = [
        {
            label: 'ID',
            value: 'id',
        },
        {
            label: 'Firstname',
            value: 'firstName',
        },
        {
            label: 'Lastname',
            value: 'lastName',
        },
        {
            label: 'Email',
            value: 'email',
        },
        {
            label: 'Role',
            value: 'role',
        }
    ];

    useEffect(() => {
        fetchTickets();
    }, []);

    return (
        <Table
            headers={tableHeaders}
            data={tickets}
        />
    );
};

export default Tickets; 