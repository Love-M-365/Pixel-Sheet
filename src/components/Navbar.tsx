import React, { useState } from "react";
import type { ChangeEvent } from "react";
import SecondaryNavbar from "./SecondaryNavbar";

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
  {/* Square box */}
  <div className="w-5 h-5 rounded-md border-2 border-green-700 flex overflow-hidden">
  <div className="w-1/2 h-full bg-white" />
  <div className="w-1/2 h-full bg-green-700" />
</div>


  {/* Breadcrumbs */}
  <div className="flex items-center space-x-1 text-sm text-gray-400">
    <span>Workspace</span>
    <span className="text-gray-400">›</span>
    <span>Folder 2</span>
    <span className="text-gray-400">›</span>
    <span className="text-black font-medium">Spreadsheet 3</span>
    <span className="text-gray-400">...</span>
  </div>
</div>


      {/* Right */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 text-gray-500">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            />
          </svg>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search within sheet"
            className="bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.4-1.4A2 2 0 0118 14v-3a6 6 0 00-12 0v3a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
            2
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/300"
            alt="User Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
          <div className="leading-tight hidden sm:block">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500 truncate max-w-[120px]">john.doe@example.com</p>
          </div>
        </div>
      </div>
     
    </header>
     <SecondaryNavbar></SecondaryNavbar>
     </>
  );
};

export default Navbar;
