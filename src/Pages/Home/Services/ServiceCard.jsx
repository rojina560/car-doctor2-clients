import React from 'react';

const ServiceCard = ({ service }) => {
    const { price, title, img, _id } = service;
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
           <img src= {img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              
            </h2>
            
            <div className="card-actions justify-start">
                        <div className="">Price:</div>
                        <div className="">${price}</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;