import useLoader from '@hooks/useLoader';
import { useEffect, useReducer, useRef } from 'react';

interface State {
    data?: any;
    loading: boolean;
    error?: Error
};

interface IFetcherProps {
    url: string;
    options?: RequestInit;
};

interface IUseFetch {
    data?: any;
    loading: boolean;
    error?: Error;
    fetcher: (props: IFetcherProps) => Promise<void>;
};

type Cache = { [url: string]: any };

const useFetch = (): IUseFetch => {
    const { openLoader, closeLoader } = useLoader();
    const cache = useRef({} as Cache);

    const initialState: State = {
        data: undefined,
        loading: false,
        error: undefined
    };

    const fetchReducer = (state: State, action: any) => {
        switch (action.type) {
            case 'loading':
                return { ...initialState, loading: true };
            case 'success':
                return { ...initialState, data: action.payload, loading: false };
            case 'error':
                return { ...initialState, error: action.payload, loading: false };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    const fetcher = async ({ url, options }: IFetcherProps): Promise<void> => {
        if (!url) return;

        dispatch({ type: 'loading' });

        if (cache.current[url]) return dispatch({ type: 'success', payload: cache.current[url] });

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(response.statusText);

            const data = await response.json();
            cache.current[url] = data;
            dispatch({ type: 'success', payload: data });
        } catch (err) {
            dispatch({ type: 'error', payload: err as Error });
        }
    };

    useEffect(() => {
        state.loading ? openLoader() : closeLoader();
    }, [state.loading]);

    return { ...state, fetcher };
};

export default useFetch;