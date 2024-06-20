import { useEffect, useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { FaCarAlt, FaDatabase } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosRefresh } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import StatsCard from "@/components/common/StatsCard/Graphs/LineBarGraph/StatsCard/StatsCard";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import axios from "axios";
import LineBarGraph2 from "@/components/common/LineBarGraph2";
import Accordion from "@/components/Accordion/Accordion";
import { Dealer, Model } from '@/utils/constants';
import FilterPopup from "@/components/FilterPopup/FilterPopup";

const BookingAnalysis = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState([]);
  const [bookingButtonList, setBookingButtonList] = useState([]);
  const [bookingGraphLabel, setBookingGraphLabel] = useState([]);
  const [selectedBookingBtn, setSelectedBookingBtn] = useState("Type of Booking");
  const [filterOpen, setFilterOpen] = useState(false);
  const [bookingFilterData, setBookingFilterData] = useState({
    model: [],
    dealer: [],
    ro: [],
    enquirymonth: [],
    bookedmonth: [],
    city: [],
    location: [],
    source: [],
    sourceofinfo: [],
    consultantname: [],
  })

  const getClosedFields = [{key:"model", title: "Model", options: Model}, { key:"dealer", title: "Dealer", options: Dealer}, {key:"ro", title: "RO"},{key:"enquirymonth", title: "Enquiry Month"},  
  {key:"bookedmonth", title: "Booked Month" }, {key:"city", title: "City" }, {key:"location", title: "Location" }, {key:"source", title: "Source"}, {key:"sourceofinfo", title: "Source of Info"}, 
  {key:"consultantname", title: "Consultant Name"}]


  useEffect(() => {
    axios
      .get("https://api.npoint.io/a8724dcc1767c8304d1d")
      .then((res) => {
        setBookingButtonList(res.data?.BookingAnalysis?.buttonList);
        setBookingGraphLabel(res.data?.BookingAnalysis?.graphLabel);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/booking/sp',
      headers: { }
    };
    
    axios.request(config)
    .then((res) => {
      console.log(res.data);
      setTablesData(res.data?.BookingAnalysis);
    })
    .catch((error) => {
      console.log(error);
    });

    const initialAccordionStates = tablesData.map(() => false);
    setAccordionStates(initialAccordionStates);
  }, []);

  return (
    <div className=" booking-parent bg-[#F4F3F9] w-[100%]  ">
         {

          filterOpen && <FilterPopup setOpen={setFilterOpen} getFields={getClosedFields} FilterData={bookingFilterData} setFilterData={setBookingFilterData} />
        }
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="flex flex-wrap justify-between gap-2 pt-4 mx-2">
        <StatsCard
          title="Test Drive Given"
          icon={<GiSteeringWheel size={60} />}
          color=" bg-blue-500 text-white"
        />
        <StatsCard
          title="First Time Buyer"
          color=" bg-yellow-400     text-white"
          icon={<FaCarAlt size={59} />}
        />
        <StatsCard
          icon={<IoIosRefresh size={58} />}
          color="  bg-red-500 text-white "
          title="     Repeat Brand Buyer "
        />
        <StatsCard
          title="Exchange Buyer"
          icon={<FaArrowRightArrowLeft size={61} />}
          color="bg-purple-500 text-white"
        />
        <StatsCard
          color=" bg-blue-400 text-white   "
          icon={<FaDatabase size={62} />}
          title="Interested   in Competition"
        />
      </div>
      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection setOpen={setFilterOpen}></TableSelection>
      </div>

      <div className="flex flex-wrap gap-2 mx-2 mt-4">
        {bookingButtonList.map((bookingBtnText, index) => (
          <Button
            key={index}
            className={`border-2 hover:bg-white hover:text-black ${selectedBookingBtn === bookingBtnText
              ? "bg-white text-black hover:bg-white"
              : "none"
              }  `}
            onClick={() => {
              setSelectedBookingBtn(bookingBtnText);
            }}
          >
            {bookingBtnText}
          </Button>
        ))}
      </div>
      {bookingGraphLabel[selectedBookingBtn] && (
        <div className="flex flex-col items-center justify-center gap-10 mt-4">
          <div>
            <h2 className="mb-2 text-3xl font-medium">{selectedBookingBtn}</h2>
            <LineBarGraph2
              graphLabels={bookingGraphLabel[selectedBookingBtn]}
              isLineGraph={true}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 pb-10 mx-4 mt-4 booking-accordian">
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

export default BookingAnalysis;
