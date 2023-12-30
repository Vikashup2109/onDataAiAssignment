import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";

import style from "./profileSection.module.css"; // Make sure to create appropriate CSS for styling

function ProfileSection({ apiData, profile, setProfile, isMenuOpen }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectProfile = (profileOption) => {
    setProfile(profileOption);
    setDropdownVisible(false);
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
            width={44}
            className="rounded-full"
          />
          <div
            className={`flex flex-col ${
              isMenuOpen ? "justify-center" : "hidden"
            }`}
          >
            <span className="text-[#2B303C] text-[16px] font-[600]">
              {apiData[profile].firstName}
            </span>
            <span className="text-[12px] text-[#A2A5AE]">
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
                    <span className="text-[#2B303C] text-[16px] font-[600]">
                      {apiData[profile].firstName}
                    </span>
                    <span className="text-[12px] text-[#A2A5AE]">
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
