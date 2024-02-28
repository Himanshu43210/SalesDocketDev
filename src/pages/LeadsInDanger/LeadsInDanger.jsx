import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import LineBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/LineBarGraph";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import axios from "axios";
import Accordion from "@/components/Accordion/Accordion";
import StatsCardList from "@/components/LostLeadsComponents/StatsCardList/StatsCardList";
import Navbar from "@/components/ui/Navbar";

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
        lineData = [40];
        labels = ["NA"];
        barData = [45];
        setLineGraphData(lineData);
        setBarGraphData(barData);
        setTitle("ERP vs Registered");
        setGraphLabels(labels);
        break;

      case "modelwise":
        labels = [
          "Venue",
          "All New i20",
          "Grand NIOS",
          "Exter",
          "Creta",
          "Aura",
          "Elite i20",
          "Verna",
          "Alcazar",
          "Grand",
        ];
        barData = [31, 46, 67, 99, 64, 46, 77, 57, 45, 74];
        lineData = [40, 35, 56, 45, 53, 75, 49, 64, 76, 89];
        setBarGraphData(barData);
        setTitle("Model Wise");
        setGraphLabels(labels);
        setLineGraphData(lineData);
        break;
      case "rowise":
        barData = [45];
        lineData = [40];
        labels = ["RO Sawan"];
        setLineGraphData(lineData);
        setBarGraphData(barData);
        setTitle("RO Wise");
        setGraphLabels(labels);
        break;
      case "dealerwise":
        labels = [
          "Samta Hyundai",
          "Kausalya Motor",
          "Sawn Hyundai",
          "Khusi Ford",
          "Sawn Hyundai 3",
        ];
        barData = [55, 33, 64, 55, 79];
        setBarGraphData(barData);
        lineData = [30, 43, 64, 46, 67];
        setTitle("Dealer Wise");
        setGraphLabels(labels);
        setLineGraphData(lineData);
        break;
      case "scwise":
        labels = [
          "Rakesh Mangla",
          "Pradeep",
          "Rajesh Kumar",
          "Manisha",
          "Mahipal Tanwar",
        ];
        barData = [65, 53, 54, 35, 69];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setTitle("SC Wise");
        lineData = [50, 60, 46, 66, 87];
        setGraphLabels(labels);
        break;
      default:
        labels = [
          "Rakesh Mangla",
          "Pradeep",
          "Rajesh Kumar",
          "Manisha",
          "Mahipal Tanwar",
        ];
        barData = [65, 53, 54, 35, 69];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setTitle("SC Wise");
        lineData = [50, 60, 46, 66, 87];
        setGraphLabels(labels);
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
      <Navbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
      <StatsCardList />
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
