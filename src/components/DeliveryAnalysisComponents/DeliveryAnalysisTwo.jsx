import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import TripleBarGraph from "../common/TripleBarGraph";
import axios from "axios";
import DeliveryAnalysisTableTwo from "./DeliveryAnalysisTableTwo";

const buttonList = [
  "Model",
  "Variant",
  "Color",
  "Fuel",
  "RO",
  "Dealer",
  "City",
  "SC",
  "Source",
  "Source of Info",
  "Mode of Purchase",
  "Type of Finanace",
  "Bank Share",
  "Age Group",
  "Profession",
  "Type of Customer",
];

const graphLabel = {
  Model: [
    "Creta",
    "Venue",
    "Grand Nios",
    "Verna",
    "All New I20",
    "Exter",
    "Aura",
  ],
  Variant: [
    "My 24 Venue FL 1.2 S SFT AB6",
    "My 24 Creta 1.5 CRDi MT SX Tech",
    "My 24 Creta 1.5 MPi MTEX",
    "My 24 Creta 1.5 MPi MT SX(O)",
  ],
  Color: ["White", "Phantom Black", "Denim Blue", "Starry Night"],
  Fuel: ["-"],
  RO: ["RO Sawan"],
  Dealer: [
    "Samta Hyundai",
    "Sawan Hyundai",
    "Sawan Hyundai 2",
    "Kaushalya Motors",
  ],
  City: ["Panipat", "Sonipat", "Karnal", "Kurukshetra", "Jind"],
  SC: [
    "Sonam Sachdeva",
    "Vishal Arora",
    "Harish Kumar",
    "Sonu Sherawat",
    "Robin Chokker",
  ],
  Source: ["Referral", "Walk-in", "Tele-in", "Digital", "Activity"],
  "Source of Info": ["Friends", "Newspaper", "Website", "Google Leads"],
  "Mode of Purchase": ["Cash", "Finance"],
  "Type of Finanace": ["In-House", "Self", "NA"],
  "Bank Share": ["HDFC Bank LTd", "State Bank of India", "Canara Bank", "NA"],
  "Age Group": ["NA"],
  Profession: ["Self Employed", "Other", "I did not ask", "Salaried"],
  "Type of Customer": ["Individual", "Corporate"],
};

const DeliveryAnalysisTwo = () => {
  const [selectedBtn2, setSelectedBtn2] = useState(null);
  const [tableData, setTableData] = useState({});
  const [accordionStates, setAccordionStates] = useState(false);
  const [model, setModel] = useState({});

  console.log(model);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/a7bd231f795472b4e0ee")
      .then((res) => {
        setTableData(res.data.secondData);
        const { Model } = res.data.secondData;
        setModel(Model);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-[#F4F3F9]">
      <div className="flex flex-wrap gap-2 mx-2 mt-4">
        {buttonList.map((btnText, index) => (
          <Button
            key={index}
            className={`border-2 hover:bg-white hover:text-black ${
              selectedBtn2 === btnText
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => {
              console.log("select2", selectedBtn2);
              setSelectedBtn2(btnText);
            }}
          >
            {btnText}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
        {selectedBtn2 && (
          <div className="p-4 bg-white border-2 rounded-lg accordian ">
            <div className="flex items-center justify-between">
              <p className="font-medium ">{selectedBtn2}</p>
              <Button onClick={() => setAccordionStates(!accordionStates)}>
                {accordionStates ? "Hide" : "Show"}
              </Button>
            </div>
            {accordionStates && (
              <DeliveryAnalysisTableTwo
                tableName={selectedBtn2}
                tableData={tableData[selectedBtn2]}
              />
            )}
          </div>
        )}
      </div>
      {selectedBtn2 && (
        <div className="flex flex-col items-center justify-center gap-10 mt-4">
          <div>
            <h2 className="mb-2 text-3xl font-medium">Count Wise Comparison</h2>
            <TripleBarGraph graphLabels={graphLabel[selectedBtn2]} />
          </div>
          <div>
            <h2 className="mb-2 text-3xl font-medium">Share Wise Comparison</h2>
            <TripleBarGraph graphLabels={graphLabel[selectedBtn2]} />
          </div>
          <div>
            <h2 className="mb-2 text-3xl font-medium">Split Wise Comparison</h2>
            <TripleBarGraph graphLabels={graphLabel[selectedBtn2]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryAnalysisTwo;
