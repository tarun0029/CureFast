import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { message } from "antd";

function BookAppointment() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  const handleBooking = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/bookappointment`,
        {
          doctorId: id,
          patientId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-red-200">
      <button
        onClick={handleBooking}
        className="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white"
      >
        Book Appointment
      </button>
    </div>
  );
}

export default BookAppointment;
