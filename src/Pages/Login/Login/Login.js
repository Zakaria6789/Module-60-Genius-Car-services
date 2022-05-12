import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleformSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateResister = () => {
        navigate('/resister');
    }
    const navigateResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email First');
        }
    }

    return (
        <div className='w-50 mx-auto m-5'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleformSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and condition" />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>Creat New Account ? <Link to='/resister' onClick={navigateResister} className='text-primary pe-auto text-decoration-none'>Resister</Link></p>
            <p>Forget You Password ? <Link to='/login' onClick={navigateResetPassword} className='text-primary pe-auto text-decoration-none'>Reset Now</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;