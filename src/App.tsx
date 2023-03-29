import RequireAuth from '@components/RequireAuth';
import Layout from '@components/Layout';
import Toaster from '@components/Toaster';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Settings from '@pages/Settings';
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
                            <Route path='users' element={<p>Users</p>} />
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