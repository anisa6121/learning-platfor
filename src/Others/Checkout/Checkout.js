import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            THis is Checkout Page
        </div>
    );
};

export default Checkout;