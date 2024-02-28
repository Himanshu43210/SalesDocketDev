

import React, { useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const BusinessTrend = () => {
  const [sideMenu, setsideMenu] = useState(false);
  return (
    <div>
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <p className="text-3xl font-bold">Business Trend Dashboard</p>
        </div>

        <div className="flex justify-center gap-4">
          <Link to="/BusinessTrend/DealerWise">
            <Button>Dealer Wise</Button>
          </Link>
          <Link to="/BusinessTrend/ModelWise">
            <Button>Model Wise</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessTrend;
