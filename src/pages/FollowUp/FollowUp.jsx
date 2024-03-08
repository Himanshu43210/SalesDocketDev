import React, { useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import FollowUpPending from "./FollowUpPending";
import Followupother from "./Followupother";
import Popout from "@/components/kpIPopout/kpiPopout";
import { Dealer, SC, Model } from "@/utils/constants";

const FollowUp = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [popout, setPopout] = useState(true);
  const [button,setbutton]=useState(true);
  const [selectedPage,setSelectedPage]=useState("");

  const handleButtonClick =(val)=>{
    setSelectedPage(val)
    setPopout(true)
    setbutton(false)
  }

  console.log(selectedPage)
  return (
  
   <div className="bg-[#F4F3F9] h-screen w-full overflow-x-hidden">
      {
      selectedPage != "" && popout &&  <div className="popout absolute  w-full">
      <Popout setPopout={setPopout} popout={popout} Dealer={Dealer} SC={SC} Model={Model} selectedPage={selectedPage}></Popout>
    </div>  
    }
    <div className="navbar ">
      <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
      <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
    </div>
    
    
    {
       ( button) ?<>
          <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <p className="text-3xl font-bold">Follow-up Tracker Dashboard</p>
      </div>
<div className="flex justify-center h-full gap-4">
         <Button onClick={() => handleButtonClick('pending')}>Pending Follow Up</Button>
          <Button onClick={() => handleButtonClick('UniqueTodaysFollowup')}>No. Of Leads Follow Up Today</Button>
          <Button onClick={() => handleButtonClick('NonUniqueTodaysFollowup')}>No. Follow Ups Attempted Today</Button>
          <Button onClick={() => handleButtonClick('FollowUpUniqueMonth')}>Total No. Of Leads Followed Up</Button>
          <Button onClick={() => handleButtonClick('FollowupNonUniqueMonth')}>Total No. Of Follow Ups Attempted</Button>
      </div>
    </div></> :<>
    <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection setOpen={setPopout}></TableSelection>
      </div>
      {
        selectedPage === 'pending'?<>
        <FollowUpPending setbutton={setbutton } button={button}></FollowUpPending>
        </> : <Followupother page={selectedPage} setbutton={setbutton } button={button}></Followupother>
      }
     </>
      }
  </div>
  );
};

export default FollowUp;
