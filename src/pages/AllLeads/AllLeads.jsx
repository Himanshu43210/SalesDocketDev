import DataCard from "../../components/AllLeadsComponents/DataCard";
import { useState } from "react";
import AdminNavbar from "../../components/Admin_Navbar";
import SideMenu from "../../components/SideMenu";
import FilterModal from "../../components/AllLeadsComponents/FilterModal";
import TableSelection from "../../components/Slection_Panel/Tableselection";
const AllLeads = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [selected, setSelected] = useState([]);

  const dealerOptions = [
    { label: "option A", value: "optiona" },
    { label: "option B", value: "optionb" },
    { label: "option C", value: "optionc" },
  ];
  return (
    <>
      <div>
        <div className="navbar">
          <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
          <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
        </div>
        <div className="flex w-[100vw] items-center justify-center mt-[5px]">
          <TableSelection></TableSelection>
        </div>

        <div>
          <FilterModal
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
            dealerOptions={dealerOptions}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[90%] mx-auto">
            <DataCard
              figure={2807}
              btnText={"Enquiry Data Excel"}
              cardColor={"#0D73EC"}
            />
          </div>
          <div className="w-[90%] mx-auto">
            <DataCard
              figure={2807}
              btnText={"Enquiry process Excel"}
              cardColor={"#E13300"}
            />
          </div>
          <div className="w-[90%] mx-auto">
            <DataCard
              figure={2807}
              btnText={"Enquiry Excel"}
              cardColor={"#006450"}
            />
          </div>
          <div className="w-[90%] mx-auto">
            <DataCard
              figure={2807}
              btnText={"Enquiry Data"}
              cardColor={"#8400E7"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLeads;
