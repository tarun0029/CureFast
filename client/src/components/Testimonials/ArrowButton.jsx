import React from 'react'

export default function ArrowButton(props) {
  return (
    <button
      onClick={props.updateSlide}
      className={
        props.direction === "next" ? "flex justify-end" : "flex justify-start"
      }
    >
      <div className="group">
        <img
          src={
            props.direction === "next"
              ? process.env.PUBLIC_URL + `./images/Testimonials/right-align.png`
              : process.env.PUBLIC_URL + `./images/Testimonials/left-align.png`
          }
          className={
            props.direction === "next"
              ? "group-hover:translate-x-2" + " transition ease-linear"
              : "group-hover:-translate-x-2" + " transition ease-linear"
          }
        />
      </div>
    </button>
  );
}
