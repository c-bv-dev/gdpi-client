import useLoader from '@hooks/useLoader';
import { useEffect, useRef, useState } from 'react';
import useToast from './useToast';

type Cache = { [url: string]: any };

const useFetch = () => {
    const { openLoader, closeLoader } = useLoader();
    const { notify } = useToast();
    const cache = useRef({} as Cache);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        loading ? openLoader() : closeLoader();
    }, [loading]);

    const fetcher = async (url: string, options?: RequestInit): Promise<any> => {
        if (!url) return;

        setLoading(true);

        if (cache.current[url]) {
            setLoading(false);
            return cache.current[url];
        }

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            notify({ message: data.message, type: 'error' });
            setLoading(false);
            return;
        }

        options?.method === 'POST' && (cache.current[url] = data);

        setLoading(false);

        return data;
    };

    return fetcher;
};

export default useFetch;