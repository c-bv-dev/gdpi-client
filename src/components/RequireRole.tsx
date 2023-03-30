import useUser from '@hooks/useUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
    roles?: string[];
    children: JSX.Element;
};

const RequireRole = (props: IProps) => {
    const navigate = useNavigate();

    const { user } = useUser();

    const [allowed, setAllowed] = useState(false);

    const checkUserRole = async () => {
        if (user && (props.roles && !props.roles.includes(user.role))) {
            console.log('You do not have permission to view this page.');
            return navigate('/');
        }
        setAllowed(true);
    };

    useEffect(() => {
        checkUserRole();
    }, [user]);

    return allowed ? props.children : null;
};

export default RequireRole;