import React from "react";
import { Button } from "../ui/button";

const DataCard = ({ figure, btnText, cardColor }) => {
  return (
    <div
      //   style={{ backgroundColor: `${cardColor}` }}
      className=" rounded-lg flex bg-gradient-to-r from-purple-500 to-pink-500 justify-between  px-4 py-2 h-[100px]"
    >
      <div className="self-end">
        <p className="text-4xl font-bold text-white">{figure}</p>
      </div>
      <div>
        <Button>{btnText}</Button>
      </div>
    </div>
  );
};

export default DataCard;
