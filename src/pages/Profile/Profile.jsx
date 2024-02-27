import React, { useEffect, useState } from "react";
import User_Logo from "../../assets/User_Logo.jpeg";
import AdminNavbar from "../../components/Admin_Navbar";
import SideMenu from "../../components/SideMenu";
import { MdModeEditOutline } from "react-icons/md";
import axios from "axios";
import styles from "./Profile.module.css";
import { BeatLoader } from "react-spinners";
import LoadingBeatLoader from "@/components/ui/LoadingBeatLoader";
import Navbar from "@/components/ui/Navbar";

const Profile = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const [userData, setUserData] = useState({});
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    website: "",
    companyName: "",
    address: "",
    managerName: "",
    pincode: "",
    email: "",
    phoneNumber: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [isTableLoaded, setIsTableLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getData = () => {
    setIsTableLoaded(true);
    const authToken = sessionStorage.getItem("authToken");
    const storedProfile = JSON.parse(sessionStorage.getItem("profile"));

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `localhost:/getprofile`,
      headers: { Authorization: authToken },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("asdasd", response.data.data[0]);
        setUserData(response.data.data[0]);
        setIsTableLoaded(false);
        setErrorMsg("Click edit button to edit profile");
      })
      .catch((error) => {
        console.log(error);
        setIsTableLoaded(false);
      });
  };

  useEffect(() => {
    // getData();
    const storedProfile = JSON.parse(sessionStorage.getItem("profile")) || {};
    setProfile({
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      website: userData?.website || "",
      companyName: userData?.companyName || "",
      address: userData?.address || "",
      managerName: userData?.managerName || "",
      pincode: userData?.pincode || "",
      email: userData?.email || "",
      phoneNumber: userData?.phoneNumber || "",
    });
    setProfileImage(storedProfile?.profileImage || "");
  }, [userData?.email]);

  useEffect(() => {
    if (errorMsg !== "") {
      const timeoutId = setTimeout(() => {
        setErrorMsg("");
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorMsg]);

  const handleUploadButtonClick = (e) => {
    e.preventDefault();
    document.getElementById("fileInput").click();
  };

  //upload image
  const handleFileInputChange = async (e) => {
    setIsTableLoaded(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("Profileimage", file);

    const authToken = sessionStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `localhost:/profilepicchange`,
        formData,
        {
          headers: {
            authorization: `${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const storedProfile = JSON.parse(sessionStorage.getItem("profile"));
        storedProfile.profileImage = response.data.profileImageLink;
        sessionStorage.setItem("profile", JSON.stringify(storedProfile));

        setProfileImage(response.data.profileImageLink);
        setIsTableLoaded(false);
        setErrorMsg("Successfully uploaded profile image");
        handleEditClick();
      } else {
        console.log("Failed to upload profile image");
        setIsTableLoaded(false);
        setErrorMsg("Failed to upload profile image");
      }
    } catch (error) {
      console.error(
        "An error occurred while uploading the profile image:",
        error
      );
      setIsTableLoaded(false);
      setErrorMsg("Failed to upload profile image");
    }
  };

  // delte image
  const Deleteimage = async (e) => {
    e.preventDefault();
    setIsTableLoaded(true);
    const authToken = sessionStorage.getItem("authToken");

    try {
      const response = await axios.delete(`localhost:/deleteprofile`, {
        headers: {
          authorization: `${authToken}`,
        },
      });
      if (response.status === 200) {
        const storedProfile = JSON.parse(sessionStorage.getItem("profile"));
        storedProfile.profileImage = null;
        sessionStorage.setItem("profile", JSON.stringify(storedProfile));

        setProfileImage(null);
        setIsTableLoaded(false);
        setErrorMsg("Successfully deleted profile image");
        handleEditClick();
      } else {
        console.log("Failed to upload profile image");
        setIsTableLoaded(false);
        setErrorMsg("Failed to delete profile image");
      }
    } catch (error) {
      console.error(
        "An error occurred while uploading the profile image:",
        error
      );
      setIsTableLoaded(false);
      setErrorMsg("Failed to delete profile image");
    }
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveClick = async (event) => {
    setIsTableLoaded(true);
    event.preventDefault();
    const authToken = sessionStorage.getItem("authToken");

    for (const key in profile) {
      if (profile[key].trim().length === 0) {
        setIsTableLoaded(false);
        setErrorMsg("Please fill all the fields.");
        return;
      }
    }

    try {
      const response = await axios.post(`localhost:/saveprofile`, profile, {
        headers: {
          authorization: `${authToken}`,
        },
      });

      if (response.status === 200) {
        console.log("Profile updated successfully");
        sessionStorage.setItem("profile", JSON.stringify(response.data.user));
        setIsEditing(false);
        setIsTableLoaded(false);
        setErrorMsg("Profile updated successfully");
      } else {
       
        setIsTableLoaded(false);
        setErrorMsg("Failed to");
      }
    } catch (error) {
      console.error("An error occurred while updating the profile:", error);
      setIsTableLoaded(false);
      setErrorMsg("Failed to update profile");
    }
  };

  // console.log(profile);
  return (
    <div className="min-h-screen  pb-8 bg-[#F5F4F9] ">
      <LoadingBeatLoader isTableLoaded={isTableLoaded}/>
      <Navbar setsideMenu={setsideMenu} sideMenu={sideMenu}/>

      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 0px 10px, rgba(0, 0, 0, 0.1) 0px 5px 12px",
        }}
        className="items-center bg-white w-[900px] flex py-4 mx-auto mt-4 justify-center flex-col"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">Profile</p>
          <p className="font-medium text-[#0F172A]">{errorMsg}</p>
        </div>
        <form className="w-[800px]  flex flex-col gap-2">
          <div className="flex justify-between ">
            <div className="flex right ">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <img
                  className="w-[90%] h-[90%] rounded-full"
                  src={profileImage ? profileImage : User_Logo}
                  alt="img"
                />
              </div>
              {isEditing && (
                <div className="flex flex-col items-baseline gap-2">
                  <button
                    onClick={handleUploadButtonClick}
                    className={styles.prof_button}
                  >
                    Upload New Picture
                  </button>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    // onChange={handleFileInputChange}
                  />
                  <button
                    // onClick={Deleteimage}
                    className={styles.prof_button2}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div className="left">
              {!isEditing && (
                <button
                  onClick={handleEditClick}
                  className={styles.prof_button}
                >
                  <MdModeEditOutline />
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="flex w-full gap-4">
            <label className="flex flex-col w-1/2 gap-2">
              <span className="text-xl font-medium">First Name</span>
              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>

            <label className="flex flex-col w-1/2 gap-2">
              <span className="text-xl font-medium">Last Name</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
          </div>
          <div className="flex w-full gap-4">
            <label className="flex flex-col w-1/2 gap-2 ">
              <span className="text-xl font-medium">Email</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
            <label className="flex flex-col w-1/2 gap-2">
              <span className="text-xl font-medium">Website</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="website"
                value={profile.website}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
          </div>
          <div className="flex w-full gap-4">
            <label className="flex flex-col w-full gap-2">
              <span className="text-xl font-medium">Contact Number</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
            <label className="flex flex-col w-full gap-2">
              <span className="text-xl font-medium">Company Name</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="companyName"
                value={profile.companyName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
          </div>
          <div className="flex w-full gap-4">
            <label className="flex flex-col w-full gap-2">
              <span className="text-xl font-medium">Address</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
            <label className="flex flex-col w-full gap-2">
              <span className="text-xl font-medium">Manager Name</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="managerName"
                value={profile.managerName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
          </div>
          <div className="flex items-center w-full gap-4">
            <label className="flex flex-col w-1/2 gap-2">
              <span className="text-xl font-medium">Pin Code</span>

              <input
                className="px-2 py-2 border-2 rounded-lg outline-none"
                type="text"
                name="pincode"
                value={profile.pincode}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </label>
            {isEditing && (
              <div className={`flex flex-row gap-2 mt-8`}>
                <button
                  className={styles.prof_button}
                  // onClick={handleSaveClick}
                >
                  Save Changes
                </button>
                <button
                  className={styles.prof_button2}
                  onClick={handleEditClick}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
