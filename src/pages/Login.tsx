import { Button, Input } from '@components/ui';
import useAuth from '@hooks/useAuth';
import useUser from '@hooks/useUser';
import { IUser } from '@utils/types/types';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const { login } = useAuth();
    const { setUser } = useUser();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email) return setErrors({ ...errors, email: 'Email is required' });
        if (!password) return setErrors({ ...errors, password: 'Password is required' });

        const user = await login(email, password);

        if (user) {
            setUser(user as IUser);
            setErrors({
                email: '',
                password: '',
            });
            navigate('/dashboard');
        }
    };

    return (
        <div className='flex flex-col items-center gap-2 justify-center h-full'>
            <Input type='email' name='email' label='Email' reference={emailRef} error={errors.email} />
            <Input type='password' name='password' label='Password' reference={passwordRef} error={errors.password} />
            <Button onClick={handleSubmit}>Login</Button>
        </div >
    );
};

export default Login;