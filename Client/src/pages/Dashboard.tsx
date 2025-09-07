import { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashHeader from "../components/DashHeader";
import DashMain from "../components/DashMain";
import DashEvent from "@/components/DashEvent";
import { useLocation } from "react-router";
import DashCreateEvent from "@/components/DashCreateEvent";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex">
      <DashSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashHeader />

        {tab === "dash" && <DashMain />}
        {tab === "events" && <DashEvent />}
        {tab === "createEvent" && <DashCreateEvent />}
      </div>
    </div>
  );
};

export default Dashboard;
