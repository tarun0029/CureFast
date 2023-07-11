import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";

export default function DoctorAppointment() {
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
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Doctor Appointments</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Appt Date</th>
              <th>Purpose</th>
              <th>Paid Amount</th>
              <th>Appointment Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(
              (doctor) =>
                doctor?.status === "pending" && (
                  <tr key={doctor?.appointmentId}>
                    <td>
                      <Link
                        className="text-sky-500 underline"
                        to={`/doctor/${doctor?.patientDetails?.firstName}`}
                      >
                        #{doctor?.doctorDetails?.firstName}
                      </Link>
                    </td>
                    <td>{doctor?.doctorDetails?.bloodGroup}</td>
                    <td>{doctor?.doctorDetails?.email}</td>
                    <td>{doctor?.doctorDetails?.address}</td>
                    <td className="space-x-1 flex">
                      <button className="bg-[#3770b626] flex text-[#1e8af7]  py-2 px-4 rounded">
                        <MdOutlinePending fontSize={18} />
                        <span className="px-1">Pending</span>
                      </button>
                      <button className="bg-[#f211361f] flex text-[#e63c3c]  py-2 px-4 rounded">
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
