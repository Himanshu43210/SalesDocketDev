import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../store/slices/kpireducer";

function SideMenu({ setsideMenu, sideMenu }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHome = () => {
    setsideMenu(!sideMenu);
    navigate("/home");
  };

  // const handleProfile = () => {
  //   setsideMenu(!sideMenu);
  //   navigate("/profile");
  // };

  // const handleRegister = () => {
  //   setsideMenu(!sideMenu);
  //   navigate("/registeruser");
  // };

  const handleLostLeads = () => {
    setsideMenu(!sideMenu);
    navigate("/lostleads");
  };
  const handlebt = () => {
    setsideMenu(!sideMenu);
    navigate("/businessTra");
  };
  const handleActiveLeads = () => {
    setsideMenu(!sideMenu);
    navigate("/activeleads");
  };
  const handleLeadsInDanger = () => {
    setsideMenu(!sideMenu);
    navigate("/leadsindanger");
  };
  const handleBookingAnalysis = () => {
    setsideMenu(!sideMenu);
    navigate("/bookinganalysis");
  };
  const handlecloseLeads = () => {
    setsideMenu(!sideMenu);
    navigate("/closedLead");
  };
  const handleDelivery = () => {
    setsideMenu(!sideMenu);
    navigate("/deliveryanalysis");
  };
  const handleAllLeads = () => {
    setsideMenu(!sideMenu);
    navigate("/allleads");
  };
  const handlekpi = () => {
    setsideMenu(!sideMenu);
    dispatch(setName("KPI"));
    navigate("/KPI");
  };
  const handlekpiFollow = () => {
    setsideMenu(!sideMenu);
    dispatch(setName("KPIfollow"));
    navigate("/KPIfllow");
  };
  const handleFollowUp = () => {
    setsideMenu(!sideMenu);
    navigate("/followup");
  };
  const handlBeusinessTrend = () => {
    setsideMenu(!sideMenu);
    navigate("/BusinessTrend");
  };

  return (
    <>
      <div
        className={
          "menu fixed pt-20  left-[-200px] top-0 w-[200px] h-full bg-slate-300 z-50 flex items-center justify-center transition-all duration-950 ease-in " +
          (sideMenu && "left-[0]")
        }
      >
        <ul className="leading-tight list-none">
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleHome}
          >
            Home
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleFollowUp}
          >
            FollowUp
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handlebt}
          >
            Business Tracker
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handlBeusinessTrend}
          >
            Business Trend
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleLostLeads}
          >
            Lost
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleActiveLeads}
          >
            Active
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleLeadsInDanger}
          >
            Danger
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleBookingAnalysis}
          >
            Booking
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handlecloseLeads}
          >
            Close Leads
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleDelivery}
          >
            Delivery
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleAllLeads}
          >
            All Leads
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handlekpi}
          >
            KPI
          </li>
          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handlekpiFollow}
          >
            KPI Follow
          </li>
          {/* <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleProfile}
          >
            Profile
          </li>

          <li
            className="text-[20px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleRegister}
          >
            Register User
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
