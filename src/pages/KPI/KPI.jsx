import AdminNavbar from "@/components/Admin_Navbar";
import SideMenu from "@/components/SideMenu";
import { useEffect, useState } from "react";

import TableSelection from "@/components/Slection_Panel/Tableselection";

import TableTwokpI from "@/components/kpIPopout/kpiTable2";
import Popout from "@/components/kpIPopout/kpiPopout";

import {  useSelector } from 'react-redux';

function KPI() {
  const [sideMenu, setsideMenu] = useState(false);

  const [popout, setPopout] = useState(true);

  const nAME = useSelector(state => state.selectpagekpi.name);
  console.log(nAME)

  const firstGrapDataKPI = [
    [
      "No of Leads",
      "49(4%)",
      "274(23%)",
      "25(2%)",
      "262(262%)",
      " 80(7%)",
      "506",
      "0",
      "1196(100%)",
    ],
    [
      "Intersted in Exchange",
      "6(4%)",
      "31(23%)",
      "25(2%)",
      "262(262%)",
      " 80(7%)",
      "506",
      "0",
      "147(100%)",
    ],
  ];
  const SecondGrapDataKPI = [
    [
      "No of Leads",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "33%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "Intersted in Exchange",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "33%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
  ];

  //for kpi follow

  const firstGrapDatakpiFollow = [
    [
      "1. No of Call Follow ups",
      "49(4%)",
      "274(23%)",
      "25(2%)",
      "262(262%)",
      " 80(7%)",
      "506",
      "0",
      "1196(100%)",
    ],
    [
      "2. No of Leads followed up by Calling",
      "6(4%)",
      "31(23%)",
      "25(2%)",
      "262(262%)",
      " 80(7%)",
      "506",
      "0",
      "147(100%)",
    ],
    [
      "3. Spoke to cutomer",
      "6(4%)",
      "31(23%)",
      "25(2%)",
      "262(262%)",
      " 80(7%)",
      "506",
      "0",
      "147(100%)",
    ],
    [
      "4. Busy/Switch off/Out of range",
      "6(4%)",
      "67(23%)",
      "4(2%)",
      "262(262%)",
      " 21(7%)",
      "777",
      "0",
      "567(100%)",
    ],
  ];
  const SecondGrapDatakpiFollow = [
    [
      "1.No of Home Visits Follow Up",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "33%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "2.No of Home Visits Done",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "33%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1%",
      "0",
      "0",
      "25(2%)",
      "0",
      "0",
      "0",
      "0",
      "0",
    ],
  ];


  

   const  mainheader =[
    "Total of all models"
];
  const  SubheaderFirst=[
      "Activity",
      "Digital",
      "Others",
      "Referal",
      "Tele-In",
      "Walk-In",
      "Walkin",
      "Total",
    ];
  
    const SunheaderTwo=[
      "DataCout",
      "DataCout",
      "DataCout",
      "DataCout",
      "DataCout",
      "DataCout",
      "DataCout",
      "DataCout",
    ];
  
  
   
   const  mainheadertwo=[
      "Grand",
     " Creta",
     "Verna",
     "EON",
     "New Santro",
     "ELITE i20",
     "XCENT",
     "GRAND NIOS",
     "Venue",
     "KONA",
];


const SubheaderFirsttwo=[
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
    "Activity",
    'Digital',
    'Others',
    "Referal",
    "Tele-In",
    'Walk-In',
    'Walkin',
    'Total',
];

const SunheaderTwo2=[
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
    "DataCout",
];
 
 
  


  useEffect(() => {
    setPopout(true);


    
  }, [nAME]);


  return (
    <>
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
  
      {popout ? (
        <div className="popout">
          <Popout setPopout={setPopout} popout={popout}></Popout>
        </div>
      ) : (
        <>
          <div className="flex w-[100vw] items-center justify-center mt-[5px]">
            <TableSelection></TableSelection>
          </div>
  
          {nAME === "KPI" ? (
            <div className="border-4 maintablelist border-stone-500 mt-4 mx-[5vw]">
        
            <TableTwokpI header={"Leads Received"} rowdata={firstGrapDataKPI} mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo}/>
           
            <TableTwokpI
              header={"Product wise Leads Received"}
              rowdata={SecondGrapDataKPI} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
           
             <TableTwokpI header={"Test Drive"} rowdata={firstGrapDataKPI} mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo}/>
            
             <TableTwokpI
              header={"Product wise Test Drive"}
              rowdata={SecondGrapDataKPI} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
            
            <TableTwokpI header={"Closed and Lost"} rowdata={firstGrapDataKPI} mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo} />
            
             <TableTwokpI
              header={"Product wise Closed and Lost"}
              rowdata={SecondGrapDataKPI} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
            
            <TableTwokpI header={"Booking Delivery Conversion Ratio"} rowdata={firstGrapDataKPI}  mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo}/>
          
             <TableTwokpI
              header={"Product wise Booking Delivery CR"}
              rowdata={SecondGrapDataKPI} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
            
            <TableTwokpI header={"Cash Vs Finance"} rowdata={firstGrapDataKPI} mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo} />
             
             <TableTwokpI
              header={"Product wise Cash Vs Finance"}
              rowdata={SecondGrapDataKPI} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
            
            <TableTwokpI header={"Exchange Penetration"} rowdata={firstGrapDataKPI}  mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo}/>
           
             <TableTwokpI
              header={"Product wise Exchange Penetration"}
              rowdata={SecondGrapDataKPI} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
          </div>
          ) : (
            <div className="border-4 maintablelist border-stone-500 mt-4 mx-[5vw]">
            <TableTwokpI header={"Call follow-ups"} rowdata={firstGrapDatakpiFollow}  mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo}/>
            <TableTwokpI
              header={"Product wise Call follow-ups"}
              rowdata={SecondGrapDatakpiFollow} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
             <TableTwokpI header={"Home Follow Ups"} rowdata={firstGrapDatakpiFollow}  mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo} />
             <TableTwokpI
              header={"Product wise Home Follow Ups"}
              rowdata={SecondGrapDatakpiFollow} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
            <TableTwokpI header={"Showroom Followups"} rowdata={firstGrapDatakpiFollow} mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo} />
             <TableTwokpI
              header={"Product wise Showroom Followups"}
              rowdata={SecondGrapDatakpiFollow} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
            <TableTwokpI header={"No.of Followups done and Delayed followups"} rowdata={firstGrapDatakpiFollow} mainheader={mainheader} SubheaderFirst={SubheaderFirst} SunheaderTwo={SunheaderTwo} />
             <TableTwokpI
              header={"Product wise Followups done and Delayed"}
              rowdata={SecondGrapDatakpiFollow} mainheader={mainheadertwo} SubheaderFirst={SubheaderFirsttwo} SunheaderTwo={SunheaderTwo2}
            />
           
          </div>
          )}
        </>
      )}
    </>
  );

    }
  




export default KPI;
