import Toaster from '@components/ui/Toaster';
import Login from '@pages/Login';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import RequireAuth from './features/auth/RequireAuth';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' >
                    <Route index element={<Login />} />
                    <Route path='dashboard' element={<RequireAuth />}>
                        <Route index element={<h1>Dashboard</h1>} />
                        <Route path='users' element={<h1>Users</h1>} />
                        <Route path='settings' element={<h1>Settings</h1>} />
                    </Route>
                </Route>
            </Routes>
            <Toaster />
        </>
    );
};

export default App;