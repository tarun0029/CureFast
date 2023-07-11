import React from "react";
import PatientDashboardStatsGrid from "./patientDashboardStatsgrid";
import DoctorAppointment from "./DoctorAppointment";

export default function PatientDashboard() {
  return (
    <div className="flex flex-row gap-4 md:flex-col">
      <PatientDashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <DoctorAppointment />
      </div>
    </div>
  );
}
