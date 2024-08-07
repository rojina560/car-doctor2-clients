import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch("services.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
    })
  
    return (
      <div>
        <div className='space-y-4'>
          <h1 className='text-center text-red-500 text-2xl'>services</h1>
          <h1 className='text-5xl text-center font-bold'>Service Our Service Area</h1>
          <p className='text-center '>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Services;