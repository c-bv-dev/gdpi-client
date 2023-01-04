import { Route, Routes } from 'react-router-dom';
import './assets/scss/App.scss';
import Layout from './components/ui/Layout';
import { ROLES } from './config/roles';
import RequireAuth from './features/auth/RequireAuth';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {

    return (
        <Routes>
            <Route>
                <Route index element={<Login />} />
                <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
                    <Route element={<Layout />} >
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default App;