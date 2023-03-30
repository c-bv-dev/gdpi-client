import { Table } from '@components/ui';
import useModal from '@hooks/useModal';
import useUser from '@hooks/useUser';
import { IUser } from '@utils/types/types';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {

    const navigate = useNavigate();

    const {
        getUsers,
        deleteUser
    } = useUser();

    const { openModal, closeModal } = useModal();

    const [users, setUsers] = useState([] as IUser[]);

    const fetchUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    const handleDeleteUser = async (id: string) => {
        const newUsers = await deleteUser(id, users);
        setUsers(newUsers);
    };

    const warnBeforeDelete = (id: string) => {
        openModal(
            'error',
            'Delete user',
            'Are you sure you want to delete this user?',
            [
                {
                    label: 'Cancel',
                    onClick: () => closeModal()
                },
                {
                    label: 'Delete',
                    onClick: () => handleDeleteUser(id)
                }
            ]
        );
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
            <div className='flex flex-row justify-end p-4'>
                <Link
                    to='/users/new'
                    className='flex flex-row items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                >
                    <FiPlus className='w-5 h-5 mr-2' />Create User
                </Link>
            </div>
            <Table
                headers={tableHeaders}
                data={users}
                actions={[
                    {
                        label: 'Update',
                        color: 'bg-yellow-500',
                        onClick: (id: string) => navigate(`/users/edit/${id}`)
                    },
                    {
                        label: 'Delete',
                        color: 'bg-red-500',
                        onClick: warnBeforeDelete
                    }
                ]}
            />
        </div>
    );
};

export default Users; 