import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import SingleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/SingleBarGraph";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/Table/DataTable";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtrendFilter from "@/components/Btrend/Filtertrend";

function ModelWise() {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("Enquiry Wise");
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState(false);
  const [tableHeading, setTableHeading] = useState("Enquiry Wise");
  const graphLabels = ["Today", "1_Day_Delay", "2_Day_Delay", "3_Day_Delay"];

  let selectedComponent;
  switch (selectedBtn) {
    case "Enquiry Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Enquiry-Wise"} />
      );
      break;
    case "Walk-In Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Walk-In-Wise"} />
      );
      break;
    case "Booking Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Booking-Wise"} />
      );
      break;
    case "Delivery Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Delivery-Wise"} />
      );
      break;
    case "Lost Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Lost-Wise"} />
      );
      break;
    case "Closed Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Closed-Wise"} />
      );
      break;
    case "Conversation Ratio":
      selectedComponent = (
        <SingleBarGraph
          graphLabels={graphLabels}
          title={"Conversation-Ratio"}
        />
      );
      break;
    default:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Enquiry-new-Wise"} />
      );
      break;
  }
  const navigate = useNavigate();

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(true);

  const dealerOptions = [
    { label: "option A", value: "optiona" },
    { label: "option B", value: "optionb" },
    { label: "option C", value: "optionc" },
  ];

  const buttonData = [
    {
      label: 'Enquiry Wise ',
      value: 'Enquiry Wise',
      tableHeading: 'Dealer Wise Enquiry Table'
    },
    {
      label: 'Walk-In Wise ',
      value: 'Walk-In Wise',
      tableHeading: 'Dealer Wise Walk-In table'
    },
    {
      label: 'Booking Wise ',
      value: 'Booking Wise',
      tableHeading: 'Dealer Wise Booking Table'
    },
    {
      label: 'Delivery Wise ',
      value: 'Delivery Wise',
      tableHeading: 'Dealer Wise Delivery Table'
    },
    {
      label: 'Lost Wise ',
      value: 'Lost Wise',
      tableHeading: 'Dealer Wise Lost Table'
    },
    {
      label: 'Closed Wise ',
      value: 'Closed Wise',
      tableHeading: 'Dealer wise Closed Table'
    },
    {
      label: 'Conversation Ratio ',
      value: 'Conversation Ratio',
      tableHeading: null
    }
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
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>

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
      {buttonData.map((button, index) => (
        <Button
          key={index}
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === button.value ? 'bg-white text-black hover:bg-white' : 'none'
          }`}
          
          onClick={() => {
            setTableHeading(button.tableHeading);
            setSelectedBtn(button.value);
          }}
        >
          {button.label}
        </Button>
      ))}
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
      <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
        {tablesData.map(
          (tableData, index) =>
            tableData.heading === tableHeading && (
              <div className="p-4 bg-white border-2 rounded-lg accordian ">
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
      </div>
    </>
  );
}

export default ModelWise;
