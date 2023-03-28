import RequireAuth from '@components/RequireAuth';
import Toaster from '@components/ui/Toaster';
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
                    <Route path='dashboard' element={<RequireAuth roles={['user', 'admin']}/>}>
                        <Route index element={<Dashboard />} />
                        
                        <Route path='settings' element={<Settings />} />
                        
                    </Route>
                </Route>
            </Routes>
            <Toaster />
        </div>
    );
};

export default App;