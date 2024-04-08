import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import LostTo from "../../components/LostLeadsComponents/LostTo/LostTo";
import LeadSource from "../../components/LostLeadsComponents/LeadSource/LeadSource";
import TableSelection from "../../components/Slection_Panel/Tableselection";
import DataTable from "../../components/Table/DataTable";
import axios from "axios";
import StatsCardList from "../../components/LostLeadsComponents/StatsCardList/StatsCardList";
import Navbar from "../../components/ui/Navbar";

const LostLeadsCard = ({ icon, title }) => {
  return (
    <div className={`flex-1 rounded-lg p-2 bg-[#CEE2F6] shadow-xl  `}>
      <div className="flex justify-between">
        <div className="text-sm font-medium">
          <p>Yes(944-15.03%)</p>
          <p>No(4930-78.48%)</p>
          <p>NA(408-6.49%)</p>
        </div>
        <div>{icon}</div>
      </div>
      <div className="mt-2 text-center">
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
};

const LostLeads = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("lostTo");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [tablesData, setTablesData] = useState([]);
  const [accordionStates, setAccordionStates] = useState([]);
  const lostToStyles = "bg-white text-black hover:bg-white";
  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
    setIsCollapsed(!isCollapsed);
  };
  let selectedComponent;
  switch (selectedBtn) {
    case "lostTo":
      selectedComponent = <LostTo />;
      break;
    case "leadSource":
      selectedComponent = <LeadSource />;
      break;
    default:
      selectedComponent = <LostTo />;
      break;
  }

  useEffect(() => {
    axios
      .get("https://api.npoint.io/25264037dcc326f96e9c")
      .then((res) => {
        const { LostLeads } = res.data;
        setTablesData(LostLeads);
      })
      .catch((err) => {
        console.log(err);
      });

    const initialAccordionStates = tablesData.map(() => false);
    setAccordionStates(initialAccordionStates);
  }, []);

  return (
    <div className="  bg-[#F4F3F9] w-[100%]  ">
      <Navbar setsideMenu={setsideMenu} sideMenu={sideMenu}/>
      <StatsCardList/>
      <div className="flex w-[100vw] items-center justify-center mt-[5px]">
        <TableSelection></TableSelection>
      </div>
      {/*  */}
      <div className="flex flex-wrap gap-2 mx-2 mt-4">
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "lostTo"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("lostTo")}
        >
          Lost to
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black ${
            selectedBtn === "leadSource"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("leadSource")}
        >
          Lead Source
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "month"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("month")}
        >
          Month
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "lostmodelown"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("lostmodelown")}
        >
          Lost Model Own
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "ro" ? lostToStyles : "none"
          }  `}
          onClick={() => setSelectedBtn("ro")}
        >
          RO
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "dealer"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("dealer")}
        >
          Dealer
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "city"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("city")}
        >
          City
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "losttomodels"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("losttomodels")}
        >
          Lost To Models
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "losttobrand"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("losttobrand")}
        >
          Lost To Brand
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "reasonscompetition"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("reasonscompetition")}
        >
          Reasons-Competition
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "losttocodealer"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("losttocodealer")}
        >
          Lost to Co-Dealer
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "leadstatus"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("leadstatus")}
        >
          Lead Status
        </Button>
        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "reasonscodealer"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("reasonscodealer")}
        >
          Reasons-Co-Dealer
        </Button>

        <Button
          className={`border-2 hover:bg-white hover:text-black  ${
            selectedBtn === "monthwiseenquired"
              ? lostToStyles
              : "none"
          }  `}
          onClick={() => setSelectedBtn("monthwiseenquired")}
        >
          Month Wise Enquired
        </Button>
      </div>
      <div className="flex justify-center mt-4">{selectedComponent}</div>
      <div className="grid grid-cols-2 gap-4 mx-4 mt-4 pb-10">
        {tablesData.map((tableData, index) => (
          <div className="accordian border-2  rounded-lg bg-white p-4 ">
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
    </div>
  );
};

export default LostLeads;
