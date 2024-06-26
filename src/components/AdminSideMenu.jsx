import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminSideMenu({ setsideMenu, sideMenu }) {
  const navigate = useNavigate();

  const handleProfile = () => {
    setsideMenu(!sideMenu);
    navigate("/profile");
  };

  const handleRegister = () => {
    setsideMenu(!sideMenu);
    navigate("/register");
  };

  const handleStoreDetails = () => {
    setsideMenu(!sideMenu);
    navigate("/branchDetails");
  };

  const handleUserDetails = () => {
    setsideMenu(!sideMenu);
    navigate("/userDetails");
  };

  const handleCompanyDetails = () => {
    setsideMenu(!sideMenu);
    navigate("/companyDetails");
  };

  const handleStoreListing = () => {
    setsideMenu(!sideMenu);
    navigate("/branchlisting");
  };
  const handleCompanyListing = () => {
    setsideMenu(!sideMenu);
    navigate("/companylisting");
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div
        className={
          "menu fixed left-[-200px] top-0 w-[200px] h-full bg-slate-300 z-50 flex items-center justify-center transition-all duration-950 ease-in " +
          (sideMenu && "left-[0]")
        }
      >
        <ul className="list-none pl-[6%] pt-[6%]">
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleRegister}
          >
            Register User
          </li>
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleUserDetails}
          >
            User Details
          </li>
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleStoreListing}
          >
            Branch Listing
          </li>
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleStoreDetails}
          >
            Branch Details
          </li>
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleCompanyListing}
          >
            Company Listing
          </li>
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleCompanyDetails}
          >
            Company Details
          </li>
          <li
            className="text-[22px] font-[300] cursor-pointer mb-[2vh]"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdminSideMenu;
