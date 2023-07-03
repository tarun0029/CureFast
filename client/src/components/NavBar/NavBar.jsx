import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import DesktopNav from "./DesktopNav";
import SideNav from "./SideNav";
import { HashLink as Link } from "react-router-hash-link";


export default function NavBar(props) {
  const [NavIcon, setNavIcon] = useState(1);
  const [navcolor, setNavcolor] = useState(false);
  const [sideBarOn, setSideBarOn] = useState(false);
  const [loginTypeOn, setLoginTypeOn] = useState(false);
  const sideBarRef = useRef(null);

  const changeNavIcon = () => {
    setNavIcon(!NavIcon);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target) &&
        sideBarOn
      ) {
        changeNavIcon();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef, sideBarOn]);

  useEffect(() => {
    if (NavIcon == 1) setSideBarOn(false);
    else setSideBarOn(true);
  }, [NavIcon]);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavcolor(true) : setNavcolor(false);
  };

  useEffect(() => {
    changeNavBg();
    window.addEventListener("scroll", changeNavBg);
  });

  console.log("NavIcon: " + NavIcon + " and " + "sideBarOn: " + sideBarOn);

  return (
    <>
      <div
        className={`sticky top-0 z-40 duration-500 ${
          navcolor ? `bg-custom-primary opacity-90` : `bg-custom-muted`
        } ${navcolor ? `text-white` : `text-gray-900`}`}
      >
        <div className="flex flex-row items-center justify-between mx-4 py-2 border-b-[1px] border-gray-400">
          <div className="flex flex-row items-center">
            <div className="z-50 lg:hidden">
              <FontAwesomeIcon
                icon={NavIcon ? faBars : faXmark}
                onClick={changeNavIcon}
                className={`w-5 h-5 ${
                  navcolor ? "text-white" : "text-gray-900"
                }`}
              />
            </div>
            <div>
              <Link to="#" className="cursor-pointer" smooth>
                <img
                  src={
                    process.env.PUBLIC_URL + "./images/Common/curefast_logo.png"
                  }
                  alt=""
                  className="object-cover h-16 ml-12 w-15 lg:ml-0"
                />
              </Link>
            </div>
            <div className="hidden ml-4 font-bold select-none xl:text-xl text-custom-accent lg:flex">
              CUREFAST
            </div>
          </div>
          <DesktopNav />
          <div className="font-light text-white duration-1000 transform cursor-pointer bg-custom-accent lg:font-semibold hover:text-custom-accent hover:bg-white ">
            <div
              className="flex flex-row items-center px-4 py-2 xl:py-3"
              onClick={() => {
                setLoginTypeOn(!loginTypeOn);
              }}
            >
              <div className="select-none">Login/Signup</div>
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </div>
            <div
              className={`absolute bottom-0 left-0 overflow-hidden translate-y-full bg-custom-accent transition ease-linear duration-1000 rounded-b-lg px-4
              ${
                loginTypeOn
                  ? "w-full h-fit opacity-90"
                  : "w-0 h-0 opacity-0 p-0"
              }
              `}
            >
              <div className="flex flex-col font-normal text-white">
                <Link
                  to="/patient_login"
                  className="py-2 border-b-2"
                >
                  Patient
                </Link>
                <Link
                  to="/doctor_login"
                  className="pt-2 pb-4"
                >
                  Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sideBarRef}
        className={`container-side-bar fixed top-0 left-0 z-50 h-screen overflow-y-scroll w-[75%] sm:w-[50%] duration-500 transform ${
          sideBarOn
            ? "translate-x-0 opacity-100"
            : "-translate-x-[100%] opacity-0"
        }
        ${navcolor ? "bg-custom-primary" : "bg-custom-muted"}
        ${navcolor ? "text-white" : "text-gray-900"}
        `}
      >
        <SideNav
          NavIcon={NavIcon}
          changeNavIcon={changeNavIcon}
          navcolor={navcolor}
        />
      </div>
    </>
  );
}

{
  /* <div className="relative overflow-hidden px-4 py-2 border-custom-accent border-1 text-white xl:py-3 bg-custom-accent transform  before:content-[''] before:absolute before:top-0 before:-left-2 before:w-full before:h-full before:bg-white before:transition duration-1000 before:duration-1000 before:-z-10  before:rounded-xl before:-translate-x-full hover:before:translate-x-2 font-light lg:font-semibold hover:text-custom-accent cursor-pointer">
            <div className="flex flex-row items-center">
              <div>Login/Signup</div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className='ml-2'
              />
            </div>
          </div> */
}
