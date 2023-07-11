import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PatientAppointments() {
  const { user } = useSelector((state) => state.user);
  const [doctors, setDoctors] = useState([]);

  const getAllDoctorData = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/myappointment`,
        {
          patientId: user._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctorData();
  }, [user]);

  return (
    <div>
      {doctors.map(
        (doctor) =>
          doctor?.status === "accept" && (
            <div className="p-3">
              <div className="flex bg-slate-200 border  mx-4 px-4 py-4 shadow-xl hover:scale-105 duration-[400ms]">
                <div className="mb-4 py-2 md:mr-6 md:mb-0">
                  <img
                    className="h-30 rounded-md object-cover md:w-30"
                    src="https://source.unsplash.com/80x80?face"
                    alt="img"
                  />
                </div>
                <div className="pl-4 flex flex-col space-y-1 "></div>
                <div key={doctor?.appointmentId}>
                  <div className="text-lg text-black">
                    {doctor?.doctorDetails?.firstName}
                  </div>
                  <div className="flex space-x-3 text-[0.80rem] items-center">
                    <AiOutlineClockCircle />
                    <span className=" text-[#757575] font-light">
                      {doctor?.doctorDetails?.bloodGroup}
                    </span>
                  </div>
                  <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                    <FaMapMarkerAlt />
                    <span className=" font-light">
                      {doctor?.doctorDetails?.state}
                    </span>
                  </div>
                  <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                    <FaEnvelope />
                    <span className=" font-light">
                      {doctor?.doctorDetails?.country}
                    </span>
                  </div>
                  <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                    <FaPhone />
                    <span className=" font-light">
                      {doctor?.doctorDetails?.zipCode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
