import Toaster from '@components/ui/Toaster';
import Login from '@pages/Login';
import RequireAuth from '@components/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login />} />
                    <Route path='u' element={<RequireAuth />}>
                        <Route index element={<h1>dd</h1>} />
                        <Route path='settings' element={<h1>Settings</h1>} />
                    </Route>
                </Route>
            </Routes>
            <Toaster />
        </>
    );
};

export default App;