import Layout from '@components/Layout';
import RequireAuth from '@components/RequireAuth';
import Toaster from '@components/Toaster';
import Consumers from '@pages/Consumers';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Settings from '@pages/Settings';
import Tickets from '@pages/Tickets';
import Users from '@pages/Users';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    return (
        <div className='h-screen w-screen'>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login />} />
                    <Route element={<RequireAuth roles={['user', 'admin']} />}>
                        <Route element={<Layout />}>
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path='users' element={<Users />} />
                            <Route path='consumers' element={<Consumers />} />
                            <Route path='tickets' element={<Tickets />} />
                            <Route path='settings' element={<Settings />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
            <Toaster />
        </div>
    );
};

export default App;