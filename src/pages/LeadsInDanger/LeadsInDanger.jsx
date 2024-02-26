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
import DataTable from "@/components/Table/DataTable";
import axios from "axios";
import Accordion from "@/components/Accordion/Accordion";

const LeadsInDanger = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("monthwise");
  const [graphLabels, setGraphLabels] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState([]);
  const [title, setTitle] = useState("");
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState([]);

  useEffect(() => {
    let labels = [];
    let barData = [];
    let lineData = [];
    switch (selectedBtn) {
      case "monthwise":
        labels = ["NA"];
        barData = [45];
        lineData = [40];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("ERP vs Registered");
        break;

      case "modelwise":
        labels = [
          "Creta",
          "Venue",
          "Grand NIOS",
          "All New i20",
          "Exter",
          "Verna",
          "Aura",
          "Elite i20",
          "Grand",
          "Alcazar",
        ];
        barData = [36, 66, 87, 89, 44, 56, 87, 47, 56, 94];
        lineData = [30, 55, 26, 55, 33, 65, 39, 74, 86, 99];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Model Wise");
        break;
      case "rowise":
        labels = ["RO Sawan"];
        barData = [45];
        lineData = [40];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("RO Wise");
        break;
      case "dealerwise":
        labels = [
          "Kaushalya Motors",
          "Samta Hyundai",
          "Sawan Hyundai",
          "Sawan Hyundai 2",
          "Khushi Ford",
        ];
        barData = [45, 23, 44, 65, 89];
        lineData = [40, 33, 54, 36, 77];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Dealer Wise");
        break;
      case "scwise":
        labels = [
          "Jasbir Kaur",
          "Meenu",
          "Amit Joshi",
          "Vijay Kumar",
          "Ritu Malik",
        ];
        barData = [75, 43, 64, 45, 79];
        lineData = [60, 40, 56, 26, 67];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("SC Wise");
        break;
      default:
        labels = [
          "Jasbir Kaur",
          "Meenu",
          "Amit Joshi",
          "Vijay Kumar",
          "Ritu Malik",
        ];
        barData = [75, 43, 64, 45, 79];
        lineData = [60, 40, 56, 26, 67];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("SC Wise");
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
      .get("https://api.npoint.io/16cb6b36e8cb9e742110")
      .then((res) => {
        console.log("resss", res.data?.LeadsInDange);
        setTablesData(res.data?.LeadsInDange);
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
            selectedBtn === "rowise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("rowise")}
        >
          RO Wise
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
            selectedBtn === "scwise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("scwise")}
        >
          SC Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "citywise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("citywise")}
        >
          City Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "sourcewise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => setSelectedBtn("sourcewise")}
        >
          Source Wise
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
      </div>
      <div className="flex justify-center mt-4">
        <LineBarGraph
          graphLabels={graphLabels}
          barData={barGraphData}
          lineData={lineGraphData}
          title={title}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mx-4 mt-4 pb-10">
        {tablesData.length > 0 &&
          tablesData.map((tableData, index) => (
            <Accordion
              key={index}
              tableData={tableData}
              index={index}
              accordionStates={accordionStates}
              toggleAccordion={toggleAccordion}
            />
          ))}
      </div>
    </div>
  );
};

export default LeadsInDanger;
