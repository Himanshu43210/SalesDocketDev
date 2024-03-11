import DataCard from "@/components/AllLeadsComponents/DataCard";
import { useState } from "react";
import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import FilterModal from "@/components/AllLeadsComponents/FilterModal";
import TableSelection from "@/components/Slection_Panel/Tableselection";
import { Dealer, Model } from '@/utils/constants';
import FilterPopup from "@/components/FilterPopup/FilterPopup";

const AllLeads = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [allFilterData, setAllFilterData] = useState({
    dealer: [],
    consultantname: [],
    model: [],
    testdrivegiven: [],
    firsttimebuyer: [],
    interestedinexchange: [],
    interestedincompetition: [],
    leadsource: [],
  })

  const getAllFields = [{ key:"dealer", title: "Dealer", options: Dealer},{key:"consultantname", title: "Consultant Name", options: Model}, {key:"model", title: "Model", options: Model},  {key:"testdrivegiven", title: "Test Drive Given"},
  {key:"firsttimebuyer", title: "First Time Buyer" }, {key:"interestedinexchange", title: "Interested in Exchange" }, {key:"interestedincompetition", title: "Interested in Competition" }, 
  {key:"leadsource", title: "Lead Source"}]


  return (
    <>
     {
      filterOpen && <FilterPopup setOpen={setFilterOpen} getFields={getAllFields} FilterData={allFilterData} setFilterData={setAllFilterData} showDate="true" fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate}/>
     }
      <div>
        <div className="navbar">
          <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
          <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
        </div>
        <div className="flex w-[100vw] items-center justify-center mt-[5px]">
          <TableSelection setOpen={setFilterOpen}></TableSelection>
        </div>

        {/* <div>
          <FilterModal
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
            dealerOptions={dealerOptions}
            selected={selected}
            setSelected={setSelected}
          />
        </div> */}
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
