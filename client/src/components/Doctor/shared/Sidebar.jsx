import React from "react";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate(`${user?.isDoctor ? "/doctor_login" : "/patient_login"}`);
  };

  return (
    <div className="flex flex-col bg-neutral-900 w-[18rem] p-3 text-white ">
      <div className="flex flex-col items-center pt-2">
        <img
          src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="..."
          class="rounded-full w-[120px] h-[120px] align-middle border-zinc-700 border-4"
        />
        <span className="text-neutral-100 text-lg pt-2">{user?.firstName} {user?.lastName}</span>
        <span className="text-[#757575] font-light">
          {user?.specialization}
        </span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
        <div
          className={classNames("text-red-500 cursor-pointer", linkClass)}
          onClick={handleLogout}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SideBarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
