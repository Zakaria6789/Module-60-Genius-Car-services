import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <div style={{ fontSize: '18px' }} className='p-4'>or</div>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            <div >
                <p className='text-danger'> {error?.message}</p>
                <p className='text-danger'> {error1?.message}</p>
            </div>
            <div>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary d-flex justify-content-center align-items-center w-50 mx-auto'>
                        <img className='me-3 my-auto' width='18' src={google} alt="" />
                        <span>Google Sign In</span>
                    </button>
                </div>
                <div className='my-3'>
                    <button className='btn btn-primary d-flex justify-content-center align-items-center w-50 mx-auto'>
                        <img className='me-3 my-auto' width='22' src={facebook} alt="" />
                        <span>Facebook Sign In</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => signInWithGithub()} className='btn btn-primary d-flex justify-content-center align-items-center w-50 mx-auto'>
                        <img className='me-3 my-auto' width='22' src={github} alt="" />
                        <span>Github Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;