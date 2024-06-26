import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailLock } from "react-icons/md";
import LoadingSpinner from "../../components/LoadingSpinner";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import OtpInput from "otp-input-react";

const PasswordReset = () => {
  const [userEmail, setUserEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showUserPassword, setShowUserPassword] = useState(false);
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (error !== null) {
      const timer = setTimeout(() => {
        setError(null);
      }, 10000); // 10 seconds

      // Cleanup the timeout if the component unmounts or if error changes before 10 seconds
      return () => clearTimeout(timer);
    }
  }, [error]);

  const sendOTP = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(userEmail)) {
      setError("Please Enter Valid Email");
      return;
    }
    setIsLoading(true);
    let data = JSON.stringify({
      email: userEmail,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/user/sendotp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setStage(2);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error.response.data.msg);
      });
  };

  const verifyOTP = () => {
    if (otp.length < 6) {
      setError("Entered Invalid OTP!!");
      return;
    }
    setIsLoading(true);
    let data = JSON.stringify({
      email: userEmail,
      otp: otp,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/user/verifyotp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        if(response.data.msg === "Verified"){
          setStage(3);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error.response.data.msg);
      });
  };

  const resetPassword = () => {
    if(newPassword.length < 6){
      setError("Password Is Too Small!!");
      return;
    }
    if(newPassword !== confPassword){
      setError("Passwords Do Not Match!!");
      return;
    }
    setIsLoading(true);
    let data = JSON.stringify({
      "email": userEmail,
      "newPassword": confPassword,
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_REACT_APP_ENDPOINT}/user/resetpass`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setIsLoading(false);
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
      setError(error.response.data.msg);
    });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white ">
      <div className="flex flex-col items-center justify-center px-10 pb-4 bg-white shadow-md rounded-lg">
        <div className="font-bold text-3xl">SalesDocket</div>
        <h1 className="mb-2 text-2xl font-semibold sm:text-2xl">
          Password Reset
        </h1>
        <div className="w-[60px] h-[2px] bg-black"></div>
        {stage === 1 && (
          <div
            id="loginForm"
            className="flex flex-col border-b-2 pb-6 gap-6 w-[32vw]"
          >
            <div>
              <p
                className={`mt-5 font-bold text-center mb-4 ${
                  error ? "text-red-500" : "opacity-60"
                }`}
              >
                {!error ? "Enter email to get recovery OTP" : error}
              </p>

              <div className="bg-[#f5f5f5] rounded-lg w-full flex flex-row items-center h-[50px] py-[5px] px-[10px]">
                <MdOutlineMailLock
                  size={25}
                  style={{ margin: "0px 10px", color: "#EC2752" }}
                />
                <input
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  placeholder="Enter Register Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="bg-transparent relative block w-[85%] px-2 py-1 rounded-none appearance-none rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <button
              onClick={sendOTP}
              type="button"
              className={`flex flex-row items-center justify-center mx-auto text-white rounded-md w-[80%] h-[40px] font-bold bg-[#ec2752] ${
                isLoading && "opacity-[.9]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex flex-row text-white items-center -ml-4">
                  <div className="scale-[0.4]">
                    <LoadingSpinner />
                  </div>
                  <div className="text-white -ml-4">Loading</div>
                </div>
              ) : (
                <div>Get OTP</div>
              )}
            </button>
          </div>
        )}
        {stage === 2 && (
          <div
            id="loginForm"
            className="flex flex-col border-b-2 pb-6 gap-6 w-[32vw]"
          >
            <div>
              <div className="select-none">
              <p
                className={`mt-5 font-bold text-center mb-4 ${
                  error ? "text-red-500" : "opacity-60"
                }`}
              >
                {!error ? "Enter OTP Received On Registered Email" : error}
              </p>
                <div className="flex flex-col items-center ml-3">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    inputStyles={{
                      border: "2px solid #EC2752",
                      borderRadius: ".55rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={verifyOTP}
              type="button"
              className={`flex flex-row items-center justify-center mx-auto text-white rounded-md w-[80%] h-[40px] font-bold bg-[#ec2752] ${
                isLoading && "opacity-[.9]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex flex-row text-white items-center -ml-4">
                  <div className="scale-[0.4]">
                    <LoadingSpinner />
                  </div>
                  <div className="text-white -ml-4">Verifing</div>
                </div>
              ) : (
                <div>Verify OTP</div>
              )}
            </button>
          </div>
        )}
        {stage === 3 && (
          <div
            id="loginForm"
            className="flex flex-col border-b-2 pb-6 gap-6 w-[32vw]"
          >
            <div>
            <p
                className={`mt-5 font-bold text-center mb-4 ${
                  error ? "text-red-500" : "opacity-60"
                }`}
              >
                {!error ? "Create New Password & Confirm" : error}
              </p>
              <label htmlFor="password" className="ml-2 text-sm font-semibold">
                New Password
              </label>
              <div className="relative bg-[#f5f5f5] rounded-lg w-full flex flex-row items-center h-[50px] py-[5px] px-[10px]">
                <RiLockPasswordLine
                  size={25}
                  style={{ margin: "0px 10px", color: "#EC2752" }}
                />
                <input
                  type={showUserPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-transparent relative block w-[85%] px-2 py-1 rounded-none appearance-none rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                />
                <span
                  onClick={() => setShowUserPassword(!showUserPassword)}
                  className="absolute transform -translate-y-1/2 cursor-pointer right-4 top-6"
                >
                  {!showUserPassword ? <IoEyeOffSharp /> : <IoEye />}
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="ml-2 text-sm font-semibold">
                Confirm Password
              </label>
              <div className="relative bg-[#f5f5f5] rounded-lg w-full flex flex-row items-center h-[50px] py-[5px] px-[10px]">
                <RiLockPasswordLine
                  size={25}
                  style={{ margin: "0px 10px", color: "#EC2752" }}
                />
                <input
                  type={showUserPassword ? "text" : "password"}
                  id="confPassword"
                  name="confPassword"
                  placeholder="Re-enter new password"
                  required
                  value={confPassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                  className="bg-transparent relative block w-[85%] px-2 py-1 rounded-none appearance-none rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <button
              onClick={resetPassword}
              type="button"
              className={`flex flex-row items-center justify-center mx-auto text-white rounded-md w-[80%] h-[40px] font-bold bg-[#ec2752] ${
                isLoading && "opacity-[.9]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex flex-row text-white items-center -ml-4">
                  <div className="scale-[0.4]">
                    <LoadingSpinner />
                  </div>
                  <div className="text-white -ml-4">Loading</div>
                </div>
              ) : (
                <div>Submit</div>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
