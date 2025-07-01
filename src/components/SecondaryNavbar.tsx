import React from "react";
import { EyeSlashIcon ,ArrowsUpDownIcon  } from '@heroicons/react/24/outline';
import callveiw from '../assets/callview.png'
const SecondaryNavbar: React.FC = () => {
  return (
    <header className="fixed top-12 left-0 w-full z-50 bg-white shadow-md px-6 py-3 flex ">
    <div className="w-full bg-white border-t border-gray-200  py-2 flex justify-between items-center text-sm">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <button className="bg-white  px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
          Tool bar <span className="ml-1">»</span>
        </button>
        <div className="w-px h-8 bg-gray-200" />

        <button className="bg-white  px-2 py-1 rounded-md text-gray-700 flex items-center space-x-1">
      <EyeSlashIcon className="w-5 h-5" />
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
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V8m0 0l-4 4m4-4l4 4m-9 7v1a2 2 0 002 2h6a2 2 0 002-2v-1" />
    </svg>
    <span className="text-sm font-medium">Export</span>
  </button>

        <button className="bg-white border border-gray-300 px-3 py-1 rounded-md text-gray-700 flex items-center space-x-1">
          <span>📤</span>
          <span>Share</span>
        </button>

        <button className="bg-green-700 text-white px-4 py-1.5 rounded-md flex items-center space-x-1 font-medium">
          <span>🧩</span>
          <span>New Action</span>
        </button>
      </div>
    </div>
    </header>
  );
};

export default SecondaryNavbar;
