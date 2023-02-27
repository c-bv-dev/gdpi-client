import { useEffect, useRef, useState } from 'react';

interface IProps {
    url: string,
    options?: RequestInit
}

interface IState {
    state: {
        status: string,
        data: any,
        error: any
    }
}

const useFetch = ({ url, options }: IProps) => {
    const cache = useRef({} as any);
    const [state, setState] = useState({
        status: 'idle',
        data: null,
        error: null
    } as any);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setState({ ...state, status: 'fetching' });

            if (cache.current[url]) {
                setState({ status: 'fetched', data: cache.current[url], error: null });
            } else {
                try {
                    const response = await fetch(url, options);

                    const tt = response.body as any;
                    const reader = tt.getReader();

                    const contentLength = response.headers.get('content-length');
                    const total = parseInt(contentLength || '0', 10);
                    // console.log('🚩', total);
                    let loaded = 0;
                    let data = [] as any; 
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        loaded += value.length;
                        data.push(value);
                        setState({ ...state, progress: Math.round(loaded / total * 100) });
                    }
                    let dataArr = new Uint8Array(loaded);
                    // console.log('🚩', dataArr);
                    const json = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(loaded)));
                    cache.current[url] = json;
                    // console.log('🚩', json);
                    // let dataArr = new Uint8Array(loaded);
                    // let position = 0;
                    // for (let chunk of data) {
                    //     dataArr.set(chunk, position);
                    //     position += chunk.length;
                    // }
                    // const json = JSON.parse(new TextDecoder('utf-8').decode(dataArr));
                    // console.log('🚩', json);
                    setState({ status: 'fetched', data: json, error: null });
                } catch (error) {
                    setState({ status: 'error', data: null, error });
                }
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, [url]);

    useEffect(() => {
        // console.log(state.status);
    }, [state.status]);

    return { state, setState };
};

export default useFetch;