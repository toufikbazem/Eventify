import { MdOutlineEventNote } from "react-icons/md";

function DashMain() {
  return (
    <div className="bg-[#F9FAFB] h-full p-6 flex flex-col gap-8">
      <div>
        <p className="text-[#1E2939] font-bold text-2xl">
          Welcome back, Toufik!
        </p>
        <p className="text-[#6A7282] text-sm">
          Here's a summary of your recent activities and events.
        </p>
      </div>

      <div className="flex justify-between items-center gap-4 flex-wrap whitespace-nowrap">
        <div className="p-5 flex-1 flex gap-4 shadow-sm border-[#F7F6FE] rounded-lg bg-white">
          <MdOutlineEventNote
            size={52}
            className="p-4 rounded-full bg-[#DBEAFE]"
          />
          <div>
            <p className="text-[#6A7282] text-sm font-medium">Total Events</p>
            <p className="font-semibold text-xl">12</p>
          </div>
        </div>
        <div className="p-5 flex-1 flex gap-4 shadow-sm border-[#F7F6FE] rounded-lg bg-white">
          <MdOutlineEventNote
            size={52}
            className="p-4 rounded-full bg-[#DBEAFE]"
          />
          <div>
            <p className="text-[#6A7282] text-sm font-medium">
              Upcoming Events
            </p>
            <p className="font-semibold text-xl">Expo Tech-aug 23</p>
          </div>
        </div>
        <div className="p-5 flex-1 flex gap-4 shadow-sm border-[#F7F6FE] rounded-lg bg-white">
          <MdOutlineEventNote
            size={52}
            className="p-4 rounded-full bg-[#DBEAFE]"
          />
          <div>
            <p className="text-[#6A7282] text-sm font-medium">Reminders</p>
            <p className="font-semibold text-xl">02</p>
          </div>
        </div>
      </div>

      <div className="mb-8 w-full max-w-full">
        <h3 className="text-lg font-semibold mb-4">Your Registered Events</h3>
        <div className="bg-white rounded-lg shadow-sm w-full overflow-x-auto">
          <table className="w-full whitespace-nowrap">
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

      <div className="flex justify-between gap-4 flex-wrap whitespace-nowrap">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Reminders</h3>
          <div className="p-5 flex-1 flex flex-col gap-2 shadow-sm border-[#F7F6FE] rounded-lg bg-white">
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium text-sm">Prepare for Tech Expo</p>
              <p className="font-medium text-[12px] text-[#6A7282]">Aug 21</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium text-sm">
                Upload ticket for Design Meetup
              </p>
              <p className="font-medium text-[12px] text-[#6A7282]">Juil 10</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Latest Updated</h3>
          <div className="p-5 flex-1 flex flex-col gap-2 shadow-sm border-[#F7F6FE] rounded-lg bg-white">
            <p className="font-medium text-sm">
              📣 Tech Expo time changed to 6 PM.
            </p>

            <p className="font-medium text-sm">
              ✅ You successfully attended Design Meetup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashMain;
