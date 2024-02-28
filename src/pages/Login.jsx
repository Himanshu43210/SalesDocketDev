import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.scss";
import { SocialIcon } from "react-social-icons";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailLock } from "react-icons/md";
import LoadingSpinner from "../components/LoadingSpinner";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showUserPassword, setShowUserPassword] = useState(false);

  const navigate = useNavigate();
  console.log("check");

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  const userLogin = () => {
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!emailRegex.test(userEmail)) {
    //   toast.error("Please enter a valid email address");
    // } else {
      setIsLoading(true);
      setError(null);
      axios
        .post(`localhost:/login`, {
          email: userEmail,
          password: userPassword,
        })
        .then((response) => {
          toast.success("login successfully");
          const { profile, authToken } = response.data;
          sessionStorage.setItem("authToken", authToken);
          sessionStorage.setItem("profile", JSON.stringify(profile));
          localStorage.removeItem("formData");

          // dispatch(setUserProfile(profile));

          navigate("/registeruser");
        })
        .catch((err) => {
          toast.error("Please enter correct login credentials");
          setIsLoading(false);
          setError(
            err.response?.data?.error ||
              "Please enter correct login credentials"
          );
        });
    
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white Container">
      <div className="flex flex-col items-center justify-center px-10 pb-4 secondContainer">
        <h1 className="mt-10 mb-2 text-2xl font-semibold sm:text-3xl">
          Sign in
        </h1>
        <div className="underline"></div>
        {error && <p className="text-sm text-red-500 sm:text-base">{error}</p>}
        <div
          id="loginForm"
          className="flex flex-col border-b-2 pb-6 gap-4 w-[32vw] formOuter"
        >
          <div>
            {/* <Button>Click me</Button> */}
            <label htmlFor="userEmail">Email</label>
            <div className="input">
              <MdOutlineMailLock
                size={25}
                style={{ margin: "0px 10px", color: "#0F172A" }}
              />
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                placeholder="Enter email address"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                className="relative block w-[85%] px-2 py-1 rounded-none appearance-none rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div className="relative input">
              <RiLockPasswordLine
                size={25}
                style={{ margin: "0px 10px", color: "#0F172A" }}
              />
              <input
                type={showUserPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="relative block w-[85%] px-2 py-1 rounded-none appearance-none rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
              />
              <span
                onClick={() => setShowUserPassword(!showUserPassword)}
                className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-6"
              >
                {!showUserPassword ? <IoEyeOffSharp /> : <IoEye />}
              </span>
            </div>
          </div>

          {/* <Link to="/PasswordRecovery">
            <span className="text-right text-sm font-medium block text-[#0F172A] forgetpass">
              Forget Password?
            </span>
          </Link> */}
          <Link to="/" className="login_button_holder">
            <button
              // onClick={userLogin}
              type="button"
              className={`login_button ${isLoading && "opacity-[.9]"}`}
              disabled={isLoading}
            >
              {isLoading && (
                <div className="spinner">
                  <LoadingSpinner />
                </div>
              )}
              {isLoading ? (
                <span className="-ml-4">Loading</span>
              ) : (
                <span>Login</span>
              )}
            </button>
          </Link>
        </div>

        <div className="pb-2 mediaicon">
          <span>or sign up using</span>
          <div className="flex gap-2 list">
            <SocialIcon
              className="my-icon"
              url="https://twitter.com"
              bgColor="#1DA1F2"
              onClick={handleClick}
            />
            <SocialIcon
              className="my-icon"
              url="https://www.facebook.com"
              onClick={handleClick}
            />
            <SocialIcon
              className="my-icon"
              url="https://www.instagram.com"
              onClick={handleClick}
            />

            <div className="p-1 rounded-full bg-grey-400">
              <img
                className="w-[30px] mt-[2px]"
                src="https://flat-icons.com/wp-content/uploads/2022/07/Gmail-Icon-Aesthetic.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
