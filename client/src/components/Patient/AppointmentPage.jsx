import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setDoctorList } from "../../redux/features/doctorListSlice";
import { useDispatch, useSelector } from "react-redux";


function AppointmentPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doctorList } = useSelector((state) => state.doctorList);
  //const [doctors, setDoctors] = useState([]);


  const getAllDoctorData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}/getAllDoctors`,

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
      //  setDoctors(res.data.data);
        dispatch(setDoctorList(res.data.data));
       // console.log(doctorList);
        //setDoctors(doctorList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctorData();
  }, []);

  const handleViewDoctorProfile = (_id) => {
    navigate(`/viewdoctorprofile/${_id}`);
  };



  const handleBookAppointment = (_id) => navigate(`/bookappointment/${_id}`);

  return (
    <div>
      {doctorList?.map((Doctordata, index) => (
        <div className="p-3">
          <div className="flex slate-red-200 border  mx-4 px-4 py-4 shadow-xl hover:scale-105 duration-[400ms]">
            <div className="mb-4 md:mr-6 md:mb-0">
              <img
                className="h-56 rounded-lg object-cover md:w-56"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt
              />
            </div>
            <div>
              <div key={index}>
                <div className="text-lg text-black">{Doctordata?.firstName}</div>
                <div className="flex space-x-3 text-[0.80rem] items-center">
                  <span className=" text-[#757575] font-light">
                    {Doctordata?.dataOfBirth}
                  </span>
                </div>
                <div className="flex space-x-3 text-[0.80rem] items-center">
                  <span className=" text-[#757575] font-light">
                    {Doctordata?.address}
                  </span>
                </div>
                <div className="flex space-x-3 text-[0.80rem] items-center">
                  <span className=" text-[#757575] font-light">
                    {Doctordata?.email}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleViewDoctorProfile(Doctordata?._id)}
                    className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => handleBookAppointment(Doctordata?._id)}
                    className="w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AppointmentPage;
