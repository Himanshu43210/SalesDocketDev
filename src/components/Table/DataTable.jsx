import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedField } from "../../store/slices/selectedFieldSlice";

const DataTable = ({ tableName, columns, data, showLink = "true" }) => {
  const dispatch = useDispatch();
  const printValue = useSelector((state) => state.selectedField);
  const handleClick = (value, columnName) => {
    console.log("Clicked on:", value);
    dispatch(
      setSelectedField({
        tableName,
        fieldName: columnName,
        value,
      })
    );
  };

  console.log("asdasd", printValue);
  return (
    <div className="h-[300px]  overflow-auto mt-4">
      <table className="border-2 w-full  border-[#0F172A]">
        <thead className="bg-[#0F172A] text-white">
          <tr>
            {columns.map((column, index) => (
              <th
                className="py-2 px-4 border border-[#0F172A] text-left"
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-2 px-4 border border-[#0F172A] ${
                    showLink === "true" && colIndex === 0
                      ? "cursor-pointer text-blue-500"
                      : ""
                  }`}
                  onClick={
                    colIndex === 0
                      ? () => handleClick(row[column], column)
                      : null
                  }
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
