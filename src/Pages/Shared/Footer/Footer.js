import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center p-4 bg-primary text-white'>
            <p className='m-0'>&copy; Copyright {currentYear}, All Rights Reserved</p>
        </footer>
    );
};

export default Footer;