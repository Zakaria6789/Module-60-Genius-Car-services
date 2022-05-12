import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 h-100 m-5'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;