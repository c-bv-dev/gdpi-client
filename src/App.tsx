import Layout from '@components/Layout';
import PageLayout from '@components/PageLayout';
import RequireAuth from '@components/RequireAuth';
import RequireRole from '@components/RequireRole';
import Toaster from '@components/Toaster';
import Consumers from '@pages/Consumers';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Settings from '@pages/Settings';
import Tickets from '@pages/Tickets';
import CreateUser from '@pages/users/CreateUser';
import Users from '@pages/users/Users';
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
                            <Route path='users' element={<PageLayout />}>
                                <Route index element={<Users />} />
                                <Route path='new' element={<RequireRole roles={['admin']} children={<CreateUser />} />} />
                                <Route path='edit/:id' element={<RequireRole roles={['admin']} children={<CreateUser isEdit />} />} />
                            </Route>
                            <Route path='consumers' element={<PageLayout />}>
                                <Route index element={<Consumers />} />
                                <Route path='new' element={<RequireRole roles={['admin']} children={<CreateUser />} />} />
                            </Route>
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