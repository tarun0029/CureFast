import {
  HiOutlineViewGrid,
  HiCalendar,
  HiIdentification,
  HiClock,
  HiPencilAlt,
  HiMail,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { BiSolidLockAlt } from "react-icons/bi";

export const PATIENT_DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/patient/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "MyAppointments",
    label: "MyAppointments",
    path: "/patient/appointments",
    icon: <HiCalendar />,
  },
  {
    key: "Book Appointment",
    label: "Book Appointment",
    path: "/patient/appointmentpage",
    icon: <HiIdentification />,
  },
  {
    key: "ScheduleTiming",
    label: "Schedule Timings",
    path: "/patient/scheduletiming",
    icon: <HiClock />,
  },
  {
    key: "Reviews",
    label: "Reviews",
    path: "/patient/reviews",
    icon: <HiPencilAlt />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/patient/messages",
    icon: <HiMail />,
  },
];

export const PATIENT_DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "profilesetting",
    label: "Profile Settings",
    path: "/patient/profilesetting",
    icon: <HiOutlineCog />,
  },
  {
    key: "changepassword",
    label: "Change Password",
    path: "/patient/changepassword",
    icon: <BiSolidLockAlt />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/patient/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
