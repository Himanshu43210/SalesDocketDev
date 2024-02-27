import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import SingleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/SingleBarGraph";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import DataTable from "@/components/Table/DataTable";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtrendFilter from "@/components/Btrend/Filtertrend";
import Navbar from "@/components/ui/Navbar";
import TableDataMapper from "@/components/BusninessTracker/TableDataMapper";


function DealerWise() {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("Enquiry Wise");
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState(false);
  const [tableHeading, setTableHeading] = useState(null);
  const [selectedAccordionIndex, setSelectedAccordionIndex] = useState(null);
  const graphLabels = ["Today", "1_Day_Delay", "2_Day_Delay", "3_Day_Delay"];
  const navigate = useNavigate();

  let selectedComponent;
  switch (selectedBtn) {
    case "Enquiry Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Enquiry Wise"} />
      );
      break;
    case "Walk-In Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Walk-In Wise"} />
      );
      break;
    case "Booking Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Booking Wise"} />
      );
      break;
    case "Delivery Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Delivery Wise"} />
      );
      break;
    case "dealerwise":
      selectedComponent = <SingleBarGraph />;
      break;
    case "scwise":
      selectedComponent = <SingleBarGraph />;
      break;
    default:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Enquiry Wise"} />
      );
      break;
  }

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(true);

  const dealerOptions = [
    { label: "option A", value: "optiona" },
    { label: "option B", value: "optionb" },
    { label: "option C", value: "optionc" },
  ];

  useEffect(() => {
    axios
      .get("https://api.npoint.io/65ff7c3ea207827f4ca2")
      .then((res) => {
        const { DealerWise } = res.data;
        setTablesData(DealerWise);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar setsideMenu={setsideMenu} sideMenu={sideMenu}/>

      <BtrendFilter  open={open}
        setOpen={setOpen}
        fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
            dealerOptions={dealerOptions}
            selected={selected}
            setSelected={setSelected}/>

      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection setOpen={setOpen}></TableSelection>
      </div>

      <div className="flex justify-between">
      <div className="flex flex-wrap gap-2 mx-2 mt-4 left">
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "Enquiry Wise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Enquiry Wise");
            setTableHeading("Dealer Wise Enquiry Table");
            setSelectedAccordionIndex(0);
          }}
        >
          Enquiry Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === "Walk-In Wise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Walk-In Wise");
            setTableHeading("Dealer Wise Walk-In table");
            setSelectedAccordionIndex(1);
          }}
        >
          Walk-In Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "Booking Wise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Booking Wise");
            setTableHeading("Dealer Wise Booking Table");
            setSelectedAccordionIndex(2);
          }}
        >
          Booking Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "Delivery Wise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Delivery Wise");
            setTableHeading("Dealer Wise Delivery Table");
            setSelectedAccordionIndex(3);
          }}
        >
          Delivery Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "Lost Wise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Lost Wise");
            setTableHeading("Dealer Wise Lost Table");
            setSelectedAccordionIndex(4);
          }}
        >
          Lost Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "Closed Wise"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Closed Wise");
            setTableHeading("Dealer wise Closed Table");
            setSelectedAccordionIndex(5);
          }}
        >
          Closed Wise
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "Conversation Ratio"
              ? "bg-white text-black hover:bg-white"
              : "none"
          }  `}
          onClick={() => {
            setSelectedBtn("Conversation Ratio");
            setTableHeading(null);
          }}
        >
          Conversation Ratio
        </Button>
        </div>
        <div className="mx-2 mt-4 right">
        <Button
          className={`border-2 hover:bg-white hover:text-black `} 
           
          onClick={() => {navigate('/BusinessTrend')}}
        >
          <FaArrowLeft  className="mr-[2px] animate-moveBackButton"/>
          Back
        </Button>
        </div>
      </div>
      <div className="flex justify-center mt-4">{selectedComponent}</div>
      <TableDataMapper tablesData={tablesData} tableHeading={tableHeading} setAccordionStates={setAccordionStates} accordionStates={accordionStates}/>
      {/* <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
        {tablesData.map(
          (tableData, index) =>
            tableData.heading === tableHeading && (
              <div key={index} className="p-4 bg-white border-2 rounded-lg accordian ">
                <div className="flex items-center justify-between">
                  <p className="font-medium ">{tableData.heading}</p>
                  <Button onClick={() => setAccordionStates(!accordionStates)}>
                    {accordionStates ? "Hide" : "Show"}
                  </Button>
                </div>
                {accordionStates && tableData.heading === tableHeading && (
                  <DataTable
                    columns={tableData.tableheaddata}
                    data={tableData.tablerowdata}
                    tableName={tableData.heading}
                    showLink="false"
                  />
                )}
              </div>
            )
        )}
      </div> */}
    </>
  );
}

export default DealerWise;
