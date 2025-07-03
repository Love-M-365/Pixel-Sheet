import React, { useState } from "react";
import type { ChangeEvent } from "react";
import SecondaryNavbar from "./SecondaryNavbar";
import more from "../assets/More.svg"
import profileimage from "../assets/Ellipse 1.png"
import alerticon from "../assets/Alert.svg"
import greenbox from "../assets/green.svg"
import arrowright from "../assets/Chevron.svg"
import search2 from "../assets/search2.svg"
const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
    <header className="fixed top-0 left-0  w-full z-50 bg-white shadow-md px-6 py-3 flex justify-between h-[56px] items-center">
      {/* Logo */}
      <div className="flex  h-[24px] w-[343px] items-center space-x-2">
  {/* Square box */}
  <img src={greenbox} alt="green box" className="h-[16px] mr-[16px] w-[20px]">
  </img>


  {/* Breadcrumbs */}
  <div className="flex items-center space-x-1  text-[14px] text-gray-400">
    <span>Workspace</span>
    <img src={arrowright} alt="arrow right" ></img>
    <span>Folder 2</span>
    <img src={arrowright} alt="arrow right" ></img>
    <span className="text-black font-medium">Spreadsheet 3</span>
        <button className="bg-transparent p-0">
            <img src={more} alt="more" className="h-[20px]  w-[20px]"></img>
        </button> 
  </div>
</div>


      {/* Right */}
      <div className="flex items-center space-x-2  h-[40px]">
        {/* Search */}
        <div className="flex items-center w-[165px] h-[40px] bg-[#F6F6F6] rounded-[6px] px-3 py-2 text-gray-500">
          <img src={search2} alt="more" className="h-[16px] w-[16px]">
  </img>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search within sheet"
            className="bg-transparent ml-[4px] focus:outline-none text-[12px] text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Notification */}
        <div className="relative">
  <button
    type="button"
    className="relative p-2 rounded-full bg-white transition duration-200 "
  >
    {/* Updated bell icon (better look) */}
    <img src={alerticon} alt="alert icon"  className="w-[24px] h-[24px] " />

    {/* Notification badge */}
    <span className="absolute top-1 right-1  text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex justify-center items-center w-[16px] h-[16px]" style={{backgroundColor:"#4B6A4F"}}>
        <p className="text-[10px] ">2</p>
    </span>
  </button>
</div>


        {/* Profile */}
        <div className="flex items-center space-x-2 w-[112px] mr-2 h-[40px]">
          <img
            src={profileimage}
            alt="User Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
          <div className="leading-tight hidden sm:block">
            <p className="text-[12px] text-left text-[#121212] ">John Doe</p>
            <p className="text-[10px] text-[#757575] truncate max-w-[55px]">john.doe@example.com</p>
          </div>
        </div>
      </div>
     
    </header>
     <SecondaryNavbar></SecondaryNavbar>
     </>
  );
};

export default Navbar;
