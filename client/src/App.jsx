import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

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
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route
          path="appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="profilesetting"
          element={
            <ProtectedRoute>
              <ProfileSetting />
            </ProtectedRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
