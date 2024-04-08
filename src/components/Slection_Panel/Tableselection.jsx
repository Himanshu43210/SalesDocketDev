import { Button } from "../../components/ui/button";
import { removeSelectedField } from "../../store/slices/selectedFieldSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function TableSelection({setOpen}) {
  const [selectedBtn, setSelectedBtn] = useState("");

   console.log(selectedBtn);

  const dispatch = useDispatch();
  const selectedField = useSelector((state) => state.selectedField);
  console.log("selected", selectedField);

  const handleClear = (tableName) => {
    dispatch(removeSelectedField(tableName));
  };
  return (
    <>
      <div className="p-4 bg-[#ffffff] w-[90vw] border border-solid border-black rounded-md">
        <div className="flex items-center justify-between mb-4  px-[10px] py-[2px] rounded-md">
          <Button onClick={() => setSelectedBtn("Refresh")}>Refresh</Button>

          <h1 className="text-2xl font-semibold">Selection Panel</h1>

          <Button onClick={() => setOpen(true)}>
            Select Filter
          </Button>
        </div>
        <div className="rounded-md ">
          <table className="border-2 w-full  border-[#0F172A]">
            <thead className="bg-[#0F172A] text-white">
              <tr>
                <th className="py-2 font-semibold text-center border border-black border-solid ">
                  Clear
                </th>
                <th className="font-semibold text-center border border-black border-solid">
                  Table
                </th>
                <th className="font-semibold text-center border border-black border-solid">
                  Field
                </th>
                <th className="font-semibold text-center border border-black border-solid">
                  Selection
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedField.length > 0 ? (
                selectedField.map((rowData, index) => (
                  <tr>
                    <td
                      className="text-center cursor-pointer py-2 px-4 border border-[#0F172A]"
                      onClick={() => handleClear(rowData.tableName)}
                    >
                      Clear
                    </td>
                    <td className="text-center py-2 px-4 border border-[#0F172A]">
                      {rowData.tableName}
                    </td>
                    <td className="text-center py-2 px-4 border border-[#0F172A]">
                      {rowData.fieldName}
                    </td>
                    <td className="text-center py-2 px-4 border border-[#0F172A]">
                      {Array.isArray(rowData.value)
                        ? rowData.value.join(", ")
                        : rowData.value}
                    </td>
                  </tr>
                ))
              ) : (
                <p className="pl-4 font-bold">No Filters Added</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableSelection;
