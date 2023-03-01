import { Button, Input } from '@components/ui';
import useFetch from '@hooks/useFetch';
import useToast from '@hooks/useToast';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const { notify } = useToast();
    const { data, loading, error, fetcher } = useFetch();
    
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    
    const handleSubmit = () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email) return setErrors({ ...errors, email: 'Email is required' });
        if (!password) return setErrors({ ...errors, password: 'Password is required' });

        fetcher({ url: 'https://jsonplaceholder.typicode.com/posts/1' });
        setErrors({ email: '', password: '' });
    };

    useEffect(() => {
        error && notify({ message: error.message, type: 'error' });
    }, [error]);

    useEffect(() => {
        data && notify({ message: 'Login successful', type: 'success' });
    }, [data]);

    return (
        <div className='flex flex-col items-center gap-2 justify-center h-screen'>
            <Input type='email' name='email' label='Email' reference={emailRef} error={errors.email} />
            <Input type='password' name='password' label='Password' reference={passwordRef} error={errors.password} />
            <Button onClick={handleSubmit}>Login</Button>
        </div>
    );
};

export default Login;