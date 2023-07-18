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
import PatientProfileSetting from "../src/components/Patient/patientProfileSetting";
import PatientAppointments from "../src/components/Patient/patientAppointments";
import PatientDashboard from "../src/components/Patient/patientDashboard";
import PatientLayout from "../src/components/Patient/shared/patientLayout";
import AppointmentPage from "../src/components/Patient/AppointmentPage";
import ProtectedRouteDoctor from "./components/ProtectedRouteDoctor";
import ProtectedRoutePatient from "./components/ProtectedRoutePatient";
import PublicRoute from "./components/PublicRoute";
import ViewDoctorProfile from "./components/Patient/ViewDoctorProfile";
import BookAppointment from "./components/Patient/BookAppointment";
import PatientMessage from "./components/Patient/PatientMessage";
import DoctorMessage from "./components/Doctor/DoctorMessage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/viewdoctorprofile/:id" element={<ViewDoctorProfile />} />
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
          path="/doctor/messages/:id"
          element={
            <ProtectedRouteDoctor>
              <DoctorMessage />
            </ProtectedRouteDoctor>
          }
        />

      <Route
        path="/patient/"
        element={
          <ProtectedRoutePatient>
            <PatientLayout />
          </ProtectedRoutePatient>
        }
      >
        <Route
          path="appointments"
          element={
            <ProtectedRoutePatient>
              <PatientAppointments />
            </ProtectedRoutePatient>
          }
        />
        <Route
          path="profilesetting"
          element={
            <ProtectedRoutePatient>
              <PatientProfileSetting />
            </ProtectedRoutePatient>
          }
        />
        <Route
          path="appointmentpage"
          element={
            <ProtectedRoutePatient>
              <AppointmentPage />
            </ProtectedRoutePatient>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutePatient>
              <PatientDashboard />
            </ProtectedRoutePatient>
          }
        />
        <Route
          path="messages"
          element={
            <ProtectedRoutePatient>
              <PatientMessage />
            </ProtectedRoutePatient>
          }
        />

      </Route>
      <Route
          path="/patient/messages/:id"
          element={
            <ProtectedRoutePatient>
              <PatientMessage />
            </ProtectedRoutePatient>
          }
        />
      <Route
          path="bookappointment/:id"
          element={
            <ProtectedRoutePatient>
              <BookAppointment />
            </ProtectedRoutePatient>
          }
        />
    </Routes>
  );
}

export default App;
