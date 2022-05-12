import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const { serviceID } = useParams();
    const [service, setService] = useServiceDetail(serviceID);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: "akbar",
    //     address: "islampur"
    // });

    // const handleAddress = event => {
    //     const { address, ...rest } = user;
    //     const newUser = { address: event.target.value, ...rest };
    //     setUser(newUser);
    // }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const order = {
            name: user?.displayName,
            email: user?.email,
            service: service?.name,
            serviceID: serviceID,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked !!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-75 mx-auto my-5 text-center'>
            <ToastContainer></ToastContainer>
            <h2>Please Checkout Your Booking : {service.name}</h2>
            <form onSubmit={handleFormSubmit} className='mt-3'>
                <input className='w-75 mb-2 rounded py-1 px-2' type="text" name="name" value={user?.displayName} readOnly placeholder='Your Name' required />
                <br />
                <input className='w-75 mb-2 rounded py-1 px-2' type="email" value={user?.email} readOnly name="email" placeholder='Your Email' required />
                <br />
                <input className='w-75 mb-2 rounded py-1 px-2' type="text" name="service" value={service.name} readOnly placeholder='Service Name' required />
                <br />
                <input className='w-75 mb-2 rounded py-1 px-2' type="text" name="address" autoComplete='off' placeholder='Your Address' required />
                <br />
                <input className='w-75 mb-2 rounded py-1 px-2' type="number" name="phone" autoComplete='off' placeholder='Phone Number' required />
                <br />
                <input className='btn btn-primary w-75' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default CheckOut;