import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DataCard from "@/components/AllLeadsComponents/DataCard";
import axios from "axios";
import DataTable from "@/components/Table/DataTable";
import { FaArrowLeft } from "react-icons/fa";

function Followupother({page,button,setbutton}){
   
    const [tablesData, setTablesData] = useState([]);
    const [accordionStates, setAccordionStates] = useState([]);
    const toggleAccordion = (index) => {
      const newAccordionStates = [...accordionStates];
      newAccordionStates[index] = !newAccordionStates[index];
      setAccordionStates(newAccordionStates);
      setIsCollapsed(!isCollapsed);
    };
  
    useEffect(() => {
      axios
        .get("https://api.npoint.io/d63af4aab5f2eb3accfe")
        .then((res) => {
          console.log("asdas", res.data);
        //   const { FollowupNonUniqueMonth } = res.data;
          setTablesData(res.data[page]);
        })
        .catch((err) => {
          console.log(err);
        });
  
      const initialAccordionStates = tablesData.map(() => false);
      setAccordionStates(initialAccordionStates);
    }, []);

    console.log(tablesData)
    return (
      <div className="bg-[#F4F3F9]">
       <div className="w-[90%] mx-auto mt-4">
          <DataCard
            figure={2807}
            btnText={"Current Day Follow Up"}
            cardColor={"#8400E7"}
          />
        </div>
        <div className="flex flex-row-reverse w-[95%] mt-1 backbutton">
          
          <Button
              className={`border-2 hover:bg-white hover:text-black `} 
               
              onClick={() => {setbutton(!button)}}
            >
              <FaArrowLeft  className="mr-[2px] animate-moveBackButton"/>
              Follow-Up Tracker Dashboard
            </Button>
          </div>
        <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
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
                  showLink="false"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
}


export default Followupother;