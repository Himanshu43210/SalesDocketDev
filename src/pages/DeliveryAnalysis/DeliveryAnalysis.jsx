import React, { useEffect, useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { FaCarAlt, FaDatabase } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosRefresh } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import LineBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/LineBarGraph";
import StatsCard from "@/components/common/StatsCard/Graphs/LineBarGraph/StatsCard/StatsCard";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import DoubleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/DoubleBarGraph";
import DeliveryAnalysisTwo from "@/components/DeliveryAnalysisComponents/DeliveryAnalysisTwo";
import DeliveryAnalysisThree from "@/components/DeliveryAnalysisComponents/DeliveryAnalysisThree";

const DeliveryAnalysis = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("monthwise");
  const [graphLabels, setGraphLabels] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState([]);
  const [graphType, setGraphType] = useState("DoubleBarGraph");
  const [title, setTitle] = useState("");

  useEffect(() => {
    let labels = [];
    let barData = [];
    let lineData = [];
    switch (selectedBtn) {
      case "monthwise":
        labels = ["NA"];
        setGraphLabels(labels);
        setGraphType("DoubleBarGraph");
        setTitle("Month Wise");
        break;
      case "rowisedelivery":
        labels = ["RO Sawan"];
        setGraphLabels(labels);
        setGraphType("DoubleBarGraph");
        setTitle("RO Wise");
        break;
      case "dealerwisedelivery":
        labels = ["Samta Hyundai", "Sawan Hyundai"];
        setGraphLabels(labels);
        setGraphType("DoubleBarGraph");
        setTitle("Delaer Wise");
        break;
      case "fuel":
        labels = ["NA"];
        barData = [46, 76, 37, 79];
        lineData = [30, 55, 26, 55];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setGraphType("LineBarGraph");
        setTitle("Fuel");
        break;
     
      case "monthwise":
        labels = ["NA"];
        setGraphLabels(labels);
        setGraphType("DoubleBarGraph");
        setTitle("Month Wise");
        break;
        
        default: break;
    }
  }, [selectedBtn]);
  return (
    <div className="bg-[#F4F3F9]">
      {/* <DateModal
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
      /> */}

      <div className="   w-[100%]  ">
        <div className="navbar">
          <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
          <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
        </div>
        <div className="flex flex-wrap justify-between gap-2 pt-4 mx-2">
          <StatsCard
            title="Test Drive Given"
            color="bg-blue-500 text-white"
            icon={<GiSteeringWheel size={59} />}
          />
          <StatsCard
            title="First Time Buyer"
            icon={<FaCarAlt size={61} />}
            color="bg-yellow-400 text-white"
          />
          <StatsCard
            title="Repeat Brand Buyer"
            icon={<IoIosRefresh size={59} />}
            color="bg-red-500 text-white"
          />
          <StatsCard
            icon={<FaArrowRightArrowLeft size={59} />}
            color="bg-purple-500 text-white"
            title="Exchange Buyer"
          />
          <StatsCard
            icon={<FaDatabase size={59} />}
            color="bg-blue-400 text-white"
            title="Interested in Competition"
          />
        </div>
        <div className="flex w-[100vw] items-center justify-center mt-[5px]">
          <TableSelection></TableSelection>
        </div>
        <div className="flex flex-wrap gap-2 mx-2 mt-4 deli-btn">
          <Button
            className={`border-2 hover:bg-white hover:text-black ${
              selectedBtn === "monthwise"
                ? "bg-white  hover:bg-white text-black"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("monthwise")}
          >
            Month Wise
          </Button>
          <Button
            className={`border-2 hover:bg-white     hover:text-black ${
              selectedBtn === "rowisedelivery"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("rowisedelivery")}
          >
            RO Wise Delivery
          </Button>
          <Button
            className={`border-2 hover:bg-white hover:text-black ${
              selectedBtn === "dealerwisedelivery"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("dealerwisedelivery")}
          >
            Dealer Wise Delivery
          </Button>
          <Button
            className={`border-2 hover:bg-white hover:text-black ${
              selectedBtn === "scwisedelivery"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("scwisedelivery")}
          >
            SC Wise Delivery
          </Button>
          <Button
            className={`  border-2 hover:bg-white hover:text-black  ${
              selectedBtn === "modelwisedelivery"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("modelwisedelivery")}
          >
            Model Wise Delivery
          </Button>
          <Button
            className={`border-2    hover:bg-white hover:text-black  ${
              selectedBtn === "sourcewise"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("sourcewise")}
          >
            Source Wise
          </Button>
          <Button
            className={`border-2     hover:bg-white  hover:text-black  ${
              selectedBtn === "sourceofinformation"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("sourceofinformation")}
          >
            Source of Information
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
              selectedBtn === "fuel"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("fuel")}
          >
            Fuel
          </Button>
          <Button
            className={`border-2 hover:bg-white hover:text-black  ${
              selectedBtn === "firsttimebuyer"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("firsttimebuyer")}
          >
            First Time Buyer
          </Button>
          <Button
            className={`border-2 hover:bg-white hover:text-black  ${
              selectedBtn === "additionalbuyer"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("additionalbuyer")}
          >
            Additional Buyer
          </Button>
          <Button
            className={`border-2 hover:bg-white hover:text-black  ${
              selectedBtn === "exchangebuyer"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("exchangebuyer")}
          >
            Exchange Buyer
          </Button>
          <Button
            className={`border-2 hover:bg-white hover:text-black  ${
              selectedBtn === "reasonselectingbrand"
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => setSelectedBtn("reasonselectingbrand")}
          >
            Reason-Selecting Brand
          </Button>
        </div>

        <div className="flex justify-center mt-4">
          {graphType === "DoubleBarGraph" ? (
            <DoubleBarGraph graphLabels={graphLabels} title={title} />
          ) : (
            <LineBarGraph
              graphLabels={graphLabels}
              barData={barGraphData}
              lineData={lineGraphData}
              title={title}
            />
          )}
        </div>
      </div>
      <DeliveryAnalysisTwo />
      <DeliveryAnalysisThree />
    </div>
  );
};

export default DeliveryAnalysis;
