import TableSelection from "@/components/Slection_Panel/Tableselection";
import SingleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/SingleBarGraph";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtrendFilter from "@/components/Btrend/Filtertrend";
import Navbar from "@/components/ui/Navbar";
import TableDataMapper from "@/components/BusninessTracker/TableDataMapper";

function DealerWise() {
  const selectedBtnDef = "Enquiry Wise";
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(selectedBtnDef);
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState(false);
  const [tableHeading, setTableHeading] = useState(null);
  const [selectedAccordionIndex, setSelectedAccordionIndex] = useState(null);
  const graphLabels = ["Today", "1_Day_Delay", "2_Day_Delay", "3_Day_Delay"];
  const navigate = useNavigate();

  console.log(selectedAccordionIndex);

  let selectedComponent;
  switch (selectedBtn) {
    case selectedBtnDef:
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
    case "dealerwise":
      selectedComponent = <SingleBarGraph />;
      break;
    case "scwise":
      selectedComponent = <SingleBarGraph />;
      break;
    default:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Enquiry new Wise"} />
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

  const buttonData = [
    {
      label: "Enquiry_Wise",
      value: "Enquiry Wise",
      tableHeading: "Dealer Wise Enquiry Table",
      accordionIndex: 0,
    },
    {
      label: "Walk-In-Wise",
      value: "Walk-In Wise",
      tableHeading: "Dealer Wise Walk-In table",
      accordionIndex: 1,
    },
    {
      label: "Booking_Wise",
      value: "Booking Wise",
      tableHeading: "Dealer Wise Bookinggg Table",
      accordionIndex: 2,
    },
    {
      label: "Delivery_Wise",
      value: "Delivery Wise",
      tableHeading: "Dealer Wise Deliveryy Table",
      accordionIndex: 3,
    },
    {
      label: "Lost_Wise",
      value: "Lost Wise",
      tableHeading: "Dealer Wise Lostt Table",
      accordionIndex: 4,
    },
    {
      label: "Closed_Wise",
      value: "Closed Wise",
      tableHeading: "Dealer wise ClosedTablee",
      accordionIndex: 5,
    },
    {
      label: "Conversation_Ratio",
      value: "Conversation Ratio",
      tableHeading: null,
      accordionIndex: null,
    },
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

      <BtrendFilter
        open={open}
        setOpen={setOpen}
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
        dealerOptions={dealerOptions}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection setOpen={setOpen}></TableSelection>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-2 mx-2 mt-4 left">
          {buttonData.map((button, index) => (
            <Button
              key={index}
              className={`border-2 hover:bg-white hover:text-black ${
                selectedBtn === button.value
                  ? "bg-white text-black hover:bg-white"
                  : "none"
              }`}
              onClick={() => {
                setSelectedBtn(button.value);
                setTableHeading(button.tableHeading);
                setSelectedAccordionIndex(button.accordionIndex);
              }}
              // onClick={() => handleButtonClick(button.value, button.tableHeading, button.accordionIndex)}
            >
              {button.label}
            </Button>
          ))}
        </div>

        <div className="mx-2 mt-4 right">
          <Button
            className={`border-2 hover:bg-white hover:text-black `}
            onClick={() => {
              navigate("/BusinessTrend");
            }}
          >
            <FaArrowLeft className="mr-[2px] animate-moveBackButton" />
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
