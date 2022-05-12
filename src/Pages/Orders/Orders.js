import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`)
            .then(response => {
                setOrders(response.data);
            })
    }, [user]);

    return (
        <div>
            <h3>Your Orders : {orders.length}</h3>
        </div>
    );
};

export default Orders;