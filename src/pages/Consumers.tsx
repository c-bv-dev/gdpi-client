import { Table } from "@components/ui";
import useConsumer from "@hooks/useConsumer";
import { useEffect, useState } from "react";

interface IProps {

};

const Consumer = (props: IProps) => {

    const {
        getConsumers
    } = useConsumer();

    const [consumer, setConsumer] = useState([]);

    const fetchConsumers = async () => {
        const Consumer = await getConsumers();
        setConsumer(Consumer);
    };

    const tableHeaders = [
        {
            label: 'rfwefwID',
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
        fetchConsumers();
    }, []);

    return (
        <Table
            headers={tableHeaders}
            data={consumer}
        />
    );
};

export default Consumer; 