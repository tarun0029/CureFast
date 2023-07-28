import React from "react";
import { MdCallEnd } from "react-icons/md";

export default function Team() {
  return (
    <div className="">
      <div className=" bg-gray-200 h-[100vh] flex flex-col justify-center-x  items-center ">
        <div className=" relative">
          <img
            src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="..."
            className="pt-1 h-[90vh] w-[90vw]"
          />
          <div class="absolute bg-yellow-500 h-[25vh] w-[17vw] bottom-0 right-0 ...">
            <p>Absolute child</p>
          </div>
        </div>

        <button class="mt-3 flex justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-[10vh]">
          <MdCallEnd fontSize={30} />
        </button>
      </div>
    </div>
  );
}
