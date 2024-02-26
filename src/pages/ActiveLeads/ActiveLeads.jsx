import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import LostTo from "@/components/LostLeadsComponents/LostTo/LostTo";
import LeadSource from "@/components/LostLeadsComponents/LeadSource/LeadSource";
import { FaCarAlt, FaDatabase } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosRefresh } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import LineBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/LineBarGraph";
import StatsCard from "@/components/common/StatsCard/Graphs/LineBarGraph/StatsCard/StatsCard";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import axios from "axios";
import DataTable from "@/components/Table/DataTable";

// const mappingData = {
//   "type":
// }

const ActiveLeads = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("eprvsregistered");
  const [graphLabels, setGraphLabels] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState([]);
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState([]);
  const [title, setTitle] = useState("");
  let selectedComponent;
  useEffect(() => {
    let labels = [];
    let barData = [];
    let lineData = [];
    switch (selectedBtn) {
      case "eprvsregistered":
        labels = ["Registered", "EPR"];
        barData = [65, 59];
        lineData = [45, 48];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("ERP vs Registered");
        break;
      case "monthwise":
        labels = ["NA"];
        barData = [36];
        lineData = [30];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Month Wise");
        break;
      case "modelwise":
        labels = ["Creta", "Venue", "Grand NIOS", "All New i20"];
        barData = [36, 66, 87, 89];
        lineData = [30, 55, 26, 55];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Model Wise");
        break;
      case "leadsourcewise":
        labels = ["Walk-in", "Digital", "Referral", "Tele-in"];
        barData = [46, 76, 37, 79];
        lineData = [30, 55, 26, 55];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Lead Source Wise");
        break;
      default:
        selectedComponent = <LostTo />;
        break;
    }
  }, [selectedBtn]);

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    axios
      .get("https://api.npoint.io/446ca71ee7941000f4dd")
      .then((res) => {
        console.log("resss", res.data?.ActiveLeads);
        setTablesData(res.data?.ActiveLeads);
      })
      .catch((err) => {
        console.log(err);
      });

    const initialAccordionStates = tablesData.map(() => false);
    setAccordionStates(initialAccordionStates);
  }, []);

  return (
    <div className="  bg-[#F4F3F9] w-[100%]  ">
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="flex flex-wrap justify-between gap-2 pt-4 mx-2">
        <StatsCard
          icon={<GiSteeringWheel size={60} />}
          title="Test Drive Given"
          color="bg-blue-500 text-white"
        />
        <StatsCard
          icon={<FaCarAlt size={60} />}
          title="First Time Buyer"
          color="bg-yellow-400 text-white"
        />
        <StatsCard
          icon={<IoIosRefresh size={60} />}
          title="Repeat Brand Buyer"
          color="bg-red-500 text-white"
        />
        <StatsCard
          icon={<FaArrowRightArrowLeft size={60} />}
          title="Exchange Buyer"
          color="bg-purple-500 text-white"
        />
        <StatsCard
          icon={<FaDatabase size={60} />}
          title="Interested in Competition"
          color="bg-blue-400 text-white"
        />
      </div>
      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection></TableSelection>
      </div>
      <div className="flex flex-wrap gap-2 mx-2 mt-4">
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "eprvsregistered"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("eprvsregistered")}
        >
          EPR vs Registered
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === "monthwise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("monthwise")}
        >
          Month Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "modelwise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("modelwise")}
        >
          Model Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "leadsourcewise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("leadsourcewise")}
        >
          Lead Source Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "sourceofinformationwise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("sourceofinformationwise")}
        >
          Source of Information Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "salesconsultantwise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("salesconsultantwise")}
        >
          Sales Consultant Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "dealerwise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("dealerwise")}
        >
          Dealer Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "leadstatewise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("leadstatewise")}
        >
          Lead State Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "successfulfollowups"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("successfulfollowups")}
        >
          Successful Follow Ups
        </Button>
      </div>
      <div className="flex justify-center mt-4">
        <LineBarGraph
          graphLabels={graphLabels}
          barData={barGraphData}
          lineData={lineGraphData}
          title={title}
        />
      </div>
      {/* <div className="flex justify-center mt-4">{selectedComponent}</div> */}
      <div className="grid grid-cols-2 gap-4 mx-4 mt-4 pb-10">
        {tablesData.map((tableData, index) => (
          <div className="accordian border-2  rounded-lg bg-white p-4 ">
            <div className="flex items-center justify-between">
              <p className="font-medium ">{tableData.heading}</p>
              <Button onClick={() => toggleAccordion(index)}>
                {accordionStates[index] ? "Hide" : "Show"}
              </Button>
            </div>
            {accordionStates[index] && (
              <DataTable
                columns={tableData.tableheaddata}
                data={tableData.tablerowdata}
                tableName={tableData.heading}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveLeads;
