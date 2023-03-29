import Navbar from '@components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const handleLocation = () => {
        return location.pathname.split('/')[1];
    };

    return (
        <div className='h-screen w-screen flex flex-row overflow-hidden'>
            <Navbar />
            <main className='flex-1 h-full p-4 overflow-y-auto'>
                <div className='py-4'>
                    <h1 className='text-3xl font-semibold text-gray-200 capitalize'>
                        {handleLocation()}
                    </h1>
                </div>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;