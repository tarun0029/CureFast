import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import {RxCross2} from "react-icons/rx"
import {FaRegEye} from "react-icons/fa"

const PatientAppointmentData = [
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
  {
    patient_name: "Shirley A. Lape",
    Appt_date: "2022-05-17T03:24:00",
    purpose: "general",
    paid_amount: "$435.50",
    appointment_status: "PLACED",
  },
];

export default function PatientAppointment() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">
        Patient Appointments
      </strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Appt Date</th>
              <th>Purpose</th>
              <th>Paid Amount</th>
              <th>Appointment Status</th>
            </tr>
          </thead>
          <tbody>
            {PatientAppointmentData.map((patient) => (
              <tr key={patient.name}>
                <td>
                  <Link
                    className="text-sky-500 underline"
                    to={`/patient/${patient.patient_name}`}
                  >
                    #{patient.patient_name}
                  </Link>
                </td>
                <td>{format(new Date(patient.Appt_date), "dd MMM yyyy")}</td>
                <td>{patient.purpose}</td>
                <td>{patient.paid_amount}</td>
                <td className="space-x-1 flex">
                  <button className="bg-[#02b6b31f] flex text-[#1db9aa]  py-2 px-4 rounded">
                    <FaRegEye fontSize={18}/>
                    <span className="px-1">View</span>
                  </button>
                  <button className="bg-[#0fb76b1f] flex  text-[#26af48]  py-2 px-4 rounded">
                    <FcCheckmark fontSize={18}/>
                    <span className="px-1">Accept</span>
                  </button>
                  <button className="bg-[#f211361f] flex text-[#e63c3c]  py-2 px-4 rounded">
                  <RxCross2 fontSize={18}/>
                    <span className="px-1">Cancel</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}