import Navbar from '@components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumbs from './ui/Breadcrumbs';

const Layout = () => {
    const location = useLocation();

    const previousPath = location.pathname.split('/')[1];
    const currentPath = location.pathname.split('/')[2];

    return (
        <div className='h-screen w-screen flex flex-row overflow-hidden'>
            <Navbar />
            <main className='flex-1 h-full p-4 overflow-y-auto'>
                <Breadcrumbs
                    previousPath={previousPath}
                    currentPath={currentPath}
                />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;