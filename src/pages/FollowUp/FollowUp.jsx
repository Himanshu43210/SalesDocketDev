import React, { useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const FollowUp = () => {
  const [sideMenu, setsideMenu] = useState(false);
  return (
    <div className="bg-[#F4F3F9] h-screen w-screen">
      <div className="navbar ">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <p className="text-3xl font-bold">Follow-up Tracker Dashboard</p>
        </div>

        <div className="flex justify-center h-full gap-4">
          <Link to="/followup/pending">
            <Button>Pending Follow Up</Button>
          </Link>
          <Link to="/followup/todaysuniquefollowup">
            <Button>No. Of Leads Follow Up Today</Button>
          </Link>
          <Link to="/followup/nouniquefollowupstoday">
            <Button>No. Follow Ups Attempted Today</Button>
          </Link>
          <Link to="/followup/followupuniquemonth">
            <Button>Total No. Of Leads Followed Up</Button>
          </Link>
          <Link to="/followup/followupnonuniquemonth">
            <Button>Total No. Of Follow Ups Attempted</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
