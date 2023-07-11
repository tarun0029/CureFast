import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useSelector } from "react-redux";

export default function ProfileSetting() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState();

  const params = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    name: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    biography:"",
    consultancyFees:"",
    experience:"",
    specialization:"",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  console.log(formData);

  //  const handleOnSelect = (e) => {
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       gender : e.target.value,
  //     }
  //   })
  //  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/doctor/profilesetting`,
        {
          ...formData,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };

  // update doc ==========

  //getDOc Details
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/doctor/getDoctorInfo`,
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setFormData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="m-2 bg-white p-4">
      {/* <div className="h-20 w-full">Profile Photo</div> */}
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              value={formData.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="Last name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
              value={formData.lastName}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="Date of Birth"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Date of Birth
            </label>
            <input
              type="string"
              id="dateOfBirth"
              name="dateOfBirth"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Date of Birth"
              required
              value={formData.dateOfBirth}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Phone number
            </label>
            <input
              type="string"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              value={formData.phone}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="Email address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Gender
            </label>

            <select
              id="gender"
              name="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.gender}
              onChange={handleOnChange}
            >
              <option value="">Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="biography"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Biography
          </label>
          <textarea
            type="text"
            id="biography"
            rows="4"
            name="biography"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="biography"
            required
            value={formData.biography}
            onChange={handleOnChange}
          ></textarea>
        </div>
   
   <div className="grid gap-6 mb-6 md:grid-cols-2">
   <div>
            <label
              htmlFor="consultancyFees"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Consultancy Fees
            </label>
            <input
              type="text"
              id="consultancyFees"
              name="consultancyFees"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Fees"
              required
              value={formData.consultancyFees}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your experience"
              required
              value={formData.experience}
              onChange={handleOnChange}
            />
          </div>
   </div>


        <div className="mb-6">
          <label
            htmlFor="specialization"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Specialization
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="specialization"
            required
            value={formData.specialization}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleOnChange}
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="City"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prayagraj"
              required
              value={formData.city}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="State"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Uttarpradesh"
              required
              value={formData.state}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label
              htmlFor="Zip Code"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Zip Code
            </label>
            <input
              type="integer"
              id="zipCode"
              name="zipCode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2110044"
              required
              value={formData.zipCode}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label
              htmlFor="Country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="India"
              required
              value={formData.country}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-200 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
