import { setSelectedField } from "../../store/slices/selectedFieldSlice";
import React from "react";
import { useDispatch } from "react-redux";
const tableValues = [
  "Feb2024",
  "1196",
  "-16.6",
  "1434",
  "11.0",
  "1077",
  "1196",
  "-16.6",
  "1434",
  "11.0",
  "1077",
  "1196",
  "-16.6",
  "1434",
  "11.0",
  "1077",
  "1196",
  "-16.6",
  "1434",
  "11.0",
  "1077",
  "1196",
  "-16.6",
  "1434",
  "11.0",
  "1077",
  "1196",
  "-16.6",
  "1434",
  "11.0",
  "1077",
];

const header1 = [
  "Selection",
  "Enquiry",
  "Walkins",
  "Closed",
  "Booking",
  "Delivery",
  "Lost",
];

const header2 = [
  "EPR_Month",
  "FTM_Enquiry",
  "LMTD_Enquiry_Percentage",
  "LMTD_Enquiry",
  "LYMTD_Enquiry_Percentage",
  "LYMTD_Enquiry",
  "FTM_Walkins",
  "LMTD_Walkins_Percentage",
  "LMTD_Walkins",
  "LYMTD_Walkins_Percentage",
  "LYMTD_Walkins",
  "FTM_Closed",
  "LMTD_Closed_Percentage",
  "LMTD_Closed",
  "LYMTD_Closed_Percentage",
  "LYMTD_Closed",
  "FTM_Booking",
  "LMTD_Booking_Percentage",
  "LMTD_Booking",
  "LYMTD_Booking_Percentage",
  "LYMTD_Booking",
  "FTM_Delivery",
  "LMTD_Delivery_Percentage",
  "LMTD_Delivery",
  "LYMTD_Delivery_Percentage",
  "LYMTD_Delivery",
  "FTM_Lost",
  "LMTD_Lost_Percentage",
  "LMTD_Lost",
  "LYMTD_Lost_Percentage",
  "LYMTD_Lost",
];

const BTrackerMonthWiseTable = () => {
  const dispatch = useDispatch();
  const handleClick = (tableItem) => {
    console.log("items", tableItem);
    dispatch(
      setSelectedField({
        tableName: "Month Wise Table",
        fieldName: "epr_monthname",
        value: tableItem, 
      })
    );
  };
  return (
    <div className="h-[150px]  overflow-auto mt-4">
      <table className="border-2 w-full  border-[#0F172A]">
        <thead className="bg-[#0F172A] text-white">
          <tr>
            {header1.map((tableItem, index) =>
              index === 0 ? (
                <th className="mr-4 bg-[#0F172A] text-white border-2 border-white px-[4px]">
                  {tableItem}
                </th>
              ) : (
                <th
                  colSpan={5}
                  className="mr-4 bg-[#0F172A] text-white border-2 border-white"
                >
                  {tableItem}
                </th>
              )
            )}
          </tr>
          <tr>
            {header2.map((tableItem, index) => (
              <th
                key={index}
                className="mr-4 bg-[#253d77] text-white border-2 border-white text-[14px] px-[2px]"
              >
                {tableItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tableValues.map((tableItem, index) =>
              index === 0 ? (
                <td
                  onClick={() => handleClick(tableItem)}
                  key={index}
                  className="cursor-pointer text-center border-2 border-[#E2E2E2] text-blue-400"
                >
                  {tableItem}
                </td>
              ) : (
                <td
                  //   className="text-blue-500 cursor-pointer"
                  // onClick={() => handleClick(tableItem[0])}
                  className="text-center border-2 border-[#E2E2E2]"
                >
                  {tableItem}
                </td>
              )
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BTrackerMonthWiseTable;
