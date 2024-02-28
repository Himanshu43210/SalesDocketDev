import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import RegisterUserDetails from "./pages/RegisterUserDetails/RegisterUserDetails";
import Profile from "./pages/Profile/Profile";
import LostLeads from "./pages/LostLeads/LostLeads";
import BusinessTra from "./pages/businessTracker/businessTracker";
import ActiveLeads from "./pages/ActiveLeads/ActiveLeads";
import LeadsInDanger from "./pages/LeadsInDanger/LeadsInDanger";
import BookingAnalysis from "./pages/BookingAnalysis/BookingAnalysis";
import Closedleads from "./pages/Closedleads/ClosedLeads";
import DeliveryAnalysis from "./pages/DeliveryAnalysis/DeliveryAnalysis";
import AllLeads from "./pages/AllLeads/AllLeads";
import KPI from "./pages/KPI/KPI";
import FollowUp from "./pages/FollowUp/FollowUp";
import BusinessTrend from "./pages/BusinessTrend/BusinessTrend";
import DealerWise from "./pages/BusinessTrend/DealerWise";
import ModelWise from "./pages/BusinessTrend/ModelWise";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/" element={<ActiveLeads />}></Route>
          <Route path="/registeruser" element={<RegisterUser />}></Route>
          <Route
            path="/registeruserdetails"
            element={<RegisterUserDetails />}
          ></Route>

          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/lostleads" element={<LostLeads />}></Route>
          <Route path="/businessTra" element={<BusinessTra />}></Route>
          <Route path="/activeleads" element={<ActiveLeads />}></Route>
          <Route path="/leadsindanger" element={<LeadsInDanger />}></Route>
          <Route path="/bookinganalysis" element={<BookingAnalysis />}></Route>
          <Route path="/closedLead" element={<Closedleads />}></Route>
          <Route
            path="/deliveryanalysis"
            element={<DeliveryAnalysis />}
          ></Route>
          <Route path="/allleads" element={<AllLeads />}></Route>
          <Route path="/KPI" element={<KPI />}></Route>
          <Route path="/KPIfllow" element={<KPI />}></Route>
          <Route path="/followup" element={<FollowUp />}></Route>
         <Route path="/BusinessTrend" element={<BusinessTrend />}></Route>
          <Route
            path="/BusinessTrend/DealerWise"
            element={<DealerWise />}
          ></Route>
          <Route
            path="/BusinessTrend/ModelWise"
            element={<ModelWise />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
