import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/Admin_Navbar";
import AdminSideMenu from "../../components/AdminSideMenu";
import { AiOutlineFile } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import styles from "../CompanyDetails/CompanyListingDetails.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";
const CompanyListing = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [companyCode, setCompnayCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [remarks, setRemarks] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [sucBox, setSucBox] = useState(false);
  const [failBox, setFailBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e) => {
    const files = e.target.files;

    setAttachedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // return;
    const userToken = sessionStorage.getItem("authToken");
    let data = JSON.stringify({
      companyName: companyName,
      uniqueId: uniqueId,
      company_code: companyCode,
      contact_number: contactNumber,
      address: address,
      gst_number: gstNumber,
      pan_number: panNumber,
      remarks: remarks,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/company/create`,
      headers: {
        Authorization: userToken,
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
        setAttachedFiles([])
        setCompanyName("")
        setUniqueId("");
        setCompnayCode("");
        setContactNumber("");
        setAddress("");
        setGstNumber("");
        setPanNumber("");
        setRemarks("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg(error.response.data.msg);
        setSucBox(true);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className="navbar">
        <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
        <AdminSideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
      </div>
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
            <p className="text-4xl font-bold">Company Listing</p>
            <p className="text-lg">All fields marked with * are required</p>
          </div>
          <div className="flex flex-wrap gap-2 ml-10 mb-10">
            <Link
              to="/companylistingdetails"
              className="font-medium text-sm text-white p-3 rounded bg-[#EC2752]"
            >
              View Detail
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="ml-10 flex flex-col gap-4">
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Name*</span>
              <input
                className="border-2 px-2 py-2 rounded-lg outline-none"
                type="text"
                value={companyName}
                required={true}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Unique Id*</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none "
                type="text"
                value={uniqueId}
                required={true}
                onChange={(e) => setUniqueId(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Company Code*</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none "
                type="text"
                value={companyCode}
                required={true}
                onChange={(e) => setCompnayCode(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Adddress</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Contact Number</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">GST Number</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">PAN Number</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Remarks</span>
              <input
                className="border-2 px-2 py-2 rounded-lg  outline-none"
                type="text"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Attach Documents</span>
              <input
                className=" py-2 rounded-lg w-[250px] outline-none"
                onChange={handleFileUpload}
                type="file"
                multiple
              />
            </div>

            <div className="flex flex-wrap w-[90%] gap-2">
              {attachedFiles.length > 0 &&
                attachedFiles.map((file, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <AiOutlineFile size={80} />
                    <p key={index}>{file.name}</p>
                  </div>
                ))}
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

export default CompanyListing;
