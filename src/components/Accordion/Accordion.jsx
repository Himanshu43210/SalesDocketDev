// Accordion.js
import React from "react";
import { Button } from "../../components/ui/button";
import DataTable from "../../components/Table/DataTable";

const Accordion = ({
  tableData,
  index,
  accordionStates,
  toggleAccordion,
  showLink = "true",
}) => {
  return (
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
          showLink={showLink}
        />
      )}
    </div>
  );
};

export default Accordion;
