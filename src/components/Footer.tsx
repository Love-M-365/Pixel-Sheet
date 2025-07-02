import React, { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const FooterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All Orders");

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white flex justify-start items-center px-2  text-sm font-medium h-[48px] z-10">
        <div className="w-5"></div>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-3 py-1 mx-1 cursor-pointer rounded-sm whitespace-nowrap
            ${activeTab === tab
              ? "text-[#3E5741] bg-[#E8F0E9] border-t-2 border-[#4B6A4F]"
              : "text-[#757575] hover:text-black"
            }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
      <div
        className="ml-2 w-5 h-5 flex items-center justify-center rounded cursor-pointer text-gray-500 hover:text-black"
        onClick={() => console.log("Add tab")}
      >
         <button className="w-12 h-12 flex items-center justify-center bg-transparent rounded-sm">
  <svg className="w-10 h-10 text-[#04071E]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
  </svg>
</button>
      </div>
    </div>
  );
};

export default FooterTabs;
