import { Input } from '@components/ui';
import useToast from '@hooks/useToast';
import useUser from '@hooks/useUser';
import { IUser } from '@utils/types/types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
    isEdit?: boolean;
};

const CreateUser = (props: IProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const userId = location?.pathname.split('/')[3];

    const { getUser, updateUser, createUser } = useUser();
    const { notify } = useToast();

    const [existingUser, setExistingUser] = useState({} as IUser);

    const getExistingUser = async () => {
        const user = await getUser(userId);
        setExistingUser(user);
    };

    const handleUpdateUser = async () => {
        const data = await updateUser(existingUser);
        data && notify({ message: 'User updated successfully', type: 'success' });
        navigate('/users');
    };

    const handleCreateUser = async () => {
        const data = await createUser(existingUser);
        data && notify({ message: 'User created successfully', type: 'success' });
        navigate('/users');
    };

    useEffect(() => {
        props.isEdit && getExistingUser();
    }, []);

    return (
        <form>
            <div className='flex items-center justify-center gap-4'>
                <div className='flex flex-col gap-2 w-1/2'>
                    <Input type='text' label='firstName' name='firstName'
                        value={existingUser?.firstName || ''}
                        onChange={(e) => setExistingUser({ ...existingUser, firstName: e.target.value })} />
                    <Input type='text' label='lastName' name='lastName'
                        value={existingUser?.lastName || ''}
                        onChange={(e) => setExistingUser({ ...existingUser, lastName: e.target.value })}
                    />
                </div>
                <div className='flex flex-col gap-2 w-1/2'>
                    <Input type='text' label='email' name='email'
                        value={existingUser?.email || ''}
                        onChange={(e) => setExistingUser({ ...existingUser, email: e.target.value })}
                    />
                    {!props.isEdit ?
                        <Input type='password' label='password' name='password' onChange={(e) => setExistingUser({ ...existingUser, password: e.target.value })} />
                        :
                        <Input type='text' label='role' name='role' value={existingUser?.role || ''} />
                    }
                </div>
            </div>
            <button
                type='button'
                onClick={props.isEdit ? handleUpdateUser : handleCreateUser}
                className='bg-gray-900 text-white p-2 rounded mt-4'
            >
                {props.isEdit ? 'Update user' : 'Create user'}
            </button>
        </form>
    );
};

export default CreateUser;  