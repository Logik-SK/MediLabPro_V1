import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft, faArrowRight,
  faBook,
  faExpand, faHeadset, faHome,
  faLock, faMoon,
  faPlus,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import LoginButton from "../components/auth/LoginButton";
import { getPathByLabel } from '../routes/routePageConfig';



export const navbarLeftButtons = [
  { label: "Dashboard", icon: faHome, color: "text-blue-400 hover:text-blue-600", path: "/dashboard", sizeClass: "text-xl" },
  { label: "Lab Bill", icon: faPlus, color: "text-green-600 hover:text-green-800", path: getPathByLabel("New Billing") },
  { label: "CC Bill", icon: faPlus, color: "text-blue-500 hover:text-blue-700", path: "/cc-bill" },
  { label: "OPD Bill", icon: faPlus, color: "text-blue-500 hover:text-blue-700", path: "/opd-bill" },
  { label: "Manage Bills", icon: faBook, color: "text-yellow-600 hover:text-yellow-700", path: "/manage-bills" },
  { label: "Manage OPD", icon: faBook, color: "text-green-600 hover:text-green-800", path: "/manage-opd" },
  { label: "Test Result Entry", icon: faPlus, color: "text-yellow-500 hover:text-yellow-700", path: "/test-result-entry" },
];

export const createNavbarRightIcons = ({ user, isAuthenticated }) => {
  const items = [
    { icon: faArrowLeft, color: "text-green-600 hover:text-green-800", title: "Back", onClick: () => window.history.back() },
    { icon: faArrowRight, color: "text-red-600 hover:text-red-800", title: "Forward", onClick: () => window.history.forward() },
    { icon: faWhatsapp, color: "text-green-500", title: "WhatsApp", path: "/whatsapp-support" },
    { icon: faUsers, color: "text-blue-500", title: "Users", path: "/users" },
    { icon: faLock, color: "text-red-500", title: "Lock", onClick: () => console.log("Lock clicked") },
    { icon: faMoon, color: "text-gray-400", title: "Dark Mode", onClick: () => console.log("Toggle theme") },
    {
      icon: faExpand, color: "text-gray-400", title: "Fullscreen", onClick: () =>
        document.fullscreenElement
          ? document.exitFullscreen()
          : document.documentElement.requestFullscreen()
    },
    { icon: faHeadset, color: "text-green-600", title: "Support", path: "/support" }
  ];

  if (isAuthenticated && user) {
    items.unshift({ type: "user", userName: user.nickname });
    // items.push({ type: "component", component: LogoutButton });
  } else {
    items.push({ type: "component", component: LoginButton });
  }

  return items;
};
