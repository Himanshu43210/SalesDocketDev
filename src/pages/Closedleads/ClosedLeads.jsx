import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import { GiSteeringWheel } from "react-icons/gi";
import { FaCarAlt, FaDatabase } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import LineBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/LineBarGraph";
import axios from "axios";
import DataTable from "@/components/Table/DataTable";

const Closedleads = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("monthwiseclosed");
  const [graphLabels, setGraphLabels] = useState([]);
  const [barGraphData, setBarGraphData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState([]);
  const [title, setTitle] = useState("");
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState([]);
  const dealerWise = "Dealer Wise";
  // switch (selectedBtn) {
  //   case "monthwiseclosed":
  //     selectedComponent = <LineBarGraph />;
  //     break;
  //   case "DayWiseCount":
  //     selectedComponent = <LineBarGraph />;
  //     break;
  //   case "ModelWisecount":
  //     selectedComponent = <LineBarGraph />;
  //     break;
  //   case "Regionwise":
  //     selectedComponent = <LineBarGraph />;
  //     break;
  //   case "dealerwise":
  //     selectedComponent = <LineBarGraph />;
  //     break;
  //   case "scwise":
  //     selectedComponent = <LineBarGraph />;
  //     break;
  //   default:
  //     selectedComponent = <LineBarGraph />;
  //     break;
  // }

  const icons = [
    <GiSteeringWheel size={60} />,
    <FaCarAlt size={60} />,
    <IoIosRefresh size={60} />,
    <FaArrowRightArrowLeft size={60} />,
    <FaDatabase size={60} />,
  ];

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    let labels = [];
    let barData = [];
    let lineData = [];
    switch (selectedBtn) {
      case "monthwiseclosed":
        labels = [
          "Delivered",
          "Cancelled",
          "Booked",
          "Inactive",
          "DPR",
          "CPA",
          "Closed",
        ];
        barData = [105, 77, 66, 55, 44, 34, 22];
        lineData = [90, 60, 40, 44, 34, 24, 12];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Month Wise-closed");
        break;
      case "monthwisebooked":
        labels = ["NA"];
        barData = [45];
        lineData = [40];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Month Wise - Booked");
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
      case "leadsourcewise":
        labels = ["Walk-in", "Digital", "Referral", "Tele-in"];
        barData = [46, 76, 37, 79];
        lineData = [30, 55, 26, 55];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Lead Source Wise");
        break;
      case "sourceofinformationwise":
        labels = ["Friends", "Newspaper", "Website", "Others"];
        barData = [66, 66, 47, 89];
        lineData = [60, 55, 36, 65];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("Source of Information Wise");
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
        setTitle(dealerWise);
        break;
      case "leadstatewise":
        labels = ["None", "HOT", "WARM", "COLD"];
        barData = [65, 43, 34, 65];
        lineData = [50, 40, 24, 36];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle(dealerWise);
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
          "Jasbir Kaurr ",
          "Meenu s",
          "Amitr Joshi",
          "Vijay t Kumar",
          "Ritu k Malik",
        ];
        barData = [7, 4, 6, 45, 7];
        lineData = [6, 4, 56, 2, 67];
        setBarGraphData(barData);
        setLineGraphData(lineData);
        setGraphLabels(labels);
        setTitle("SC new Wise");
        break;
    }
  }, [selectedBtn]);

  const buttonData = [
    { label: 'Month Wise-closed', value: 'monthwiseclosed' },
    { label: 'Model wise', value: 'leadSource' },
    { label: 'RO Wise', value: 'month' },
    { label: dealerWise, value: 'lostmodelown' },
    { label: 'SC Wise', value: 'ro1' },
    { label: 'City Wise', value: 'ro2' },
    { label: 'Source Wise', value: 'ro3' },
    { label: 'Lead State Wise', value: 'ro4' },
    { label: 'Reason Wise', value: 'ro5' },
    { label: 'Month Wise -Enquired', value: 'dealer' }
  ];

  useEffect(() => {
    axios
      .get("https://api.npoint.io/25264037dcc326f96e9c")
      .then((res) => {
        const { ClosedLeads } = res.data;
        setTablesData(ClosedLeads);
      })
      .catch((err) => {
        console.log(err);
      });

    const initialAccordionStates = tablesData.map(() => false);
    setAccordionStates(initialAccordionStates);
  }, []);

  return (
    <>
      {" "}
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="minsubject flex justify-center items-center w-[100vw] mt-4">
        <div className="flex space-x-2">
          {[
            {
              title: "Test Drive Given",
              colors: "bg-blue-500 text-white",
              values: [
                "Yes(10187-12.22%)",
                "No(64873-77.83%)",
                "NA(8287-9.94%)",
              ],
            },
            {
              title: "First Time Buyer",
              colors: "bg-yellow-400 text-white",
              values: [
                "Yes(64296-77.14%)",
                "No(10721-12.86%)",
                "NA(8330-9.99%)",
              ],
            },
            {
              title: "Repeat Brand Buyer",
              colors: "bg-red-500 text-white",
              values: ["Yes(3303-3.96%)", "No(69518-83.41%)", "NA(1520-1.82%)"],
            },
            {
              title: "Exchange Buyer",
              colors: "bg-purple-500 text-white",
              values: ["Yes(5286-6.32%)", "No(78064-93.66%)", "NA(15-0.02%)"],
            },
            {
              title: "Interested in Competition",
              colors: "bg-blue-400 text-white",
              values: [
                "Yes(725-0.87%)",
                "No(63175-75.80%)",
                "NA(19447-23.33%)",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-2 ${item.colors} rounded shadow-md `}
            >
              <div className="flex oneouter">
                <div className="forupper">
                  {item.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className="flex justify-between upper px-[5px]"
                    >
                      {value}
                    </div>
                  ))}
                </div>
                <div className="foricon">{icons[index]}</div>
              </div>
              <div className="font-bold text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection></TableSelection>
      </div>
     
        <div className="flex flex-wrap gap-2 mx-2 mt-4">
      {buttonData.map((button, index) => (
        <Button
          key={index}
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === button.value ? 'bg-white text-black hover:bg-white' : 'none'
          }`}
          onClick={() => setSelectedBtn(button.value)}
        >
          {button.label}
        </Button>
      ))}
    </div>
      <div className="flex justify-center mt-4">
        {" "}
        <LineBarGraph
          graphLabels={graphLabels}
          barData={barGraphData}
          lineData={lineGraphData}
          title={title}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 pb-10 mx-4 mt-4">
        {tablesData.map((tableData, index) => (
          <div className="p-4 bg-white border-2 rounded-lg accordian ">
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
    </>
  );
};

export default Closedleads;
