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
import { Dealer, Model } from '@/utils/constants';
import FilterPopup from "@/components/FilterPopup/FilterPopup";

const DeliveryAnalysis = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("monthwise");
  const [graphLabels, setGraphLabels] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState([]);
  const [graphType, setGraphType] = useState("DoubleBarGraph");
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [deliveryFilterData, setDeliveryFilterData] = useState({
    model: [],
    dealer: [],
    ro: [],
    city: [],
    location: [],
    source: [],
    sourceofinfo: [],
    consultantname: [],
  })

  const getDeliveryFields = [{key:"model", title: "Model", options: Model}, { key:"dealer", title: "Dealer", options: Dealer}, {key:"ro", title: "RO"}, 
  {key:"city", title: "City" }, {key:"location", title: "Location" }, {key:"source", title: "Source"}, {key:"sourceofinfo", title: "Source of Info"}, 
  {key:"consultantname", title: "Consultant Name"}]

  const buttonData = [
    { id: "monthwise", label: "Month Wise" },
    { id: "rowisedelivery", label: "RO Wise Delivery" },
    { id: "dealerwisedelivery", label: "Dealer Wise Delivery" },
    { id: "scwisedelivery", label: "SC Wise Delivery" },
    { id: "modelwisedelivery", label: "Model Wise Delivery" },
    { id: "sourcewise", label: "Source Wise" },
    { id: "sourceofinformation", label: "Source of Information" },
    { id: "citywise", label: "City Wise" },
    { id: "fuel", label: "Fuel" },
    { id: "firsttimebuyer", label: "First Time Buyer" },
    { id: "additionalbuyer", label: "Additional Buyer" },
    { id: "exchangebuyer", label: "Exchange Buyer" },
    { id: "reasonselectingbrand", label: "Reason-Selecting Brand" },
  ];

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
        labels = ["NAdad"];
        setGraphLabels(labels);
        setGraphType("DoubleBarGraph ");
        setTitle("Month Wise new");
        break;

      default:
        break;
    }
  }, [selectedBtn]);
  return (
    <div className="bg-[#F4F3F9]">

      {

        filterOpen && <FilterPopup setOpen={setFilterOpen} getFields={getDeliveryFields} FilterData={deliveryFilterData} setFilterData={setDeliveryFilterData} showDate="true" fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} />
      }
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
          <TableSelection setOpen={setFilterOpen}></TableSelection>
        </div>
       <div className="flex flex-wrap gap-2 mx-2 mt-4 deli-btn">
          {buttonData.map((button) => (
            <Button
              key={button.id}
              className={`border-2 hover:bg-white hover:text-black ${
                selectedBtn === button.id
                  ? "bg-white text-black hover:bg-white"
                  : "none"
              }`}
              onClick={() => setSelectedBtn(button.id)}
            >
              {button.label}
            </Button>
          ))}
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
