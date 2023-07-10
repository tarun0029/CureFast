import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PatientLogin from "../src/components/AuthPage/PatientLogin";
import PatientRegister from "../src/components/AuthPage/PatientRegister";
import DoctorLogin from "../src/components/AuthPage/DoctorLogin";
import DoctorRegister from "../src/components/AuthPage/DoctorRegister";
import doctorLayout from "../src/components/Doctor/shared/Layout";
import doctorDashboard from "../src/components/Doctor/Dashboard";
import doctorAppointments from "../src/components/Doctor/Appointments";
import doctorProfileSetting from "../src/components/Doctor/ProfileSetting";
import patientLayout from ""

import PublicRoute from "./components/PublicRoute";
import ProtectedRouteDoctor from "./components/ProtectedRouteDoctor"
import ProtectedRoutePatient from "./components/ProtectedRoutePatient"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route
        path="/patient_login"
        element={
          <PublicRoute>
            <PatientLogin />
          </PublicRoute>
        }
      />
      <Route
        path="/patient_register"
        element={
          <PublicRoute>
            <PatientRegister />
          </PublicRoute>
        }
      />
      <Route
        path="/doctor_login"
        element={
          <PublicRoute>
            <DoctorLogin />
          </PublicRoute>
        }
      />
      <Route
        path="/doctor_register"
        element={
          <PublicRoute>
            <DoctorRegister />
          </PublicRoute>
        }
      />
      <Route
        path="/doctor/"
        element={
          <ProtectedRouteDoctor>
            <Layout />
          </ProtectedRouteDoctor>
        }
      >
        <Route
          path="appointments"
          element={
            <ProtectedRouteDoctor>
              <Appointments />
            </ProtectedRouteDoctor>
          }
        />
        <Route
          path="profilesetting"
          element={
            <ProtectedRouteDoctor>
              <ProfileSetting />
            </ProtectedRouteDoctor>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRouteDoctor>
              <Dashboard />
            </ProtectedRouteDoctor>
          }
        />
      </Route>
      <Route
        path="/patient/"
        element={
          <ProtectedRoutePatient>
            <Layout />
          </ProtectedRoutePatient>
        }
      >
        <Route
          path="appointments"
          element={
            <ProtectedRoutePatient>
              <Appointments />
            </ProtectedRoutePatient>
          }
        />
        <Route
          path="profilesetting"
          element={
            <ProtectedRoutePatient>
              <ProfileSetting />
            </ProtectedRoutePatient>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutePatient>
              <Dashboard />
            </ProtectedRoutePatient>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
