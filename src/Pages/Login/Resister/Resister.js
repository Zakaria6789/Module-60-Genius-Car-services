import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Resister = () => {

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleformSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

    }

    if (user) {
        console.log(user);
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='w-50 mx-auto m-5'>
            <h2 className='text-primary text-center'>Resister Please</h2>
            <Form onSubmit={handleformSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className={`mb-3 ${agree ? 'text-primary' : 'text-danger'}`} controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and condition" />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                <Button disabled={!agree} className='mb-2' variant="primary" type="submit">
                    Resister
                </Button>
            </Form>
            <p>Already have Account ? <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Resister;