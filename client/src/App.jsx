import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PatientLogin from "../src/components/AuthPage/PatientLogin";
import PatientRegister from "../src/components/AuthPage/PatientRegister";
import DoctorLogin from "../src/components/AuthPage/DoctorLogin";
import DoctorRegister from "../src/components/AuthPage/DoctorRegister";
import Layout from "../src/components/Doctor/shared/Layout";
import Dashboard from "../src/components/Doctor/Dashboard";
import Appointments from "../src/components/Doctor/Appointments";
import ProfileSetting from "../src/components/Doctor/ProfileSetting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/patient_login" element={<PatientLogin />} />
      <Route path="/patient_register" element={<PatientRegister />} />
      <Route path="/doctor_login" element={<DoctorLogin />} />
      <Route path="/doctor_register" element={<DoctorRegister />} />

      {/* <Route path="/doctor/appointments" element={<Appointments />} />
      <Route path="/doctor/profilesetting" element={<ProfileSetting />} />  */}
    </Routes>
  );
}

export default App;