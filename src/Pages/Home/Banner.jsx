import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'


const Banner = () => {
  return (
    <div className="carousel w-full h-[500px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img className=" w-full" src={img1} alt="" />

        <div className="absolute w-full h-full p-10  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
          <div className="text-white w-1/3 space-y-7 ">
            <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
            <p className='text-2xl'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className='flex gap-4'>
              <button class="btn btn-active btn-secondary">Secondary</button>
              <button className="btn btn-outline btn-secondary">
                Secondary
              </button>
            </div>
          </div>

          <div className='flex justify-end absolute bottom-0 right-0 gap-4 p-6'>
            <a href="#slide4" className="btn btn-circle  bg-red-400">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-red-400">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img className=" w-full" src={img2} alt="" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
          <a href="#slide1" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
          <a href="#slide2" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
          <a href="#slide3" className="btn btn-circle bg-red-400">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-400">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;