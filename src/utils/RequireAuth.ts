import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  useAuth  from '@hooks/useAuth';

const RequireAuth = (props: any) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // TODO: TO BE CONTINUED
    const { user } = useAuth();

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/');
        }
        setIsLoggedIn(true);
    };

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return isLoggedIn ? props.children : null;
};

export default RequireAuth;