import React from "react";

export default function Upper() {
  return (
    <>
      <div className="mb-3 text-xl font-bold">FastCure</div>
      <div className="flex flex-col mx-4">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "./images/Common/briefcase.png"}
            alt=""
            className="w-4 h-4 mr-2"
          />
          <div>About</div>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "./images/Common/briefcase.png"}
            alt=""
            className="w-4 h-4 mr-2"
          />
          <div>Developers</div>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "./images/Common/briefcase.png"}
            alt=""
            className="w-4 h-4 mr-2"
          />
          <div>Privacy Policy</div>
        </div>
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "./images/Common/briefcase.png"}
            alt=""
            className="w-4 h-4 mr-2"
          />
          <div>Terms & Conditions</div>
        </div>
      </div>
    </>
  );
}
