import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/index.css';
import { LoaderProvider } from './contexts/LoaderContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <LoaderProvider>
            <App />
        </LoaderProvider>
    </BrowserRouter>
);