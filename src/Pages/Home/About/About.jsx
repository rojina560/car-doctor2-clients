import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:1/2 relative">
              <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
              <img
                className="w-1/2 absolute right-5 -bottom-16"
                src={parts}
                alt=""
              />
            </div>
            <div className="lg:1/2 sm: mt-20 space-y-3 ">
              <h1 className="text-5xl font-bold">
                About Us We are qualified & of experience in this field
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="py-6">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <button className="btn  text-white bg-red-500">Get More Info</button>
            </div>
            \
          </div>
        </div>
      </div>
    );
};

export default About;