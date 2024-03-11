import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { useState } from "react";
import style from "./Business.module.css";
import { FaSignal } from "react-icons/fa6";
import { IoChatbubbles, IoServer } from "react-icons/io5";
import { RiRecycleFill } from "react-icons/ri";
import { FaDropbox } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import BTrackerMonthWiseTable from "@/components/BusninessTracker/BTrackerMonthWiseTable";
import FilterBT from "@/components/BusninessTracker/FilterBT";
import ChartComponent from "@/components/BusninessTracker/Chart_BusinessTraker";
import FilterPopup from "@/components/FilterPopup/FilterPopup";
import { Dealer, Model } from '@/utils/constants';

function BusinessTracker() {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("MonthWise");
  const [accordionStates, setAccordionStates] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [trackerFilterData, setTrackerFilterData] = useState({
    dealer: [],
    ro: [],
    city: [],
    model: [],
    enquirymonth: [],
    month: []
  })

  const getTrackerFields = [ { key:"dealer", title: "Dealer", options: Dealer}, {key:"ro", title: "RO"}, {key:"city", title: "City" }, {key:"model", title: "Model", options: Model}, {key:"month", title: "Month"}]


  // const dealerOptions = [
  //   { label: "ram Motors", value: "ram Motors" },
  //   { label: "ganpati Motors", value: "ganpati Motors" },
  //   { label: "shastri motors", value: "shastri motors" },
  // ];
  // const ROOptions = [
  //   { label: "ro1", value: "ro1" },
  //   { label: "ro2", value: "ro2" },
  //   { label: "ro3", value: "ro3" },
  // ];
  // const CityOptions = [
  //   { label: "ambala", value: "ambala" },
  //   { label: "Chandigarh", value: "Chandigarh" },
  //   { label: "shimla", value: "shimla" },
  // ];
  // const ModelOptions = [
  //   { label: "alto", value: "alto" },
  //   { label: "bugati", value: "bugati" },
  //   { label: "scorpio", value: "scorpio" },
  // ];
  // const MonthOptions = [
  //   { label: "jan", value: "jan" },
  //   { label: "feb", value: "feb" },
  //   { label: "july", value: "july" },
  // ];

  const ReportTypes = {
    DayWiseCount: [
      "2024-02-15",
      "2024-02-14",
      "2024-02-13",
      "2024-02-12",
      "2024-02-11",
      "2024-02-10",
    ],
    dealerwise: ["delhi", "chandigarh", "pune", "bihar"],
    ModelWisecount: [
      "creata",
      "thar",
      "scorpio",
      "laandrover",
      "alto",
      "cycle",
    ],
    MonthWise: ["January", "February", "March", "April", "May", "June", "July"],
    Regionwise: ["delhi", "chandigarh", "pune", "bihar"],
    scwise: ["delhi", "chandigarh", "pune", "bihar"],
  };

  const buttonsInfo = [
    { key: "MonthWise", label: "Month Wise Report" },
    { key: "DayWiseCount", label: "Day Wise Count" },
    { key: "ModelWisecount", label: "Model Wise Count" },
    { key: "Regionwise", label: "Region Wise Count" },
    { key: "dealerwise", label: "Dealer Wise" },
    { key: "scwise", label: "SC Wise" },
  ];

  return (
    <>
     {

      filterOpen && <FilterPopup setOpen={setFilterOpen} getFields={getTrackerFields} FilterData={trackerFilterData} setFilterData={setTrackerFilterData} />
     }
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="maindata">
        {/* <FilterBT
          open={open}
          setOpen={setOpen}
          MonthOptions={MonthOptions}
          ModelOptions={ModelOptions}
          CityOptions={CityOptions}
          ROOptions={ROOptions}
          dealerOptions={dealerOptions}
          selected={selected}
          setSelected={setSelected}
        ></FilterBT> */}
        <div className="flex w-[92vw] ml-[4vw] justify-between px-4 py-2">
          <div className={` ${style.box} flex flex-col`}>
            <h2 className={`${style.heading} mb-2 text-lg font-semibold `}>
              Enquiry Forecasting
            </h2>
            <div className="flex space-x-2">
              <div className="p-4 text-center bg-blue-200 rounded-[10px] w-[190px] hover:scale-1">
                <div className="flex justify-between upper px-[5px]">
                  <p className="text-xl font-[600]">13314</p>
                  <FaSignal size={40} className="hover:color-[white]" />
                </div>
                <p className="text-sm font-bold tracking-tight">
                  Active Enquiries in Hand
                </p>
              </div>
              <div className="p-4 text-center bg-yellow-300 rounded-[10px] w-[180px]">
                <div className="flex justify-between upper px-[5px]">
                  <p className="text-xl font-[600]">1957</p>
                  <IoChatbubbles size={40} className="hover:color-[white]" />
                </div>
                <p className="text-sm font-bold tracking-tight">
                  Hot Enquiries
                </p>
              </div>
              <div className="p-4 text-center bg-purple-300 rounded-[10px] w-[180px]">
                <div className="flex justify-between upper px-[5px]">
                  <p className="text-xl font-[600]">884</p>

                  <RiRecycleFill size={40} className="hover:color-[white]" />
                </div>
                <p className="text-sm font-bold tracking-tight">
                  Expected to Convert
                </p>
              </div>
            </div>
          </div>
          <div className={` ${style.box} flex flex-col`}>
            <h2 className={`${style.heading} mb-2 text-lg font-semibold `}>
              Delivery Forecasting
            </h2>
            <div className="flex space-x-2">
              <div className="p-4 text-center bg-red-300 rounded-[10px] w-[180px]">
                <div className="flex justify-between upper px-[5px]">
                  <p className="ttext-xl font-[600]">1500</p>
                  <FaDropbox size={40} className="hover:color-[white]" />
                </div>
                <p className="text-sm font-bold tracking-tight">
                  Booking in Hand
                </p>
              </div>
              <div className="p-4 text-center bg-blue-300 rounded-[10px] w-[180px]">
                <div className="flex justify-between upper px-[5px]">
                  <p className="text-xl font-[600]">151</p>
                  <IoServer size={40} className="hover:color-[white]" />
                </div>
                <p className="text-sm font-bold tracking-tight">
                  {" "}
                  Expected Delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[100vw] items-center justify-center mt-[5px]">
          <TableSelection setOpen={setFilterOpen}></TableSelection>
        </div>

        <div className="flex flex-wrap gap-2 mx-2 mt-4 left">
          {buttonsInfo.map((button) => (
            <Button
              key={button.key}
              className={`border-2 hover:bg-white hover:text-black ${
                selectedBtn === button.key
                  ? "bg-white text-black hover:bg-white"
                  : ""
              }`}
              onClick={() => setSelectedBtn(button.key)}
            >
              {button.label}
            </Button>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <ChartComponent labels={ReportTypes[selectedBtn]} />
        </div>
        {/* <div className="flex justify-center w-[94%] mx-4">
        </div> */}
        <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
          <div className="p-4 bg-white border-2 rounded-lg accordian ">
            <div className="flex items-center justify-between">
              <p className="font-bold ">{selectedBtn}</p>
              <Button onClick={() => setAccordionStates(!accordionStates)}>
                {accordionStates ? "Hide" : "Show"}
              </Button>
            </div>
            {accordionStates && <BTrackerMonthWiseTable />}
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessTracker;
