import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileSetting() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    bloodGroup: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  console.log(formData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // console.log(process.env.REACT_APP_SERVER_DOMAIN);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email, password, confirmPassword } = formData;
  //   if (email && password && confirmPassword) {
  //     if (password === confirmPassword) {
  //       try {
  //         const res = await axios.post(
  //           `${process.env.REACT_APP_SERVER_DOMAIN}/patient_register`,
  //           formData
  //         );

  //         if (res.data.success) {
  //           message.success("Register Successfully!");
  //         } else {
  //           message.error(res.data.message);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         message.error("Something Went Wrong");
  //       }
  //       console.log(formData);
  //       // console.log(data);
  //       alert("Successful");
  //     } else {
  //       alert("Password and confirmPassword are not equal");
  //     }
  //   } else {
  //     alert("Please enter the requered detail!");
  //   }
  // };

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
              type="date"
              id="dob"
              name="dob"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="dob"
              required
              value={formData.dob}
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
              type="tel"
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
              htmlFor="Blood Group"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="A+"
              required
              value={formData.bloodGroup}
              onChange={handleOnChange}
            />
          </div>
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
