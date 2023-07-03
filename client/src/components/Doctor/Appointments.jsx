import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const PatientAppointmentData = [
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    Address: "Teliarganj, Prayagraj",
    email: "xyz@xyz.com",
    phone_number: "+91 1234567897",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    Address: "Teliarganj, Prayagraj",
    email: "xyz@xyz.com",
    phone_number: "+91 1234567897",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    Address: "Teliarganj, Prayagraj",
    email: "xyz@xyz.com",
    phone_number: "+91 1234567897",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    Address: "Teliarganj, Prayagraj",
    email: "xyz@xyz.com",
    phone_number: "+91 1234567897",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    Address: "Teliarganj, Prayagraj",
    email: "xyz@xyz.com",
    phone_number: "+91 1234567897",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    Address: "Teliarganj, Prayagraj",
    email: "xyz@xyz.com",
    phone_number: "+91 1234567897",
  },
];

export default function Appointments() {
  return (
    <div>
      {PatientAppointmentData.map((appointment, index) => (
        <div className="flex w-full p-2">
          <BoxWrapper>
            <div
              className="h-[8rem] w-[8rem] rounded-sm bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/80x80?face")',
              }}
            >
              <span className="sr-only">Marc Backes</span>
            </div>
            <div className="pl-4 flex flex-col space-y-1 "></div>
            <div key={index}>
              <div className="text-lg text-black">
                {appointment.patient_name}
              </div>
              <div className="flex space-x-3 text-[0.80rem] items-center">
                <AiOutlineClockCircle />
                <span className=" text-[#757575] font-light">
                  {appointment.Appt_date}
                </span>
              </div>
              <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                <FaMapMarkerAlt />
                <span className=" font-light">{appointment.Address}</span>
              </div>
              <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                <FaEnvelope />
                <span className=" font-light">{appointment.email}</span>
              </div>
              <div className="flex text-[#757575] space-x-3 text-[0.80rem]  items-center">
                <FaPhone />
                <span className=" font-light">{appointment.phone_number}</span>
              </div>
            </div>
          </BoxWrapper>
        </div>
      ))}
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
  