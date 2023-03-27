import { AuthProvider } from '@contexts/AuthContext';
import { LoaderProvider } from '@contexts/LoaderContext';
import { UserProvider } from '@contexts/UserContext';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <LoaderProvider>
            <AuthProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </AuthProvider>
        </LoaderProvider>
    </BrowserRouter>
);