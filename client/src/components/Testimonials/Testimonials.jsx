import React from 'react'
import { useState } from 'react';
import './Testimonials.css'
import DataTestimonial from './TestimonialsData'
import ArrowButton from './ArrowButton'
import { useEffect } from 'react';

export default function Testimonials() {

  const [slideIndex, setslideIndex] = useState(1);
  
  // automatic slideshow
  useEffect(() => {

    let interval = setInterval(() => {
      nextSlide();
      console.log(slideIndex);
    }, 5000);

    return () => clearInterval(interval);

  }, )
  
  const updateDot = (index) => {
    setslideIndex(index);
  };

  const nextSlide = () => {
    if (slideIndex !== DataTestimonial.length) {
      setslideIndex(slideIndex + 1);
    } else if (slideIndex === DataTestimonial.length) {
      setslideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setslideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setslideIndex(DataTestimonial.length);
    }
  };


  return (
    <div className='py-10 bg-white' id='Testimonials'>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-center text-3xl font-bold sm:text-4xl lg:text-5xl">
            Testimonials
          </div>
          <div className="flex items-center justify-center text-lg font-semibold text-gray-400">
            What our users have to say
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative flex flex-row items-center justify-center w-full px-5 select-none xl:max-w-[75%] md:px-16 xl:px-0">
          <ArrowButton updateSlide={prevSlide} direction={"prev"} />

          {DataTestimonial.map((obj, index) => {
            return (
              <div
                key={index}
                className={
                  slideIndex === index + 1
                    ? "review-content review-content-animation max-w-[75%] mx-4 sm:mx-12 lg:mx-20"
                    : "review-content"
                }
              >
                <div className="flex items-center justify-center ">
                  <img
                    src={
                      process.env.PUBLIC_URL + `./images/Testimonials/person${index + 1}.jpg`
                    }
                    className={`object-cover object-center w-24 h-24 border-4 border-custom-accent rounded-full sm:w-32 sm:h-32 `}
                  />
                </div>
                <div className="overflow-hidden h-[40vh] lg:h-[30vh] flex items-center">
                  <p className="mt-4 overflow-hidden text-xl italic text-center sm:text-2xl text-ellipsis">
                    {obj.comment}
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <p className="text-xl font-semibold sm:text-2xl">
                    {obj.name}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center mt-4">
                  <img src={obj.locationsrc} />
                  <span className="ml-4 text-gray-500">{obj.location}</span>
                </div>
              </div>
            );
          })}
          <ArrowButton updateSlide={nextSlide} direction={"next"} />
        </div>
        <div className="flex flex-row justify-center w-full mt-6">
          {Array.from({ length: DataTestimonial.length }).map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => updateDot(index + 1)}
                className={slideIndex === index + 1 ? "dot dot-active " : "dot"}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
