import useUser from '@hooks/useUser';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface IProps {
    roles?: string[];
};

const RequireAuth = (props: IProps) => {
    const navigate = useNavigate();

    const { user, setUser, getUser } = useUser();

    const checkUser = async () => {
        const userInLocalStorage = localStorage.getItem('user');

        if (!userInLocalStorage) {
            setUser(null);
            return navigate('/');
        }

        if (!user) {
            const data = await getUser(JSON.parse(userInLocalStorage).id);
            setUser(data);
        }
    };

    useEffect(() => {
        checkUser();
    }, [user]);

    return user ? <Outlet /> : null;
};

export default RequireAuth;