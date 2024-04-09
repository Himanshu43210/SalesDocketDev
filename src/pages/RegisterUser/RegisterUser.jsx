import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/Admin_Navbar";
import SideMenu from "../../components/SideMenu";
import axios from "axios";
import SuccessBox from "../../components/RegisterUser/SuccessBox";

const RegisterUser = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    companyId: "",
    storeId: "",
    city: "",
    address: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [sucBox, setSucBox] = useState(false);
  const [failBox, setFailBox] = useState(false);
  const [companyData, setCompanyData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsTableLoaded(true);
    const token = sessionStorage.getItem("authToken");

    console.log(formData);

    if (formData.email.length <= 5) {
      setErrMsg("Invaild email address, enter a vaild email > 5 chars.");
      setFailBox(true);
      setIsTableLoaded(false);
      return;
    }

    if (formData.password.length <= 5) {
      setErrMsg("Password size is too small, must be more than 5.");
      setFailBox(true);
      setIsTableLoaded(false);
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      setErrMsg("Entered invalid mobile number, must be 10-digits.");
      setFailBox(true);
      setIsTableLoaded(false);
      return;
    }

    const data = JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      companyId: formData.companyId,
      role: formData.role,
      storeId: formData.storeId,
      city: formData.city,
      address: formData.address,
    });

    console.log(data);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${
        import.meta.env.VITE_REACT_APP_ENDPOINT
      }/api/userregistry/register`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setErrMsg("Successfully added new user");
        setSucBox(true);
        setIsTableLoaded(false);
        navigate("/registeruserdetails");
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Failed to add new user, " + error.response.data.msg);
        setFailBox(true);
        setIsTableLoaded(false);
      });
  };

  return (
    <div className="min-h-screen  pb-8 bg-[#F5F4F9]">
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <SideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      <SuccessBox
        sucBox={sucBox}
        failBox={failBox}
        errMsg={errMsg}
        setFailBox={setFailBox}
        setSucBox={setSucBox}
      />
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 0px 10px, rgba(0, 0, 0, 0.1) 0px 5px 12px",
        }}
        className="items-center bg-white max-w-[900px] flex py-8 mx-auto mt-4 justify-center flex-col"
      >
        <div className="flex flex-col w-[900px]">
          <div className="flex flex-col gap-2 pb-2 mb-6 ml-10 mr-10 border-b-2">
            <p className="text-4xl font-bold">Register User</p>
            <p className="text-lg">All fields marked with * are required</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10 ml-10">
            <button
              onClick={() => navigate("/registeruserdetails")}
              className="font-medium text-sm text-white p-3 rounded bg-[#0F172A]"
            >
              View Details
            </button>
          </div>
          <form className="flex flex-col gap-4 ml-10">
            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">First name*</span>
              <input
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                // value={formData.firstName}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Last name</span>
              <input
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                // value={formData.lastName}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Email*</span>
              <input
                name="email"
                id="email"
                placeholder="Enter your email address"
                // value={formData.email}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none "
                type="email"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Password*</span>
              <input
                name="password"
                id="password"
                placeholder="Enter new password (min. 6 characters)"
                // value={formData.password}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none "
                type="password"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2 ">
              <span className="text-xl font-medium">Mobile Number*</span>
              <input
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter 10-digit mobile number"
                // value={formData.phoneNumber}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="number"
                required
              />
            </label>

            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Company Name*</span>
              <select
                id="companyId"
                name="companyId"
                // value={formData.companyId}
                className="px-2 py-2 text-base border-2 rounded-lg outline-none"
                // onChange={handleChange}
                // required
              >
                <option value="">None</option>
                {companyData.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.companyName}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Role*</span>
              <input
                name="role"
                id="role"
                // value={formData.role}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">City</span>
              <input
                name="city"
                id="city"
                placeholder="Enter your city name"
                // value={formData.city}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Adddress</span>
              <input
                name="address"
                id="address"
                placeholder="Enter your full address"
                // value={formData.address}
                // onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
              />
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="font-medium text-sm text-white p-3 rounded bg-[#0F172A]"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
