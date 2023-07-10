import React from "react";
import DashboardStatsGrid from "./DashboardStatsgrid";
import PatientAppointment from "./PatientAppointment";

export default function Dashboard() {
  return (
    <div className="flex flex-row gap-4 md:flex-col">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <PatientAppointment />
      </div>
    </div>
  );
}
