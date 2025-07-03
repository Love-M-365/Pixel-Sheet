import React, { useState } from "react";
import addicon from "../assets/Add.svg"
const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const FooterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All Orders");

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white flex justify-start items-center px-2  text-sm font-medium h-[48px] z-10">
        <div className="w-5"></div>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-3 py-1 mx-1 flex justify-center items-center cursor-pointer h-[48px] rounded-sm whitespace-nowrap
            ${activeTab === tab
              ? "text-[#3E5741] font-semibold text-[16px] bg-[#E8F0E9] border-t-2 border-[#4B6A4F]"
              : "text-[#757575] font-semibold text-[16px] hover:text-black"
            }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
      <div
        className="ml-2 w-[36px] h-[44px]  flex items-center justify-center rounded cursor-pointer text-gray-500 hover:text-black"
        onClick={() => console.log("Add tab")}
      >
        <button className="w-[30px] h-[30px] p-0 flex items-center justify-center bg-transparent ">
  <img src={addicon} alt="add " className="w-[28px] h-[28px]"></img>
</button>

      </div>
    </div>
  );
};

export default FooterTabs;
