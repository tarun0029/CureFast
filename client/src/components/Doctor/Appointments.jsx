import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const { user } = useSelector((state) => state.user);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  const getAllPatientData = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/getAllPatients`,
        {
          doctorId: user._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setPatients(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPatientData();
  }, [user]);

  const handleMessage = (_id) => {
    navigate(`/doctor/messages/${_id}`);
  };

  const handleVideoCall = (_id) => {
    navigate(`/doctor/video-call/${_id}`);
  };

  return (
    <div>
      {patients?.map(
        (patient) =>
          patient?.status === "accept" && (
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
                <div key={patient?.appointmentId}>
                  <div className="text-lg text-black">
                    {patient?.patientDetails?.firstName}
                  </div>
                  <div className="flex space-x-3 text-[0.80rem] items-center">
                    <AiOutlineClockCircle />
                    <span className=" text-[#757575] font-light">
                      {patient?.patientDetails?.bloodGroup}
                    </span>
                  </div>
                  <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                    <FaMapMarkerAlt />
                    <span className=" font-light">
                      {patient?.patientDetails?.state}
                    </span>
                  </div>
                  <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                    <FaEnvelope />
                    <span className=" font-light">
                      {patient?.patientDetails?.country}
                    </span>
                  </div>
                  <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                    <FaPhone />
                    <span className=" font-light">
                      {patient?.patientDetails?.zipCode}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleMessage(patient?.patientDetails?._id)}
                  className=" h-10  rounded-lg border-2  border-transparent bg-blue-600 px-4 py-2 font-medium text-white"
                >
                  Message
                </button>
                <button
                  onClick={() => handleVideoCall(patient?.patientDetails?._id)}
                  className=" h-10  rounded-lg border-2  border-transparent bg-blue-600 px-4 py-2 font-medium text-white"
                >
                  Video Call
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}
