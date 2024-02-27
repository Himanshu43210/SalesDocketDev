import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import LoadingBeatLoader from "../ui/LoadingBeatLoader";

const RegisterUserEdit = ({ userData, setEditBoxOpen, setEditSuccess }) => {
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [response, setResponse] = useState("");

  //storefilter
  const [storeData, setStoreData] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  const getStore = () => {
    setIsTableLoaded(true);
    const token = sessionStorage.getItem("authToken");

    let config = {
      method: "get",
      url: `${
        import.meta.env.VITE_REACT_APP_ENDPOINT
      }/api/store/findAll?page=0&limit=9999`,
      headers: { Authorization: token },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.result);
        const storeNamesArray = response.data.result.map((store) => ({
          storeName: store.storeName,
          _id: store._id,
          region: store.region,
        }));
        setStoreData(storeNamesArray);
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
      url: `${
        import.meta.env.VITE_REACT_APP_ENDPOINT
      }/api/company/findAll?page=0&limit=9999`,
      headers: { Authorization: token },
    };

    axios
      .request(config)
      .then((response) => {
        const storeNamesArray = response.data.result.map((company) => ({
          companyName: company.companyName,
          _id: company._id,
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
    getStore();
    getCompany();
  }, []);

  const closeHandler = () => {
    setEditBoxOpen(false);
  };

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

    if (formData.email.length <= 5) {
      console.log("email size is too small, must be more than 5");
      setIsTableLoaded(false);
      return;
    }

    if (formData.phoneNumber.length <= 5) {
      console.log("phone number is invalid");
      setIsTableLoaded(false);
      return;
    }

    let data = JSON.stringify({
      userID: formData._id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      companyId: formData.companyId,
      role: formData.role,
      storeId: formData.storeId,
      city: formData.city,
      address: formData.address,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/api/userregistry/update`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setIsTableLoaded(false);
        setResponse(response.data.msg);
        setEditSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setIsTableLoaded(false);
        setResponse("Failed to update user");
      });
  };

  return (
    <div className="min-h-screen  pb-8 bg-[#F5F4F9]">
      <LoadingBeatLoader isTableLoaded={isTableLoaded}/>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 0px 10px, rgba(0, 0, 0, 0.1) 0px 5px 12px",
        }}
        className="items-center bg-white max-w-[900px] flex py-8 mx-auto mt-4 justify-center flex-col"
      >
        <div className="flex flex-col w-[900px]">
          <div className="mb-6 flex flex-col gap-2 border-b-2 mr-10 pb-2 ml-10">
            <IoClose
              size={35}
              className="absolute right-[220px] text-[#EC2752] transition ease hover:rotate-[360deg] duration-500"
              onClick={closeHandler}
            />
            <p className="text-4xl font-bold">Update User Details</p>
            <p className="text-lg">All fields marked with * are required</p>
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
                  <option key={item._id} value={item._id}>
                    {item.companyName}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col w-[70%] gap-2">
              <span className="font-medium text-xl">Store Name*</span>
              <select
                id="storeId"
                name="storeId"
                value={formData.storeId}
                className="outline-none text-base border-2 px-2 py-2 rounded-lg"
                onChange={handleChange}
                required
              >
                <option value="">None</option>
                {storeData.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.storeName + ", " + item.region}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col w-[70%] gap-2">
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
            <div className="mt-8 flex flex-row justify-start gap-4 items-center">
              <button
                type="submit"
                className="font-medium text-sm text-white p-3 rounded bg-[#EC2752]"
              >
                Update Details
              </button>
              <p className="text-[#EC2752]">{response}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserEdit;
