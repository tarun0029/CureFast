import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import MenuItems from './MenuItems';

export default function SideNav(props) {
  
  return (
    <div className="flex flex-col p-6 sm:p-8">
      <div className="flex flex-row items-center justify-between border-b-[1px]">
        <div className="flex flex-row items-center justify-center">
          <FontAwesomeIcon
            icon={faUser}
            onClick={props.changeNavIcon}
            className={`w-5 h-5 sm:w-7 sm:h-7`}
          />
          <div className="p-3 ml-4 text-lg font-bold sm:text-xl">Login</div>
        </div>
        <FontAwesomeIcon
          icon={props.NavIcon ? "" : faXmark}
          onClick={props.changeNavIcon}
          className={`w-6 h-6`}
        />
      </div>
      <div className="flex flex-col h-[50vh] justify-around text-lg ml-4 font-medium">
        <MenuItems />
      </div>
    </div>
  );
}
