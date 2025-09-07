import {
  IoIosStats,
  IoMdNotificationsOutline,
  IoIosLogOut,
  IoMdSettings,
} from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router";

function DashSidebar() {
  return (
    <div className="flex flex-col p-2 md:p-4  shadow-md md:w-52 sticky top-0 h-screen bg-white">
      <div className="flex items-center justify-center w-full gap-1.5 py-8 md:p-8">
        <img src={logo} alt="logo" />
        <p className="text-[#155DFC] font-bold text-xl hidden md:block">
          Eventify
        </p>
      </div>
      <div className="flex items-center justify-center w-full flex-col py-4 gap-4">
        <Link
          to=""
          className="px-4 py-2 bg-[#DBEAFE] rounded-md w-full flex items-center justify-start gap-2"
        >
          <IoIosStats className="text-[#1447E6]" size={20} />
          <p className="text-[#1447E6] hidden md:block">dashboard</p>
        </Link>

        <Link
          to=""
          className="px-4 py-2 rounded-md w-full flex items-center justify-start hover:bg-[#f3f4f6] gap-2"
        >
          <MdOutlineEventNote className="" size={20} />
          <p className="hidden md:block">My Events</p>
        </Link>

        <Link
          to=""
          className="px-4 py-2 rounded-md w-full flex items-center justify-start gap-2 hover:bg-[#f3f4f6]"
        >
          <IoMdNotificationsOutline className="" size={20} />
          <p className="hidden md:block">Reminders</p>
        </Link>

        <Link
          to=""
          className="px-4 py-2 rounded-md w-full flex items-center justify-start gap-2 hover:bg-[#f3f4f6]"
        >
          <IoMdSettings className="" size={20} />
          <p className="hidden md:block">Settings</p>
        </Link>

        <Link
          to=""
          className="px-4 py-2 rounded-md w-full flex items-center justify-start gap-2 hover:bg-[#f3f4f6]"
        >
          <IoIosLogOut className="text-[#FB2C36]" size={20} />
          <p className="text-[#FB2C36] hidden md:block">Logout</p>
        </Link>
      </div>
    </div>
  );
}

export default DashSidebar;
