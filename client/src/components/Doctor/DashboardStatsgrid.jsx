import React from "react";
import { HiCalendar } from "react-icons/hi";
import {BiSolidUserPlus} from "react-icons/bi"
import { FaChild } from "react-icons/fa";

export default function DashboardStatsGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <FaChild className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Patients
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              54232
            </strong>
          </div>
          <div className="text-sm  text-gray-500 font-light">Till Today</div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <BiSolidUserPlus className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Today Patients
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              54232
            </strong>
          </div>
          <div className="text-sm  text-gray-500 font-light">Today</div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <HiCalendar className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Appointments</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              54232
            </strong>
          </div>
          <div className="text-sm  text-gray-500 font-light">Till Today</div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
