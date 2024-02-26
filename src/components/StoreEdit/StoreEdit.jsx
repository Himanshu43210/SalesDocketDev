import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const StoreEdit = ({storeData, setEditBoxOpen, setEditSuccess}) => {
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const [formData, setFormData] = useState(storeData);
  const [response, setResponse] = useState("");

  const closeHandler = () => {
    setEditBoxOpen(false);
  }

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

    if(formData.email.length <= 5){
      console.log("Email size is too small, must be more than 5");
      setResponse("Email size is too small, must be more than 5");
      setIsTableLoaded(false);
      return;
    }

    if(formData.contactNumber.length <= 5){
      console.log("phone number is invalid");
      setResponse("Phone number is invalid, size must be more than 5");
      setIsTableLoaded(false);
      return;
    }

    const data = JSON.stringify({
        "id" : formData._id,
        "storeName": formData.storeName,
        "uniqueId": formData.uniqueId,
        "email": formData.email,
        "contactNumber": formData.contactNumber,
        "region": formData.region,
        "address": formData.address,
    });

    console.log(data);

    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/api/store/edit`,
      headers: { 
        'Authorization': token, 
        'Content-Type': 'application/json', 
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response);
      setIsTableLoaded(false);
      setResponse(response.data.msg);
      setEditSuccess(true);
    })
    .catch((error) => {
      console.log(error);
      setIsTableLoaded(false);
      setResponse("Failed to update data");
    });
  };

  return (
    <div className="min-h-screen  pb-8 bg-[#F5F4F9]">
      {isTableLoaded && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <BeatLoader color={"#EC2752"} loading={isTableLoaded} size={15} />
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
          <div className="flex flex-col gap-2 pb-2 mb-6 ml-10 mr-10 border-b-2">
          <IoClose size={35} className="absolute right-[220px] text-[#EC2752] transition ease hover:rotate-[360deg] duration-500" onClick={closeHandler}/>
            <p className="text-4xl font-bold">Update Store Details 
            </p>
            <p className="text-lg">All fields marked with * are required</p>
          </div>
          <form className="flex flex-col gap-4 ml-10" onSubmit={submitHandler}>
          <div className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Store Name*</span>
              <input
                id="storeName"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                required={true}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Unique Id*</span>
              <input
                id="uniqueId"
                name="uniqueId"
                value={formData.uniqueId}
                onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none "
                type="text"
                required={true}
              />
            </div>

            <div className="flex flex-col w-[70%] gap-2 ">
              <span className="text-xl font-medium">Email*</span>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="email"
                required={true}
              />
            </div>

            <div className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Contact Number*</span>
              <input
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="number"
                required={true}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Region*</span>
              <input
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                required={true}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <span className="text-xl font-medium">Adddress*</span>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                required={true}
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-4 mt-8">
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

export default StoreEdit;
