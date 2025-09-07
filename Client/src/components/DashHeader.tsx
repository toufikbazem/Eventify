import { IoMdNotificationsOutline } from "react-icons/io";
import { Input } from "./ui/input";

function DashHeader() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 md:px-8 md:py-4 shadow-md">
      <Input
        className="input w-40 md:w-52"
        type="text"
        placeholder="Search Events..."
      />

      <div className="flex items-center gap-4">
        <IoMdNotificationsOutline size={32} />
        <img
          src="https://i.pravatar.cc/300"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}

export default DashHeader;
