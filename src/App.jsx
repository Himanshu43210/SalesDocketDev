import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
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
import FollowUpPending from "./pages/FollowUp/FollowUpPending";
import TodaysUniqueFollowUp from "./pages/FollowUp/TodaysUniqueFollowUp";
import NonUniqueFollowUpToday from "./pages/FollowUp/NonUniqueFollowUpToday";
import FollowUpNonUniqueMonth from "./pages/FollowUp/FollowUpNonUniqueMonth";
import FollowUpUniqueMonth from "./pages/FollowUp/FollowUpUniqueMonth";
import BusinessTrend from "./pages/BusinessTrend/BusinessTrend";
import DealerWise from "./pages/BusinessTrend/DealerWise";
import ModelWise from "./pages/BusinessTrend/ModelWise";
function App() {
  return (
    <>
      <Router>
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
          <Route path="/followup/pending" element={<FollowUpPending />}></Route>
          <Route
            path="/followup/todaysuniquefollowup"
            element={<TodaysUniqueFollowUp />}
          ></Route>
          <Route
            path="/followup/nouniquefollowupstoday"
            element={<NonUniqueFollowUpToday />}
          ></Route>
          <Route
            path="/followup/followupnonuniquemonth"
            element={<FollowUpNonUniqueMonth />}
          ></Route>
          <Route
            path="/followup/followupuniquemonth"
            element={<FollowUpUniqueMonth />}
          ></Route>
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
      </Router>
    </>
  );
}

export default App;
