import {
  IoIosStats,
  IoMdNotificationsOutline,
  IoIosLogOut,
  IoMdSettings,
} from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { Input } from "@/components/ui/input";

function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col p-2 md:p-4  shadow-md md:w-64">
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

      <div className="flex-1 overflow-y-auto">
        <div className="mb-8 w-full max-w-full">
          <h3 className="text-lg font-semibold mb-4">Your Registered Events</h3>
          <div className="bg-white rounded-lg shadow-sm w-full max-h-64 overflow-x-auto">
            <table className="min-w-max whitespace-nowrap">
              <thead className="bg-white text-left text-sm font-bold text-[#4A5565] ">
                <tr>
                  <th className="p-4">Event</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-[#F7F6FE]">
                  <td className="p-4">Tech Conference 2025</td>
                  <td className="p-4">Aug 23, 2025</td>
                  <td className="p-4">Algiers</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">
                      Upcoming
                    </span>
                  </td>
                  <td className="p-4">
                    <a href="#" className="text-blue-600 hover:underline">
                      View
                    </a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4">Design Meetup</td>
                  <td className="p-4">Jul 12, 2025</td>
                  <td className="p-4">Oran</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs text-white bg-gray-400 rounded">
                      Attended
                    </span>
                  </td>
                  <td className="p-4">
                    <a href="#" className="text-blue-600 hover:underline">
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="overflow-x-auto">
        <table className="min-w-full whitespace-nowrap border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">John Doe</td>
              <td className="px-4 py-2 border">john.doe@example.com</td>
              <td className="px-4 py-2 border">
                12345 Very Long Street Name That Should Not Wrap
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default Home;
