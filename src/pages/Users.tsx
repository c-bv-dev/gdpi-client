import useUser from "@hooks/useUser";
import { IUser } from "@utils/types/types";
import { useEffect, useState } from "react";

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
        console.log('🚩', users);
        setUsers(users);
    };

    const handleDeleteUser = async (id: string) => {
        const newUsers = await deleteUser(id, users);
        setUsers(newUsers);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {user.firstName}
                            </th>
                            <td className="px-6 py-4">
                                {user.lastName}
                            </td>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            <td className="px-6 py-4">
                                {user.id}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4" onClick={() => handleDeleteUser(user.id)}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users; 