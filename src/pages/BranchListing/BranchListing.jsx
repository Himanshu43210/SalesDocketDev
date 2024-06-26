import React, { useEffect, useState } from "react";
import styles from "./BranchListing.module.css";
import AdminNavbar from "../../components/Admin_Navbar";
import AdminSideMenu from "../../components/AdminSideMenu";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import LoadingSpinner from "../../components/LoadingSpinner";

const BranchListing = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    branchName: "",
    region: "",
    email: "",
    uniqueId: "",
    contactNumber: "",
    address: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [sucBox, setSucBox] = useState(false);
  const [failBox, setFailBox] = useState(false);

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
    setIsLoading(true);
    const token = sessionStorage.getItem("authToken");

    console.log(formData);

    if (formData.email.length <= 5) {
      console.log("email size is too small, must be more than 5");
      setIsTableLoaded(false);
      return;
    }

    if (formData.contactNumber.length <= 5) {
      console.log("phone number is invalid");
      setIsTableLoaded(false);
      return;
    }

    let data = JSON.stringify({
      branchName: formData.branchName,
      uniqueId: formData.uniqueId,
      email: formData.email,
      contact_number: formData.contactNumber,
      region: formData.region,
      address: formData.address,
    });

    console.log(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/branch/create`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setErrMsg(response.data.msg);
        setSucBox(true);
        setFormData({
          branchName: "",
          region: "",
          email: "",
          uniqueId: "",
          contactNumber: "",
          address: "",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Failed to add branch");
        setFailBox(true);
        setIsLoading(false);
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
        <div className="flex flex-col  w-[900px]">
          <div className="mb-6 flex flex-col gap-2 border-b-2 mr-10 pb-2 ml-10">
            <p className="text-4xl font-bold">Branch Listing</p>
            <p className="text-lg">All fields marked with * are required</p>
          </div>

          <div className="flex flex-wrap gap-2 ml-10 mb-10">
            <button
              onClick={() => navigate("/branchdetails")}
              className="font-medium text-sm text-white p-3 rounded bg-[#EC2752]"
            >
              View Detail
            </button>
          </div>
          <form className="ml-10 flex flex-col gap-4" onSubmit={submitHandler}>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Branch Name*</span>
              <input
                id="branchName"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg outline-none"
                type="text"
                required={true}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Unique Id*</span>
              <input
                id="uniqueId"
                name="uniqueId"
                value={formData.uniqueId}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none "
                type="text"
                required={true}
              />
            </div>

            <div className="flex flex-col w-[70%] gap-2 ">
              <span className="font-medium text-xl">Email*</span>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="email"
                required={true}
              />
            </div>

            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Contact Number*</span>
              <input
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="number"
                required={true}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Region*</span>
              <input
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                required={true}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Adddress*</span>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                required={true}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className={`flex flex-row items-center justify-start  text-white rounded-md p-3 h-[40px] font-bold bg-[#ec2752] ${
                  isLoading && "opacity-[.9]"
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex flex-row text-white items-center -ml-4 mr-2">
                    <div className="scale-[0.4]">
                      <LoadingSpinner />
                    </div>
                    <div className="text-white -ml-4">Loading</div>
                  </div>
                ) : (
                  <div>Submit Form</div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BranchListing;
