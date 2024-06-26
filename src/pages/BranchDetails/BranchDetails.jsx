import styles from "./BranchListingTable.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { BeatLoader } from "react-spinners";
import {
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
  IoMdAdd,
  IoMdSearch,
} from "react-icons/io";
import { IoRefresh } from "react-icons/io5";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { FaDownload } from "react-icons/fa6";
import AdminNavbar from "../../components/Admin_Navbar";
import AdminSideMenu from "../../components/AdminSideMenu";
import BranchEdit from "../../components/BranchEdit/BranchEdit";
import { useNavigate } from "react-router-dom";

const BranchDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const [sideMenu, setsideMenu] = useState(false);
  const [branchEditData, setBranchEditData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [editBoxOpen, setEditBoxOpen] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [selectedStr, setSelectedStr] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [sucBox, setSucBox] = useState(false);
  const [failBox, setFailBox] = useState(false);
  const [confBox, setConfBox] = useState(false);
  const [file, setFile] = useState(null);

  const getData = () => {
    setIsTableLoaded(true);
    const token = sessionStorage.getItem("authToken");

    let config = {
      method: "get",
      url: `${
        import.meta.env.VITE_REACT_APP_ENDPOINT
      }/branch/findall?page=${curPage}&limit=10`,
      headers: { Authorization: token },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.result);
        setData(response.data.result);
        setIsTableLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Failed to load data");
        setFailBox(true);
        setIsTableLoaded(false);
      });
  };

  const getDataBySearch = () => {
    setIsTableLoaded(true);
    if (searchValue === "") {
      setIsTableLoaded(false);
      setErrMsg("Search Box is empty");
      setFailBox(true);
      return;
    }
    const LoggedInUser = JSON.parse(sessionStorage.getItem("profile"));
    const token = sessionStorage.getItem("authToken");

    let config = {
      method: "get",
      url: `${
        import.meta.env.VITE_REACT_APP_ENDPOINT
      }/branch/findall?page=${0}&limit=999&search=${searchValue}`,
      headers: { Authorization: token },
    };

    console.log(config);
    axios
      .request(config)
      .then((response) => {
        console.log(response.data.result);
        setData(response.data.result);
        setIsTableLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Failed to load data");
        setFailBox(true);
        setIsTableLoaded(false);
      });
  };

  useEffect(() => {
    if (editSuccess) {
      if (searchValue === "") {
        getData();
      } else {
        getDataBySearch();
      }
      setErrMsg("Succesfully updated branch details");
      setSucBox(true);
      setEditSuccess(false);
      setEditBoxOpen(false);
    }
  }, [editSuccess]);

  const editHandler = (branchData) => {
    console.log(branchData);
    setBranchEditData(branchData);
    setEditBoxOpen(true);
  };

  const deleteConfHandler = (branchID) => {
    setSelectedStr(branchID);
    setConfBox(true);
  };

  const deleteHandler = (branchID) => {
    setIsTableLoaded(true);
    setConfBox(false);
    console.log(branchID)
    const LoggedInUser = JSON.parse(sessionStorage.getItem("profile"));
    const token = sessionStorage.getItem("authToken");
    let data = JSON.stringify({
      "branchId" : branchID
    });
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/branch/delete`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setErrMsg("Succesfully deleted store - " + branchID);
        setSucBox(true);
        if (searchValue === "") {
          getData();
        } else {
          getDataBySearch();
        }
        setIsTableLoaded(false);
      })
      .catch((error) => {
        console.log(error);
        setErrMsg("Failed to deleted branch");
        setFailBox(true);
        setIsTableLoaded(false);
      });
  };

  useEffect(() => {
    getData();
  }, [curPage]);

  const handleSearchClick = () => {
    getDataBySearch();
  };

  const handleSearchClear = () => {
    setSearchValue("");
    getData();
  };

  const downloadExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const formattedData = data.map((item) => {
      return {
        "Date Created": new Date(item.createdAt).toLocaleDateString("en-GB"),
        "Branch Name": item?.branchName,
        "Branch Unique Id": item?.uniqueId,
        "Branch Email": item.email,
        "Branch Phone Number": item.contactNumber,
        Region: item.region,
        Address: item.address,
      };
    });

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const dataFile = new Blob([excelBuffer], { type: fileType });
    saveAs(dataFile, "Branch_Data_" + curPage + fileExtension);
  };

  const nextHandler = () => {
    setIsTableLoaded(true);
    if (data.length >= 10 && searchValue === "") {
      const temp = curPage + 1;
      setCurPage(temp);
    } else {
      setIsTableLoaded(false);
    }
  };

  const prevHandler = () => {
    setIsTableLoaded(true);
    if (curPage !== 0 && searchValue === "") {
      const temp = curPage - 1;
      setCurPage(temp);
    } else {
      setIsTableLoaded(false);
    }
  };

  return (
    <div className={`${styles.pickedup_page}`}>
      {editBoxOpen && (
        <div className={`${styles.edit_page}`}>
          <BranchEdit
            branchData={branchEditData}
            setEditBoxOpen={setEditBoxOpen}
            setEditSuccess={setEditSuccess}
          />
        </div>
      )}
      <div className="flex items-center border-b-2 w-screen h-16 py-4 bg-white HEADER ">
        <div className="navbar">
          <AdminNavbar setsideMenu={setsideMenu} sideMenu={sideMenu} />
          <AdminSideMenu setsideMenu={setsideMenu} sideMenu={sideMenu} />
        </div>
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
      {confBox && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div
            className={`${styles.err_mod_box} ${
              sucBox ? "text-green-500" : "text-[#EC2752]"
            }`}
          >
            {/* <IoIosCheckmarkCircle className={successMod ? "text-green-500" : "text-[#EC2752]"} size={90}/> */}
            <h6 className={sucBox ? "text-green-500" : "text-[#EC2752]"}>
              Confirmation!
            </h6>
            <p className="text-slate-500">
              Do you want to delete branch {" " + selectedStr + " "} ?
            </p>
            <div className="flex flex-row gap-2">
              <button
                onClick={() => deleteHandler(selectedStr)}
                className={"bg-[#EC2752] text-white"}
              >
                Okay
              </button>
              <button
                onClick={() => {
                  setConfBox(false), setIsTableLoaded(false);
                }}
                className="bg-white text-[#EC2752]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isTableLoaded && (
        <div className="fixed top-0 left-0 z-49 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <BeatLoader color={"#EC2752"} loading={isTableLoaded} size={15} />
        </div>
      )}

      <div className="m-2 flex flex-col gap-2 items-center w-[100%]">
        <div className="flex gap-2 items-center justify-center outline-none mt-5 w-[100%]">
          <button
            className={`${styles.bulkdown_button}`}
            onClick={() => {
              navigate("/branchlisting");
            }}
          >
            <IoMdAdd /> Add branch
          </button>
          <div className={`${styles.search_bar_wrap}`}>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className="text-sm"
              type="text"
              placeholder="Search Branch Name/Email/Id/Region"
              value={searchValue}
            />
            <IoMdSearch onClick={handleSearchClick} size={25} />
          </div>
          <div className={styles.icons_box}>
            <IoRefresh onClick={handleSearchClear} className="" size={25} />
          </div>
          <button
            className={`${styles.bulkdown_button}`}
            onClick={downloadExcel}
          >
            <FaDownload /> Bulk Download
          </button>
        </div>
      </div>
      <div className={`${styles.pd_cont}`}>
        <div className="m-2 overflow-x-auto md:m-5">
          <table className="w-full border border-[#EC2752]">
            <thead className="bg-[#EC2752] text-white">
              <tr>
                <th className="p-2 text-sm md:p-3 md:text-base">Action</th>
                <th className="p-2 text-sm md:p-3 md:text-base">Branch Name</th>
                <th className="p-2 text-sm md:p-3 md:text-base">Unique Id</th>
                <th className="p-2 text-sm md:p-3 md:text-base">Email</th>
                <th className="p-2 text-sm md:p-3 md:text-base">
                  Phone Number
                </th>
                <th className="p-2 text-sm md:p-3 md:text-base">Region</th>
                <th className="p-2 text-sm md:p-3 md:text-base">Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-200" : ""}
                >
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    <div className="flex flex-col gap-1">
                      <button
                        className={`${styles.view_btn}`}
                        onClick={() => {
                          editHandler(val);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className={`${styles.acpt_btn}`}
                        onClick={() => {
                          deleteConfHandler(val?._id || val?.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    {val?.branchName}
                  </td>
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    {val?.uniqueId}
                  </td>
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    {val?.email}
                  </td>
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    {val?.contactNumber}
                  </td>
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    {val?.region}
                  </td>
                  <td className="p-2 text-sm text-center md:p-3 md:text-base">
                    {val?.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 mb-5">
          <button
            className={`${styles.view_btn} text-lg px-6 py-2`}
            onClick={prevHandler}
          >
            Previous
          </button>
          <button
            className={`${styles.acpt_btn} text-lg px-6 py-2`}
            onClick={nextHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchDetails;
