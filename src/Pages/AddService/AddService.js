import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div className='text-center my-5'>
            <h2>Please Add a Service</h2>
            <form className='d-flex flex-column w-50 mx-auto mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddService;