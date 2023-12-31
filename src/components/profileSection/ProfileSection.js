import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";

import style from "./profileSection.module.css"; // Make sure to create appropriate CSS for styling

function ProfileSection({
  apiData,
  profile,
  setProfile,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectProfile = (profileOption) => {
    setProfile(profileOption);
    setDropdownVisible(false);
    setIsMenuOpen(false);
  };
  const ProfilePhoto = profile === "profile1" ? avatar : avatar2;
  return (
    <div className={style.profileContainer}>
      <div className="profile-section" onClick={toggleDropdown}>
        {/* Display profile information here */}
        <div className="flex gap-2 cursor-pointer justify-center hover:bg-[#EAF5FF] px-2 py-1 rounded-md mt-4">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className={`rounded-full ${
              isMenuOpen ? "w-[44px] sm:w-[44px]" : "w-[44px]"
            }`}
          />
          <div
            className={`flex flex-col ${
              isMenuOpen ? "justify-center " : "hidden"
            }`}
          >
            <span
              className={`text-[#2B303C] font-[600] ${
                isMenuOpen ? "text-[20px] sm:text-[16px]" : ""
              }`}
            >
              {apiData[profile].firstName}
            </span>
            <span
              className={`text-[#A2A5AE] ${
                isMenuOpen ? "text-[14px] sm:text-[12px]" : ""
              }`}
            >
              {apiData[profile].email}
            </span>
          </div>
        </div>
      </div>

      {dropdownVisible && (
        <div className={style.profileDropdown}>
          {Object.keys(apiData).map((profile) => {
            return (
              <div onClick={() => selectProfile(profile)}>
                <div className="flex gap-2 cursor-pointer justify-center hover:bg-[#EAF5FF] px-2 py-1 rounded-md mt-4">
                  <div className={`flex flex-col`}>
                    <span
                      className={`text-[#2B303C] font-[600] ${
                        isMenuOpen ? "text-[20px] sm:text-[16px]" : ""
                      }`}
                    >
                      {apiData[profile].firstName}
                    </span>
                    <span
                      className={` text-[#A2A5AE] ${
                        isMenuOpen ? " text-[14px] sm:text-[12px]" : "hidden"
                      }`}
                    >
                      {apiData[profile].email}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProfileSection;
