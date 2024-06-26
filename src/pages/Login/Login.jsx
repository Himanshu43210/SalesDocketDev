import React,{ useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../store/slices/userSlice";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailLock } from "react-icons/md";
import LoadingSpinner from "../../components/LoadingSpinner";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showUserPassword, setShowUserPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("check");

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  const userLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(userEmail) || userPassword.length < 6) {
      toast.error("Please Enter Valid Email & Password!");
    } else {
      setIsLoading(true);
      setError(null);
      axios
        .post(`${import.meta.env.VITE_REACT_APP_ENDPOINT}/user/login`, {
          email: userEmail,
          password: userPassword,
        })
        .then((response) => {
          console.log(response.data);
          const { userData, token } = response.data;
          sessionStorage.setItem("authToken", token);
          sessionStorage.setItem("profile", JSON.stringify(userData));
          localStorage.removeItem("formData");
          dispatch(setUserProfile({ userData: userData, token: token }));
          switch (userData.role) {
            case "Super Admin":
              navigate("/companyDetails");
              break;
            case "Admin Manager":
              navigate("/companyDetails");
              break;
            case "Technician":
              navigate("home");
              break;
            case "Sale User":
              navigate("home");
              break;
            default:
              navigate("/home");
          }
        })
        .catch((err) => {
          toast.error("Please enter correct login credentials");
          setIsLoading(false);
          setError(
            err.response?.data?.error ||
              "Please enter correct login credentials"
          );
        });
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white ">
      <div className="flex flex-col items-center justify-center px-10 pb-4 bg-white shadow-md rounded-lg">
        <div className="font-bold text-3xl">SalesDocket</div>
        <h1 className="mb-2 text-2xl font-semibold sm:text-2xl">Login</h1>
        <div className="w-[60px] h-[2px] bg-black"></div>
        <p className="text-sm text-red-500 sm:text-base my-2 h-4">{error ? error : ""}</p>
        <div
          id="loginForm"
          className="flex flex-col border-b-2 pb-6 gap-6 w-[32vw]"
        >
          <div>
            <React.Fragment></React.Fragment>
            <label htmlFor="userEmail" className="ml-2 text-sm font-semibold">
              Email
            </label>
            <div className="bg-[#f5f5f5] rounded-lg w-full flex flex-row items-center h-[50px] py-[5px] px-[10px]">
              <MdOutlineMailLock
                size={25}
                style={{ margin: "0px 10px", color: "#EC2752" }}
              />
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                placeholder="Enter email address"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                className="bg-transparent relative block w-[85%] px-2 py-1 rounded-none appearance-none rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="ml-2 text-sm font-semibold">
              Password
            </label>
            <div className="relative bg-[#f5f5f5] rounded-lg w-full flex flex-row items-center h-[50px] py-[5px] px-[10px]">
              <RiLockPasswordLine
                size={25}
                style={{ margin: "0px 10px", color: "#EC2752" }}
              />
              <input
                type={showUserPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
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

          <Link to="/passReset" className="ml-auto">
            <span className="text-right text-sm font-medium block text-[rgb(236,39,82)]">
              Forget Password?
            </span>
          </Link>
          <button
            onClick={userLogin}
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
              <div>Login</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
