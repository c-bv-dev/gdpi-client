import useUser from '@hooks/useUser';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const RequireAuth = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { getUser } = useUser();

    const checkUser = async () => {
        const userToken = localStorage.getItem('user-token');
        const userId = localStorage.getItem('user-id');

        if (!userToken || !userId) {
            localStorage.removeItem('user-token');
            localStorage.removeItem('user-id');
            setIsLoggedIn(false);
            return navigate('/');
        }
        await getUser();
        setIsLoggedIn(true);
    };

    useEffect(() => {
        checkUser();
    }, []);

    return isLoggedIn ? <Outlet /> : null;
};

export default RequireAuth;