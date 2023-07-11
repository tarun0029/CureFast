import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { message } from "antd";

export default function PatientAppointment() {
  const { user } = useSelector((state) => state.user);
  const [patients, setPatients] = useState([]);
  const [count, setCount] = useState(1);

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

  const handleStatus = async (id, status) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/appointment-status`,
        {
          appointmentId: id,
          status: status,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        setCount((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPatientData();
  }, [user, count]);

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
            {patients?.map(
              (patient) =>
                patient?.status === "pending" && (
                  <tr key={patient?.appointmentId}>
                    <td>
                      <Link
                        className="text-sky-500 underline"
                        to={`/patient/${patient?.patientDetails?.firstName}`}
                      >
                        #{patient?.patientDetails?.firstName}
                      </Link>
                    </td>
                    <td>{patient?.patientDetails?.bloodGroup}</td>
                    <td>{patient?.patientDetails?.email}</td>
                    <td>{patient?.patientDetails?.address}</td>
                    <td className="space-x-1 flex">
                      <button className="bg-[#02b6b31f] flex text-[#1db9aa]  py-2 px-4 rounded">
                        <FaRegEye fontSize={18} />
                        <span className="px-1">View</span>
                      </button>
                      <button
                        onClick={() =>
                          handleStatus(patient?.appointmentId, "accpet")
                        }
                        className="flex text-[#26af48] bg-[#0fb76b1f] py-2 px-4 rounded"
                      >
                        <div className="font-black">
                          <FcCheckmark fontSize={18} />
                        </div>
                        <span className="px-1">Accept</span>
                      </button>
                      <button
                        onClick={() =>
                          handleStatus(patient?.appointmentId, "cancel")
                        }
                        className="bg-[#f211361f] flex text-[#e63c3c]  py-2 px-4 rounded"
                      >
                        <RxCross2 fontSize={18} />
                        <span className="px-1">Cancel</span>
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}