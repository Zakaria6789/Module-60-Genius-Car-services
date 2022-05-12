import React, { useEffect, useState } from 'react';

const useServiceDetail = (serviceID) => {
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceID}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceID]);
    return [service, setService];
};

export default useServiceDetail;