import React, { Fragment } from "react";
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
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleOnClick = () => {
    navigate("/");
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
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-md"
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
                {user?.notification.length > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-0.5 -right-0.5">
                    {user?.notification.length}
                  </div>
                )}

                <HiOutlineBell fontSize={24} />
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
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 max-h-60 overflow-y-auto">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm ">
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
                      <div className=" py-2 text-sm items-center justify-between py-2 border-b border-gray-200 hover:bg-gray-100">
                        <span>
                          {user?.notification?.length} new appointmnets.
                        </span>
                      </div>
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
