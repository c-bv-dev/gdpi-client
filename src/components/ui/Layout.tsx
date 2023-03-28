import Navbar from '@components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <div className='h-screen w-screen flex flex-row overflow-hidden '>
            <Navbar />
            <main className='flex-1 h-full overflow-y-auto border-2 border-red-500'>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;