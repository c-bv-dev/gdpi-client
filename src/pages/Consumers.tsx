import { Table } from "@components/ui";
import useConsumer from "@hooks/useConsumer";
import { useEffect, useState } from "react";

interface IProps {

};

const Consumer = (props: IProps) => {

    const {
        getConsumer,
    } = useConsumer();

    const [consumer, setConsumer] = useState([]);

    const fetchConsumer = async () => {
        const Consumer = await getConsumer();
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
        fetchConsumer();
    }, []);

    return (
        <Table
            headers={tableHeaders}
            data={consumer}
        />
    );
};

export default Consumer; 