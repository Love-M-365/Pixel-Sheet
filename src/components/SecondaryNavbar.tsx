import React from "react";
import {  ArrowsUpDownIcon  } from '@heroicons/react/24/outline';
import callveiw from '../assets/callview.png'
import eye from '../assets/Eye.svg'
import share from '../assets/share.png'
import arrowsplitwhite from '../assets/Arrow Split White.svg'
const SecondaryNavbar: React.FC = () => {
  return (
    <header className="fixed top-14 left-0 w-full z-50 bg-white shadow-sm px-2 py-1 flex  ">
    <div className="w-full bg-white border-t border-gray-200  py-1 flex justify-between items-center text-sm">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <button className="bg-white  px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
          Tool bar &ensp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>

        </button>
        <div className="w-px h-8 bg-gray-200" />

        <button className="bg-white  px-2 py-1 rounded-md text-gray-700 flex items-center space-x-1">
       <img
    src={eye}
    alt="eye"
    className="w-5 h-5"
  />
      <span>Hide fields</span>
    </button>

       <button className="bg-white  px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
      <ArrowsUpDownIcon className="w-5 h-5" />
      <span>Sort</span>
    </button>

        <button className="bg-white  px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M3 4h18v2H3V4zm4 7h10v2H7v-2zm3 7h4v2h-4v-2z" />
  </svg>
  <span>Filter</span>
    </button>

        <button className="bg-white  px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
          <img
    src={callveiw}
    alt="Cell view"
    className="w-5 h-5"
  />
  <span>Cell view</span>
</button>

      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        <button className="bg-white border border-gray-300 px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v12m0 0l-3.5-3.5M12 15l3.5-3.5M5 20h14"
        />
      </svg>
      <span className="text-sm font-medium">Import</span>
    </button>

        <button className="bg-white border border-gray-300 px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
     <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 rotate-180"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0l-3.5-3.5M12 15l3.5-3.5M5 20h14"
    />
</svg>
      <span className="text-sm font-medium">Export</span>
      </button>
   <button
      className="bg-white border border-gray-300 px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1"
    >
      <img
        src={share}
        alt="Share"
        className="w-5 h-5"
      />
      <span>Share</span>
    </button>

        <button className=" text-white px-4 py-1.5 rounded-md flex items-center space-x-1 font-medium" style={{backgroundColor:"#4B6A4F"}}>
          <img src={arrowsplitwhite} alt="arrow split"  className="w-5 h-5" />
          <span>New Action</span>
        </button>
      </div>
    </div>
    </header>
  );
};

export default SecondaryNavbar;
