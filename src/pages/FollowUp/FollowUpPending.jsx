import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SingleBarGraph from "@/components/common/StatsCard/Graphs/LineBarGraph/SingleBarGraph";
import DataCard from "@/components/AllLeadsComponents/DataCard";
import { FaArrowLeft } from "react-icons/fa";

const FollowUpPending = ({ button, setbutton }) => {
  const [selectedBtn, setSelectedBtn] = useState("overallpending");
  const [graphLabels, setGraphLabels] = useState([]);
  const [title, setTitle] = useState("");

  const buttonsInfo = [
    { key: "overallpending", label: "OverAll Pending" },
    { key: "dealerwisepending", label: "Dealer Wise Pending" },
    { key: "scwisedelivery", label: "SC Wise Pending" },
    { key: "typeofpending", label: "Type Of Pending" },
  ];

  useEffect(() => {
    let labels = [];
    switch (selectedBtn) {
      case "overallpending":
        labels = ["Today", "1_Day_Delay", "2_Day_Delay", "3_Day_Delay"];
        setGraphLabels(labels);
        setTitle("Overall Pending");
        break;
      case "dealerwisepending":
        labels = [
          "Kaushalya Motors",
          "Samta Hyundai",
          "Sawan Hyundai 2",
          "Sawan Hyundai",
        ];
        setGraphLabels(labels);
        setTitle("Dealer Wise Pending");
        break;
      case "scwisepending":
        labels = [
          "Vijay Kumar",
          "Amit Joshi",
          "Indermeet Singh",
          "Rohit Kapoor",
        ];
        setGraphLabels(labels);
        setTitle("SC Wise Pending");
        break;
      case "typeofpending":
        labels = ["Call", "Dealer Visit", "Home Visit"];
        setGraphLabels(labels);
        setTitle("Type Of Pending");
        break;
      default:
        labels = [
          "Today g",
          "1_Day_Delay fg",
          "2_Day_Delay ff",
          "3_Day_Delayfdf",
        ];
        setGraphLabels(labels);
        setTitle("Overall Pendinggg");
        break;
    }
  }, [selectedBtn]);
  return (
    <div className="bg-[#F4F3F9]">
      <div className="w-[90%] mx-auto mt-4">
        <DataCard
          figure={2807}
          btnText={"Pending Follow-up Data"}
          cardColor={"#8400E7"}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-2 mx-2 mt-4 left">
          {buttonsInfo.map((item) => (
            <Button
              key={item.key}
              className={`border-2 hover:bg-white hover:text-black ${
                selectedBtn === item.key
                  ? "bg-white text-black hover:bg-white"
                  : ""
              }`}
              onClick={() => setSelectedBtn(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="px-10 mt-4 right">
          <Button
            className={`border-2 hover:bg-white hover:text-black `}
            onClick={() => {
              setbutton(!button);
            }}
          >
            <FaArrowLeft className="mr-[2px] animate-moveBackButton" />
            Follow-Up Tracker Dashboard
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <SingleBarGraph graphLabels={graphLabels} title={title} />
      </div>
    </div>
  );
};

export default FollowUpPending;
