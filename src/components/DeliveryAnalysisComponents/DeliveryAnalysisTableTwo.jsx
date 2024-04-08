import React from "react";
import { useDispatch} from "react-redux";
import { setSelectedField } from "../../store/slices/selectedFieldSlice";

const DeliveryAnalysisTableTwo = ({ tableName, tableData }) => {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    const columnName = tableData.table.tableHeader[0];

    dispatch(
      setSelectedField({
        tableName,
        fieldName: columnName,
        value,
      })
    );
  };
  return (
    <div className="h-[300px]  overflow-auto mt-4">
      <table className="border-2 w-full  border-[#0F172A]">
        <thead className="bg-[#0F172A] text-white">
          <tr>
            {tableData.table.tableHeader.map((tableItem, index) =>
              index === 0 ? (
                <th rowspan={2} className="mr-4 ">
                  {tableItem}
                </th>
              ) : (
                <th
                  className="mr-4 bg-[#0F172A] py-2 text-white border-2 border-white"
                  colSpan={3}
                  // className="mr-4"
                >
                  {tableItem}
                </th>
              )
            )}
          </tr>
          <tr>
            {tableData.table.tableData[0].map((tableItem) => (
              <th className="mr-4 text-white border-2 border-white bg-[#253D77]">
                {tableItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.table.tableData.map(
            (tableItem, index) =>
              index !== 0 && (
                <tr>
                  <td
                    className="py-2 px-4 border border-[#0F172A] cursor-pointer text-blue-500"
                    onClick={() => handleClick(tableItem[0])}
                  >
                    {tableItem[0]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[1]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[2]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[3]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[4]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[5]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[6]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[7]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[8]}
                  </td>
                  <td className="py-2 px-4 border border-[#0F172A]">
                    {tableItem[9]}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryAnalysisTableTwo;
