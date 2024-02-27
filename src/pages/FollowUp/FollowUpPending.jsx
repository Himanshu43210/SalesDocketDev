import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import { Button } from "@/components/ui/button";
import SingleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/SingleBarGraph";
import DataCard from "@/components/AllLeadsComponents/DataCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FollowUpPending = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("overallpending");
  const [graphLabels, setGraphLabels] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let labels = [];
    switch (selectedBtn) {
      case "overallpending":
        labels = ["Today", "1_Day_Delay", "2_Day_Delay", "3_Day_Delay"];
        setGraphLabels(labels);
        setTitle("Overall Pending");
        break;
      case "dealerwisepending":
        labels = [
          "Kaushalya Motors",
          "Samta Hyundai",
          "Sawan Hyundai 2",
          "Sawan Hyundai",
        ];
        setGraphLabels(labels);
        setTitle("Dealer Wise Pending");
        break;
      case "scwisepending":
        labels = [
          "Vijay Kumar",
          "Amit Joshi",
          "Indermeet Singh",
          "Rohit Kapoor",
        ];
        setGraphLabels(labels);
        setTitle("SC Wise Pending");
        break;
      case "typeofpending":
        labels = ["Call", "Dealer Visit", "Home Visit"];
        setGraphLabels(labels);
        setTitle("Type Of Pending");
        break;
      default:
        labels = ["Today g", "1_Day_Delay fg", "2_Day_Delay ff", "3_Day_Delayfdf"];
        setGraphLabels(labels);
        setTitle("Overall Pendinggg");
        break;
    }
  }, [selectedBtn]);
  return (
    <div className="bg-[#F4F3F9]">
      <div className="navbar ">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>

      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection></TableSelection>
      </div>
      <div className="w-[90%] mx-auto mt-4">
        <DataCard
          figure={2807}
          btnText={"Pending Follow-up Data"}
          cardColor={"#8400E7"}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-2 mx-2 mt-4 left">
          
        <Button
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === "overallpending"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("overallpending")}
        >
          OverAll Pending
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === "dealerwisepending"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("dealerwisepending")}
        >
          Dealer Wise Pending
        </Button>

        <Button
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === "scwisedelivery"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("scwisepending")}
        >
          SC Wise Pending
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "typeofpending"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("typeofpending")}
        >
          Type Of Pending
        </Button>
        </div>

        <div className="mx-2 mt-4 right">
        <Button
          className={`border-2 hover:bg-white hover:text-black `} 
           
          onClick={() => {navigate('/followup')}}
        >
          <FaArrowLeft  className="mr-[2px] animate-moveBackButton"/>
          Follow-Up Tracker Dashboard
        </Button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <SingleBarGraph graphLabels={graphLabels} title={title} />
      </div>
    </div>
  );
};

export default FollowUpPending;
