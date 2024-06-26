import React, { useEffect, useState } from "react";
import styles from "./RegisterUser.module.css";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/Admin_Navbar";
import AdminSideMenu from "../../components/AdminSideMenu";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

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
    role: "",
    branchId: "",
    city: "",
    address: "",
  });
  console.log(formData)

  const role=['Super Admin','Admin Manager','Technician','Sale User'];

  const [errMsg, setErrMsg] = useState("");
  const [sucBox, setSucBox] = useState(false);
  const [failBox, setFailBox] = useState(false);

  //storefilter
  const [branchData, setBranchData] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  const getBranch = () => {
    setIsTableLoaded(true);
    const token = sessionStorage.getItem("authToken");

    let config = {
      method: "get",
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/branch/findall`,
      headers: { Authorization: token },
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.result);
        const storeNamesArray = response.data.result.map((branch) => ({
          branchName: branch.branchName,
          _id: branch.id,
          region: branch.region,
        }));
        setBranchData(storeNamesArray);
        setIsTableLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setIsTableLoaded(false);
      });
  };

  const getCompany = () => {
    setIsTableLoaded(true);
    const token = sessionStorage.getItem("authToken");

    let config = {
      method: "get",
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/company/findall`,
      headers: { Authorization: token },
    };

    axios.request(config)
      .then((response) => {
        const storeNamesArray = response.data.result.map((company) => ({
          companyName: company.companyName,
          _id: company.id,
        }));
        console.log(storeNamesArray);
        setCompanyData(storeNamesArray);
        setIsTableLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setIsTableLoaded(false);
      });
  };

  useEffect(() => {
    getBranch();
    getCompany();
  }, []);

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

    if(formData.email.length <= 5){
      setErrMsg("Invaild email address, enter a vaild email > 5 chars.");
      setFailBox(true);
      setIsTableLoaded(false);
      return;
    }

    if(formData.password.length <= 5){
      setErrMsg("Password size is too small, must be more than 5.");
      setFailBox(true);
      setIsTableLoaded(false);
      return;
    }

    if(formData.phoneNumber.length !== 10){
      setErrMsg("Entered invalid mobile number, must be 10-digits.");
      setFailBox(true);
      setIsTableLoaded(false);
      return;
    }

    let data = JSON.stringify({
      "firstName": formData.firstName,
      "lastName": formData.lastName,
      "email": formData.email,
      "password": formData.password,
      "phoneNumber": formData.phoneNumber,
      "companyId": formData.companyId,
      "role": formData.role,
      "branchId": formData.branchId,
      "city": formData.city,
      "address": formData.address,
    });

    console.log(data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/user/create`,
      headers: { 
        'Authorization': token, 
        'Content-Type': 'application/json', 
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      setErrMsg("Successfully added new user");
      setSucBox(true);
      setIsTableLoaded(false);
      navigate("/userdetails");
    })
    .catch((error) => {
      console.log(error);
      setErrMsg("Failed to add new user, "+ error.response.data.msg);
      setFailBox(true);
      setIsTableLoaded(false);
    });
  };

  return (
    <div className="min-h-screen  pb-8 bg-[#F5F4F9]">
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <AdminSideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
      {isTableLoaded && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <BeatLoader color={"#EC2752"} loading={isTableLoaded} size={15} />
        </div>
      )}
      {(sucBox || failBox) && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div
            className={`${styles.err_mod_box} ${
              sucBox ? "text-green-500" : "text-[#EC2752]"
            }`}
          >
            {sucBox ? (
              <IoIosCheckmarkCircle
                className={sucBox ? "text-green-500" : "text-[#EC2752]"}
                size={90}
              />
            ) : (
              <IoIosCloseCircle
                className={sucBox ? "text-green-500" : "text-[#EC2752]"}
                size={90}
              />
            )}
            <h6 className={sucBox ? "text-green-500" : "text-[#EC2752]"}>
              {sucBox ? "Success!" : "Error!"}
            </h6>
            <p className="text-slate-500">{errMsg}</p>
            <button
              onClick={() => {
                setSucBox(false);
                setFailBox(false);
              }}
              className={
                sucBox ? "bg-green-500 text-white" : "bg-[#EC2752] text-white"
              }
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 0px 10px, rgba(0, 0, 0, 0.1) 0px 5px 12px",
        }}
        className="items-center bg-white max-w-[900px] flex py-8 mx-auto mt-4 justify-center flex-col"
      >
        <div className="flex flex-col w-[900px]">
          <div className="mb-6 flex flex-col gap-2 border-b-2 mr-10 pb-2 ml-10">
            <p className="text-4xl font-bold">Register User</p>
            <p className="text-lg">All fields marked with * are required</p>
          </div>
          <div className="flex flex-wrap gap-2 ml-10 mb-10">
            <button onClick={() => navigate("/userdetails") } className="font-medium text-sm text-white p-3 rounded bg-[#EC2752]">
              View Details
            </button>
          </div>
          <form className="ml-10 flex flex-col gap-4" onSubmit={submitHandler}>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">First name*</span>
              <input
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg outline-none"
                type="text"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Last name</span>
              <input
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg outline-none"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Email*</span>
              <input
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none "
                type="email"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Password*</span>
              <input
                name="password"
                id="password"
                placeholder="Enter new password (min. 6 characters)"
                value={formData.password}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none "
                type="password"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2 ">
              <span className="font-medium text-xl">Mobile Number*</span>
              <input
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter 10-digit mobile number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="number"
                required
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Company Name*</span>
              <select
                id="companyId"
                name="companyId"
                value={formData.companyId}
                className="outline-none text-base border-2 px-2 py-2 rounded-lg"
                onChange={handleChange}
                required
              >
                <option value="">None</option>
                {companyData.map((item) => (
                 <option key={item._id} value={item._id}>{item.companyName}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Branch Name*</span>
              <select
                id="branchId"
                name="branchId"
                value={formData.branchId}
                className="outline-none text-base border-2 px-2 py-2 rounded-lg"
                onChange={handleChange}
                required
              >
                <option value="">None</option>
                {branchData.map((item) => (
                  <option key={item._id} value={item._id}>{item.branchName+ ", " + item.region}</option>
                ))}
              </select>
            </label>
            {/* <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Role*</span>
              <input
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                required
              />
            </label> */}
            {/* //role */}
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Role*</span>
              <select
                id="role"
                name="role"
                value={formData.role}
                className="outline-none text-base border-2 px-2 py-2 rounded-lg"
                onChange={handleChange}
                required
              >
                <option value="">None</option>
                {role.map((item) => (
                 <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">City</span>
              <input
                name="city"
                id="city"
                placeholder="Enter your city name"
                value={formData.city}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Adddress</span>
              <input
                name="address"
                id="address"
                placeholder="Enter your full address"
                value={formData.address}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
              />
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="font-medium text-sm text-white p-3 rounded bg-[#EC2752]"
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
