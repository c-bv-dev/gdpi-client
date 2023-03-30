import { AuthProvider } from '@contexts/AuthContext';
import { ConsumerProvider } from '@contexts/ConsumerContext';
import { LoaderProvider } from '@contexts/LoaderContext';
import { TicketProvider } from '@contexts/TicketContext';
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
                    <ConsumerProvider>
                        <TicketProvider>
                            <App />
                        </TicketProvider>
                    </ConsumerProvider>
                </UserProvider>
            </AuthProvider>
        </LoaderProvider>
    </BrowserRouter>
);