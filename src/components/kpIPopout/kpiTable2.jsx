
function TableTwokpI({header,rowdata ,mainheader,SubheaderFirst,SunheaderTwo}) {
    // const mainheader=[
    //       "Grand",
    //      " Creta",
    //      "Verna",
    //      "EON",
    //      "New Santro",
    //      "ELITE i20",
    //      "XCENT",
    //      "GRAND NIOS",
    //      "Venue",
    //      "KONA",
    // ]

    // const SubheaderFirst=[
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    //     "Activity",
    //     'Digital',
    //     'Others',
    //     "Referal",
    //     "Tele-In",
    //     'Walk-In',
    //     'Walkin',
    //     'Total',
    // ]

    // const SunheaderTwo=[
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    //     "DataCout",
    // ]

  return (
    <>
      <div className="h-[300px]  overflow-auto   border-2 border-stone-500 px-2 py-2">

      <div className="pannel h-[30px] w-full bg-[#ffffe0] mb-[2vh] rounded-sm">
              <h2 className="text-lg font-semibold ml-[2vw]">{header}</h2>
            </div>
        <table className=" w-full  border-[#4d4d4fbb] border-[0.2rem]">
          <thead className="bg-[#0F172A] text-white">
            <tr>
              <th rowspan={3} className="mr-4 bg-[#90A4C9] text-black border-2 border-white">Parameter</th>
              {
                mainheader.map((value,index)=>(
                    <th colSpan={8} className="mr-4 bg-[#DF8C7A] text-black border-2 border-white" key={index}>{value}</th>
                ))
              }
            </tr>
            <tr>
              {
                SubheaderFirst.map((value,index)=>(
                    <th className="mr-4 bg-[#B1E5E1] text-black border-2 border-white" key={index}>{value}</th>
                ))
              }
            </tr>
            <tr>
              {
                SunheaderTwo.map((value,index)=>(
                    <th className="mr-4 bg-[#A3E8BB] text-black border-2 border-white" key={index}>{value}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {rowdata.map((value, index) => (
              <tr key={index}>
                {value.map((item, i) => (
                  <td key={i} className="text-center border-2 border-[#E2E2E2]">{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableTwokpI;
