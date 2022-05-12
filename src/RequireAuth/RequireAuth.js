import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='container text-center m-5'>
            <h2 className='text-danger'>Your Email is not Verified !</h2>
            <p className='text-primary'>Please Verify Your Email First And then Reload the page</p>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Send Verification Email
            </button>

        </div>
    }
    else {
        return children;
    }
};

export default RequireAuth;