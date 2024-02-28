import TableSelection from "@/components/Slection_Panel/Tableselection";
import SingleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/SingleBarGraph";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BtrendFilter from "@/components/Btrend/Filtertrend";
import TableDataMapper from "@/components/BusninessTracker/TableDataMapper";
import Navbar from "@/components/ui/Navbar";

function ModelWise() {
  const selectedBtnDef = "Enquiry Wise";
  const walkInWise = "Walk-In Wise";
  const BookingWise = "Booking Wise";
  const DeliveryWise = "Delivery Wise";
  const CloseWise = "Closed Wise";
  const ConvRatio = "Conversation Ratio";
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(selectedBtnDef);
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState(false);
  const [tableHeading, setTableHeading] = useState("Enquiry Wise");
  const graphLabels = ["Today", "1_Day_Delay", "2_Day_Delay", "3_Day_Delay"];

  let selectedComponent;
  switch (selectedBtn) {
    case selectedBtnDef:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Enquiry-Wise"} />
      );
      break;
    case walkInWise:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Walk-In-Wise"} />
      );
      break;
    case BookingWise:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Booking-Wise"} />
      );
      break;
    case DeliveryWise:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Delivery-Wise"} />
      );
      break;
    case "Lost Wise":
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Lost-Wise"} />
      );
      break;
    case CloseWise:
      selectedComponent = (
        <SingleBarGraph graphLabels={graphLabels} title={"Closed-Wise"} />
      );
      break;
    case ConvRatio:
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
      label: selectedBtnDef,
      value: selectedBtnDef,
      tableHeading: 'Dealer Wise Enquiry Table'
    },
    {
      label: walkInWise,
      value: walkInWise,
      tableHeading: 'Dealer Wise Walk-In table'
    },
    {
      label: BookingWise,
      value: BookingWise,
      tableHeading: 'Dealer Wise Booking Table'
    },
    {
      label: DeliveryWise,
      value: DeliveryWise,
      tableHeading: 'Dealer Wise Delivery Table'
    },
    {
      label: 'Lost Wise ',
      value: 'Lost Wise',
      tableHeading: 'Dealer Wise Lost Table'
    },
    {
      label: CloseWise,
      value: CloseWise,
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
      <TableDataMapper tablesData={tablesData} tableHeading={tableHeading} setAccordionStates={setAccordionStates} accordionStates={accordionStates}/>
      {/* <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
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
      </div> */}
    </>
  );
}

export default ModelWise;
