import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='text-center my-5'>
            <h3 className='mb-4'>Manage Service Page</h3>
            {
                services.map(service => <div className='mt-2' key={service._id}>
                    <p>{service.name} <button onClick={() => handleDelete(service._id)}>Delete</button> </p>
                </div>)
            }
        </div>
    );
};

export default ManageService;