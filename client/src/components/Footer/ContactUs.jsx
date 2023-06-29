import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <div>
      <div className="my-3 text-xl font-bold">Contact Us</div>
      <div className="flex flex-col justify-between max-w-xl mt-4 xs:flex-row lg:mt-0 xs:grid xs:grid-cols-2">
        <div className="flex flex-row justify-around">
          <a
            href="mailto:shrutibhateja1803@gmail.com"
            target="_blank"
            className="group"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="xl:text-4xl text-3xl group-hover:text-[#DB4437] transition delay-400 ease-linear group-hover:-translate-y-2 group-hover:scale-125"
            />
          </a>
          <a
            href=""
            target="_blank"
            className="group"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="xl:text-4xl text-3xl group-hover:text-[#0E76A8] transition delay-400 ease-linear group-hover:-translate-y-2 group-hover:scale-125"
            />
          </a>
          <a
            href="https://www.facebook.com/shruti.bhateja.75"
            target="_blank"
            className="group"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="xl:text-4xl text-3xl group-hover:text-[#3B5998] transition delay-400 ease-linear group-hover:-translate-y-2 group-hover:scale-125"
            />
          </a>
          <a
            href="https://www.instagram.com/shruti.musings/"
            target="_blank"
            className="group"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="xl:text-4xl text-3xl group-hover:text-[#E1306C] transition delay-400 ease-linear group-hover:-translate-y-2 group-hover:scale-125"
            />
          </a>
        </div>
        {/* <div className="flex flex-row justify-around mt-4 xs:mt-0"> */}
        {/* <a
          href="https://www.instagram.com/shruti.musings/"
          target="_blank"
          className="group"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="xl:text-4xl text-3xl group-hover:text-[#E1306C] transition delay-400 ease-linear group-hover:-translate-y-2 group-hover:scale-125"
          />
        </a> */}
        {/* </div> */}
      </div>
    </div>
  );
}
