import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='col-lg-4'>
            <div className="card">
                <img className="card-img-top img-fluid" src={img} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/something" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;