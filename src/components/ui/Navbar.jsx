import AdminNavbar from "../../components/Admin_Navbar";
import SideMenu from "../../components/SideMenu";

const Navbar = ({ setsideMenu, sideMenu }) => {
  return (
    <div className="navbar">
      <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
      <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
    </div>
  );
};

export default Navbar;
