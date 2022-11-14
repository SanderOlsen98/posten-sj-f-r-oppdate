import {
  ChatBubbleBottomCenterIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  ShoppingCartIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <HomeIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Drivers",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "LogOut",
    icon: <ArrowRightOnRectangleIcon className="nav-icon" />,
  },
];
