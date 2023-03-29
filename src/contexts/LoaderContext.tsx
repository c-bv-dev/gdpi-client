import LinearLoader from '@components/LinearLoader';
import { createContext, useState } from 'react';

const LoaderContext = createContext({} as any);

export const LoaderProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(false);

    const openLoader = () => setLoading(true);
    const closeLoader = () => setLoading(false);

    return (
        <LoaderContext.Provider
            value={{
                loading, setLoading,
                openLoader, closeLoader
            }}
        >
            {children}
            {loading && <LinearLoader />}
        </LoaderContext.Provider>
    );
};

export default LoaderContext;