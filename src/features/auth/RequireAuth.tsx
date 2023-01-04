import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({ allowedRoles }: any) => {
    const { user } = useAuth();

    return (
        user.role && allowedRoles.includes(user.role) ?
            <Outlet />
            :
            <Navigate to='/' />
    );
};

export default RequireAuth;