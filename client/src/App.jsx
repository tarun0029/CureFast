import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PatientLogin from "../src/components/AuthPage/PatientLogin"
import PatientRegister from "../src/components/AuthPage/PatientRegister";
import DoctorLogin from "../src/components/AuthPage/DoctorLogin";
import DoctorRegister from "../src/components/AuthPage/DoctorRegister";

function App() {


  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/patient_login" element={<PatientLogin />} />
      <Route path="/patient_register" element={<PatientRegister />} />
      <Route path="/doctor_login" element={<DoctorLogin />} />
      <Route path="/doctor_register" element={<DoctorRegister />} />
    </Routes>
  );
}

export default App;
