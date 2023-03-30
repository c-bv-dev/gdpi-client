import AtelierLogo from '@assets/icons/AtelierLogo';
import useAuth from '@hooks/useAuth';
import useUser from '@hooks/useUser';
import { FiBookmark, FiBriefcase, FiLayout, FiLogOut, FiSettings, FiUser, FiUsers } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const { user } = useUser();
    const { logout } = useAuth();

    const links = [
        {
            label: 'Dashboard',
            icon: <FiLayout className='w-5 h-5' />,
            path: '/dashboard'
        },
        {
            label: 'Tickets',
            icon: <FiBookmark className='w-5 h-5' />,
            path: '/tickets'
        },
        {
            label: 'Consumers',
            icon: <FiBriefcase className='w-5 h-5' />,
            path: '/consumers'
        },
        {
            label: 'Users',
            icon: <FiUsers className='w-5 h-5' />,
            path: '/users'
        },
        {
            label: 'Settings',
            icon: <FiSettings className='w-5 h-5' />,
            path: '/settings'
        }
    ];

    return (
        <nav className='bg-gray-900 p-1 w-64 flex flex-col justify-between gap-5 h-full'>
            <div className='flex flex-col gap-5'>
                <Link
                    to='/dashboard'
                    className='p-4 align-center flex justify-center'
                >
                    <AtelierLogo fill='#fff' width='80%' />
                </Link>
                <div className='flex flex-col gap-2'>
                    {links.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.path}
                            className={({ isActive, isPending }) =>
                                isActive ? 'bg-gray-800 flex p-2 rounded items-center gap-2' : 'flex p-2 rounded items-center gap-2'
                            }
                        >
                            {link.icon}{link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-2 p-2'>
                <FiUser className='text-4xl text-white' />
                <div className='w-full flex flex-row justify-between items-center gap-2'>
                    <div className='flex flex-col gap-0.5'>
                        <p>{user?.firstName} {user?.lastName}</p>
                        <p className='text-xs text-gray-400 capitalize'>{user?.role}</p>
                    </div>
                    <button onClick={logout} className='text-xs text-gray-400'>
                        <FiLogOut className='w-5 h-5' />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;