import React from 'react'

export default function Down() {
  return (
    <div className="flex flex-col px-4 pt-10">
      <div className="flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + "./images/Common/curefast_logo.png"}
          alt=""
          className="object-cover h-16 w-15"
        />
      </div>
      <div className="my-3 text-sm text-center">
        Copyright © 2023, FastCure All rights reserved.
      </div>
    </div>
  );
}
