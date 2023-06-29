import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function MenuItems() {
    
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <div className="transition duration-500 ease-linear cursor-pointer hover:text-custom-accent hover:scale-110">
        <Link to="/#About" smooth scroll={(e) => scrollWithOffset(e)}>
          About
        </Link>
      </div>
      <div className="transition duration-500 ease-linear cursor-pointer hover:text-custom-accent hover:scale-110">
        <Link to="/team">Team</Link>
      </div>
      <div className="transition duration-500 ease-linear cursor-pointer hover:text-custom-accent hover:scale-110">
        <Link to="/#Facilities" smooth scroll={(e) => scrollWithOffset(e)}>
          Facilities
        </Link>
      </div>
      <div className="transition duration-500 ease-linear cursor-pointer hover:text-custom-accent hover:scale-110">
        <Link to="/#Testimonials" smooth scroll={(e) => scrollWithOffset(e)}>
          Testimonials
        </Link>
      </div>
      <div className="transition duration-500 ease-linear cursor-pointer hover:text-custom-accent hover:scale-110">
        <Link to="/#ContactUs" smooth scroll={(e) => scrollWithOffset(e)}>
          Contact Us
        </Link>
      </div>
    </>
  );
}
