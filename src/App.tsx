import Toaster from '@components/ui/Toaster';
import { AuthProvider } from '@contexts/AuthContext';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import RequireAuth from '@utils/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    return (
        <div className='h-screen w-screen'>
            <Routes>
                <Route path='/'>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<RequireAuth />}>
                        <Route index element={<h1>Dashboard</h1>} />
                        <Route path='users' element={<h1>Users</h1>} />
                        <Route path='settings' element={<h1>Settings</h1>} />
                    </Route>
                </Route>
            </Routes>
            <Toaster />
        </div>
    );
};

export default App;