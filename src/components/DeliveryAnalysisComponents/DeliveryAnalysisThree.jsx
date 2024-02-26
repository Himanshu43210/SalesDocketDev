import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import TripleBarGraph from "../common/TripleBarGraph";
import DoubleBarGraphTwo from "../common/DoubleBarGraphTwo";
import axios from "axios";
import DataTable from "../Table/DataTable";

const buttonList = [
  "First Time Buyer",
  "Additional Buyer",
  "Additional Buyer Brand Owned",
  "Additional Buyer Model Owned",
  "Additional Buyer Model Aging",
  "Exchange Buyer",
  "Exchange Brand Break Up",
  "Exchange Model Break Up",
  "Exchange Model Aging",
  "Repeat Buyer",
  "Repeat Buyer Model",
  "Repeat Buyer Aging",
  "Interested In Comp",
  "Model Interested",
  "Reason-Selecting Brand",
  "Days-Enquiry To Delivery",
  "Call Follow Ups",
  "Spoke To Customers",
  "Test Drive Given",
];

const graphLabel = {
  "First Time Buyer": ["Yes"],
  "Additional Buyer": ["Yes"],
  "Additional Buyer Brand Owned": ["Hyundai"],
  "Additional Buyer Model Owned": [
    "Creta",
    "Venue",
    "Grand Nios",
    "Verna",
    "All New I20",
    "Exter",
    "Aura",
  ],
  "Additional Buyer Model Aging": [
    ">5years old",
    "5 year old",
    "3 year old",
    "1 year old",
    "2 year old",
  ],
  "Exchange Buyer": ["Yes"],
  "Exchange Brand Break Up": [
    "Maruti",
    "Hyundai",
    "Volkswagen",
    "Mahindra",
    "Ford",
  ],
  "Exchange Model Break Up": [
    "Swift Dzire",
    "Swift",
    "Vento",
    "Ecosport",
    "Beat",
  ],
  "Exchange Model Aging": [
    ">5years old",
    "5 year old",
    "3 year old",
    "1 year old",
    "2 year old",
  ],
  "Repeat Buyer": ["Yes"],
  "Repeat Buyer Model": [
    "Creta",
    "Venue",
    "Grand Nios",
    "Verna",
    "All New I20",
  ],
  "Repeat Buyer Aging": [
    ">5years old",
    "5 year old",
    "3 year old",
    "1 year old",
    "2 year old",
  ],
  "Interested In Comp": ["Yes"],
  "Model Interested": ["Swift"],
  "Reason-Selecting Brand": [
    "I did not ask",
    "NA",
    "After Sales Support",
    "Brand Appeal",
    "Design",
  ],
  "Days-Enquiry To Delivery": [
    "0-2 days",
    "3-5 days",
    "6-8 days",
    "9-10 days",
    "11-15 days",
  ],
  "Call Follow Ups": ["0 time", "1 time", "2 times", "3 times", "4 times"],
  "Spoke To Customers": ["0 time", "1 time", "2 times", "3 times", "4 times"],
  "Test Drive Given": ["Yes"],
};
const DeliveryAnalysisThree = () => {
  const [selectedBtn3, setSelectedBtn3] = useState(null);
  const [accordionStates, setAccordionStates] = useState(false);
  const [tablesData, setTablesData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.npoint.io/4c8e2de92bd4e6e1d5e5")
      .then((res) => {
        console.log("3data", res.data.thirdData);
        setTablesData(res.data.thirdData);
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
              selectedBtn3 === btnText
                ? "bg-white text-black hover:bg-white"
                : "none"
            }  `}
            onClick={() => {
              console.log("select2", selectedBtn3);
              setSelectedBtn3(btnText);
            }}
          >
            {btnText}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mx-4 mt-4 pb-10">
        {selectedBtn3 && (
          <div className="accordian bg-white border-2  rounded-lg  p-4 ">
            <div className="flex items-center justify-between">
              <p className="font-medium ">{tablesData[selectedBtn3].heading}</p>
              <Button onClick={() => setAccordionStates(!accordionStates)}>
                {accordionStates ? "Hide" : "Show"}
              </Button>
            </div>
            {accordionStates && (
              <DataTable
                columns={tablesData[selectedBtn3].tableheadData}
                data={tablesData[selectedBtn3].tablerowData}
                tableName={tablesData[selectedBtn3].heading}
              />
            )}
          </div>
        )}
      </div>

      {selectedBtn3 && (
        <div className="flex justify-center mt-4">
          <div>
            <h2 className=" text-3xl font-medium">{selectedBtn3}</h2>
            <DoubleBarGraphTwo graphLabels={graphLabel[selectedBtn3]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryAnalysisThree;
