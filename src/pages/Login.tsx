import { useRef, useState } from 'react';
import fectcher from '../fetch';
import fetcher from '../fetch';
import useFetch from '../hooks/useFetch';
const Login = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const {
        state,
        setState
    } = useFetch({ url: 'https://dev-api.thezerofund.eu/projects' });

    const [projects1, setProjects] = useState([]);

    const refetch = () => {
        setState({ ...state, status: 'refetching' });
    };

    // const toto = fetchData({ url: 'https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg' });
    // const toto = fetchData({ url: 'https://dev-api.thezerofund.eu/projects' });
    // console.log('🚩', toto);

    // const click = async () => {
    //     const projects =  http();
    //     console.log('🚩', projects.loading);
    //     await projects.json('https://api.thezerofund.eu/projects', null);
    // };  
    console.log('🚩', fetcher.json('https://api.thezerofund.eu/projects', null));
    console.log('🚩', fetcher.loading);
    

    return (
        <div>
            <h2>{fectcher.loading ? 'Loading...' : 'Loaded'}</h2>
            {/* <button onClick={click}>Click</button> */}
            <h1>Login</h1>
            <p>{state.data ? state.data.value : 'Loading...'}</p>
            <p>{state.status}</p>
            <p>{state.progress}</p>
            <input type='email' placeholder='Email' ref={emailRef} />
            <input type='password' placeholder='Password' ref={passwordRef} />
            {/* refectch button */}
            < button onClick={refetch}>Refetch</button>
        </div>
    );
};

export default Login;