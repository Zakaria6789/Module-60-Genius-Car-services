import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img, description } = service;
    const navigate = useNavigate();

    const handleServiceDetail = (id) => {
        navigate(`/service/${_id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <p>Price : {description}</p>
            <button onClick={() => handleServiceDetail(_id)}>Book Now</button>
        </div>
    );
};

export default Service;