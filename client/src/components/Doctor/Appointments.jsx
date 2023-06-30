import React from "react";

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
    <div className="flex w-full">
      <BoxWrapper>
        <div
          className="h-[9rem] w-[9rem] rounded-sm bg-sky-500 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
          }}
        >
          <span className="sr-only">Marc Backes</span>
        </div>
        <div className="pl-4 flex flex-col">
          <span className="text-sm text-gray-500 font-light">Patient Name</span>
          <span className="text-sm  text-gray-500 font-light">
            Patient Address
          </span>
          <span className="text-sm  text-gray-500 font-light">
            Patient Email
          </span>
          <span className="text-sm  text-gray-500 font-light">
            Patient Phone number
          </span>
        </div>
      </BoxWrapper>
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
