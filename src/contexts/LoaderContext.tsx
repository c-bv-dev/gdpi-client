import LinearLoader from '@components/LinearLoader';
import { createContext, useState } from 'react';

const LoaderContext = createContext({} as any);

export const LoaderProvider = ({ children }: any) => {
    const [open, setOpen] = useState(false);

    const openLoader = () => setOpen(true);
    const closeLoader = () => setOpen(false);

    return (
        <LoaderContext.Provider
            value={{
                openLoader, closeLoader
            }}
        >
            {children}
            {open && <LinearLoader />}
        </LoaderContext.Provider>
    );
};

export default LoaderContext;