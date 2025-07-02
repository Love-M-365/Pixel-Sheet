import React from "react";
import arrowsort from "../assets/Arrow Sort.svg"
import callveiw from '../assets/callveiw.svg'
import eye from '../assets/Eye.svg'
import share from '../assets/share.png'
import filtericon from "../assets/Filter.svg"
import arrowsplitwhite from '../assets/Arrow Split White.svg'
import importicon from "../assets/Arrow Download.svg"
import exporticon from "../assets/Arrow Upload.svg"
const SecondaryNavbar: React.FC = () => {
  return (
    <header className="fixed top-[56px] h-[48px] left-0 w-full z-50 bg-white shadow-sm px-2 py-1 flex justify-between items-center ">
    <div className="w-full bg-white border-t border-gray-200  py-1 flex justify-between items-center ">
      {/* Left section */}
      <div className="flex items-center space-x-1">
        <button className="bg-white text-[14px] w-[91px] h-[36px]  px-2 py-1 rounded-md text-[#121212] flex items-center justify-center ">
            <p className="text-[14px] mr-[1.5px]">Tool bar</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[16px] h-[16px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

        </button>
        <div className="w-px h-8 bg-gray-200" />

        <button className="bg-white text-[14px] w-[118px] h-[36px] text-[#121212] px-2 py-1 rounded-md  flex items-center justify-center space-x-1">
       <img
    src={eye}
    alt="eye"
    className="w-[20px] h-[20px]"
  />
      <span>Hide fields</span>
    </button>

       <button className="bg-white text-[14px] w-[73px] h-[36px] text-[#121212]  px-3 py-1 rounded-md  flex items-center justify-center space-x-1">
      <img
    src={arrowsort}
    alt="sort"
    className="w-[20px] h-[20px]"
  />
      <span>Sort</span>
    </button>

        <button className="bg-white text-[14px] w-[80px] h-[36px] text-[#121212]  px-3 py-1 rounded-md  flex items-center justify-center space-x-1">
     <img
    src={filtericon}
    alt="filter"
    className="w-[20px] h-[20px]"
  />
  <span>Filter</span>
    </button>

        <button className="bg-white  px-1 py-1 text-[14px] w-[105px] h-[36px] text-[#121212] rounded-md  flex items-center justify-center ">
          <img
    src={callveiw}
    alt="Cell view"
    className="w-[20px] h-[20px]"
  />
  <span>Cell view</span>
</button>

      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        <button className="bg-white w-[90px] h-[36px] border border-gray-300 px-3 py-1 rounded-[6px] text-[#545454] flex items-center justify-center space-x-1">
     <img
    src={importicon}
    alt="import"
    className="w-[20px] h-[20px]"
  />
      <span className="text-[14px] ">Import</span>
    </button>

       <button className="bg-white w-[90px] h-[36px] border border-gray-300 px-3 py-1 rounded-[6px] text-[#545454] flex items-center justify-center space-x-1">
     <img
    src={exporticon}
    alt="export"
    className="w-[20px] h-[20px]"
  />
      <span className="text-[14px] ">Export</span>
    </button>
    <button className="bg-white w-[90px] h-[36px] border rounded-[6px] border-gray-300 px-3 py-1  text-[#545454] flex items-center justify-center space-x-1">
     <img
    src={share}
    alt="share"
    className="w-[20px] h-[20px]"
  />
      <span className="text-[14px] ">Share</span>
    </button>
        <button className=" text-white px-4 py-1.5 rounded-md w-[150px] flex items-center space-x-1 justify-center " style={{backgroundColor:"#4B6A4F"}}>
          <img src={arrowsplitwhite} alt="arrow split"  className="w-[20px] h-[20px]" />
          <span className="text-[14px]">New Action</span>
        </button>
      </div>
    </div>
    </header>
  );
};

export default SecondaryNavbar;
