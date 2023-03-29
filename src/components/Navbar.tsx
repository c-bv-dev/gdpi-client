import AtelierLogo from '@assets/icons/AtelierLogo';
import useAuth from '@hooks/useAuth';
import useUser from '@hooks/useUser';
import { FiGrid, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user } = useUser();
    const { logout } = useAuth();

    const links = [
        {
            label: 'Dashboard',
            icon: <FiGrid className='w-5 h-5' />,
            path: '/dashboard'
        },
        {
            label: 'Settings',
            icon: <FiSettings className='w-5 h-5' />,
            path: '/settings'
        },
        {
            label: 'Users',
            icon: <FiSettings className='w-5 h-5' />,
            path: '/users'
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
                        <Link
                            key={link.label}
                            to={link.path}
                            className='flex p-1 px-1 rounded items-center gap-2'
                        >
                            {link.icon}{link.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-2 p-2'>
                <img src='https://images.assetsdelivery.com/compings_v2/nexusplexus/nexusplexus2101/nexusplexus210100387.jpg' alt='22' className='w-10 h-10 rounded-full' />
                <div className='w-full flex flex-row justify-between items-center gap-2'>
                    <div className='flex flex-col gap-0.5'>
                        <p>{user?.firstName} {user?.lastName}</p>
                        <p className='text-xs text-gray-400'>{user?.role}</p>
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