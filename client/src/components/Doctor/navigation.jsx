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

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/doctor/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "Appointments",
    label: "Appointments",
    path: "/doctor/Appointments",
    icon: <HiCalendar />,
  },
  {
    key: "MyPatient",
    label: "My Patients",
    path: "/mypatient",
    icon: <HiIdentification />,
  },
  {
    key: "ScheduleTiming",
    label: "Schedule Timings",
    path: "/scheduletiming",
    icon: <HiClock />,
  },
  {
    key: "Reviews",
    label: "Reviews",
    path: "/reviews",
    icon: <HiPencilAlt />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiMail />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "profilesetting",
    label: "Profile Settings",
    path: "/doctor/profilesetting",
    icon: <HiOutlineCog />,
  },
  {
    key: "changepassword",
    label: "Change Password",
    path: "/changepassword",
    icon: <BiSolidLockAlt />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
