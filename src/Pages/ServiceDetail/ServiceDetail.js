import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    const [service, setService] = useServiceDetail(serviceID);

    return (
        <div>
            <h2>Welcome to Service Detail : {service.name}</h2>
            <Link to={`/checkout/${serviceID}`}><button className='btn btn-primary m-4'>Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;