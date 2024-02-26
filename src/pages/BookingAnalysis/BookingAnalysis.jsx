import React, { useEffect, useState } from "react";
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

const BookingAnalysis = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState([]);
  const [bookingButtonList, setBookingButtonList] = useState([]);
  const [bookingGraphLabel, setBookingGraphLabel] = useState([]);
  const [selectedBookingBtn, setSelectedBookingBtn] =
    useState("Type of Booking");

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
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    axios
      .get("https://api.npoint.io/e5821b0e062ec043f23e")
      .then((res) => {
        setTablesData(res.data?.BookingAnalysis);
      })
      .catch((err) => {
        console.log(err);
      });

    const initialAccordionStates = tablesData.map(() => false);
    setAccordionStates(initialAccordionStates);
  }, []);

  return (
    <div className="  bg-[#F4F3F9] w-[100%]  ">
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <div className="flex flex-wrap justify-between gap-2 pt-4 mx-2">
        <StatsCard
          icon={<GiSteeringWheel size={60} />}
          title="Test Drive Given"
          color="bg-blue-500 text-white"
        />
        <StatsCard
          icon={<FaCarAlt size={60} />}
          title="First Time Buyer"
          color="bg-yellow-400 text-white"
        />
        <StatsCard
          icon={<IoIosRefresh size={60} />}
          title="Repeat Brand Buyer"
          color="bg-red-500 text-white"
        />
        <StatsCard
          icon={<FaArrowRightArrowLeft size={60} />}
          title="Exchange Buyer"
          color="bg-purple-500 text-white"
        />
        <StatsCard
          icon={<FaDatabase size={60} />}
          title="Interested in Competition"
          color="bg-blue-400 text-white"
        />
      </div>
      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection></TableSelection>
      </div>

      <div className="flex flex-wrap gap-2 mx-2 mt-4">
        {bookingButtonList.map((bookingBtnText, index) => (
          <Button
            key={index}
            className={`border-2 hover:bg-white hover:text-black ${
              selectedBookingBtn === bookingBtnText
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
        <div className="flex flex-col items-center gap-10 justify-center mt-4">
          <div>
            <h2 className="mb-2 text-3xl font-medium">{selectedBookingBtn}</h2>
            <LineBarGraph2
              graphLabels={bookingGraphLabel[selectedBookingBtn]}
            />
          </div>
        </div>
      )}

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

export default BookingAnalysis;
