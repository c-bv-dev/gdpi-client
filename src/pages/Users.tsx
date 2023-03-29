import { Table } from '@components/ui';
import useUser from '@hooks/useUser';
import { IUser } from '@utils/types/types';
import { useEffect, useState } from 'react';

interface IProps {

};

const Users = (props: IProps) => {

    const {
        getUsers,
        createUser,
        updateUser,
        deleteUser
    } = useUser();

    const [users, setUsers] = useState([] as IUser[]);

    const fetchUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    const handleCreateUser = async (user: IUser) => {
        const newUsers = await createUser(user, users);
        setUsers(newUsers);
    };

    const handleUpdateUser = async (id: string) => {
        //   open modal
    };

    const handleDeleteUser = async (id: string) => {
        const newUsers = await deleteUser(id, users);
        setUsers(newUsers);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

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

    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <Table
                headers={tableHeaders}
                data={users}
                actions={[
                    {
                        label: 'Update',
                        color: 'bg-yellow-500',
                        onClick: handleUpdateUser
                    },
                    {
                        label: 'Delete',
                        color: 'bg-red-500',
                        onClick: handleDeleteUser
                    }
                ]}
            />
        </div>
    );
};

export default Users; 