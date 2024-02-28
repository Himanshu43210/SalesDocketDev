import DataTable from "../Table/DataTable";
import { Button } from "@/components/ui/button";


const TableDataMapper = ({tablesData, tableHeading, setAccordionStates, accordionStates}) => {

    return (
        <div className="grid grid-cols-1 gap-4 pb-10 mx-4 mt-4">
        {tablesData.map(
          (tableData, index) =>
            tableData.heading === tableHeading && (
              <div key={index} className="p-4 bg-white border-2 rounded-lg accordian ">
                <div className="flex items-center justify-between">
                  <p className="font-medium ">{tableData.heading}</p>
                  <Button onClick={() => setAccordionStates(!accordionStates)}>
                    {accordionStates ? "Hide" : "Show"}
                  </Button>
                </div>
                {accordionStates && tableData.heading === tableHeading && (
                  <DataTable
                    columns={tableData.tableheaddata}
                    data={tableData.tablerowdata}
                    tableName={tableData.heading}
                    showLink="false"
                  />
                )}
              </div>
            )
        )}
      </div>
    );
};

export default TableDataMapper;
