import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
} from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import ProfileDropdown from "../../ProfileDropdown";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setDoctorList } from "../../../redux/features/doctorListSlice";

export default function PatientHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleOnClick = () => {
    navigate("/");
  };
  console.log(searchQuery);

  const getAllDoctorData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}/getAllDoctors`,

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
      //  setDoctors(res.data.data);
        dispatch(setDoctorList(res.data.data));
       // console.log(doctorList);
        //setDoctors(doctorList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChange = (e) => {
    if(e.target.value==='')
    {
      getAllDoctorData();
    }
    setSearchQuery(e.target.value);

  };
   
  
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_DOMAIN}/api/doctors?searchQuery=${searchQuery}`
      )
      .then((response) => {
       // setDoctors(response.data);
         dispatch(setDoctorList(response.data));
      })
      .catch((error) => {
        console.error("Failed to fetch search results:", error);
      });

    }
  };


  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          name="searchQuery"
          id="searchQuery"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-md"
          value={searchQuery}
          onChange={handleOnChange}
          onKeyDown={handleSearch} 
        />

      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className="group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                onClick={handleOnClick}
              >
                <AiOutlineHome fontSize={24} />
              </Popover.Button>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <div>
                  {user?.notification.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-0.5 -right-0.5">
                      {user.notification.length}
                    </div>
                  )}

                  <HiOutlineBell fontSize={24} />
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <div>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}
