import React, { useState } from "react";
import clsx from "clsx";
import assigned from "../assets/Shape.svg";
import globe from "../assets/Globe.svg";
import briefcase from "../assets/Briefcase.svg";
import submitted from "../assets/Calendar.svg";
import person from "../assets/Person.svg";
import statusicon from "../assets/Chevron Circle.svg";
import { ChevronDownIcon  } from "@heroicons/react/24/solid";
import link from '../assets/Link.svg'
import reload from '../assets/Arrow Sync.svg'
import arrowsplit from '../assets/Arrow Split.svg'
import arrowsplitwhite from '../assets/Arrow Split White.svg'
import more from "../assets/More.svg"
import addicon from "../assets/Add.svg"


type StatusType = "In-process" | "Complete" | "Blocked" | "Need to start";
type PriorityType = "High" | "Medium" | "Low";

const columns = [
  {
    key: "request",
    label: "Job Request",
    icon: <img src={briefcase} alt="Briefcase" className="w-4 h-4 mr-1 ml-1" />,
    hasDropdown: true,
  },
  {
    key: "submitted",
    label: "Submitted",
    icon: <img src={submitted} alt="submitted" className="w-4 h-4 mr-1 ml-1" />,
    hasDropdown: true,
  },
  {
    key: "status",
    label: "Status",
    icon: <img src={statusicon} alt="status" className="w-4 h-4 mr-1 ml-1" />,
    hasDropdown: true,
  },
  {
    key: "submitter",
    label: "Submitter",
    icon: <img src={person} alt="submitter" className="w-4 h-4 mr-1 ml-1" />,
    hasDropdown: true,
  },
  {
    key: "url",
    label: "URL",
    icon: <img src={globe} alt="url" className="w-4 h-4 mr-1 ml-1" />,
    hasDropdown: true,
  },
  {
    key: "assigned",
    label: "Assigned",
    icon: <img src={assigned} alt="assigned" className="w-4 h-4 mr-1 ml-1" />,
    hasDropdown: false,
  },
  { key: "priority", label: "Priority", icon: <></>,hasDropdown: false, },
  { key: "dueDate", label: "Due Date", icon: <></>,hasDropdown: false, },
  { key: "estValue", label: "Est. Value", icon: <></>,hasDropdown: false, },
  { key: "add", label: "", icon: <></>,hasDropdown: false, },
];

const headerColors = [
  "#eeeeee", // Job Request
  "#eeeeee", // Submitted
  "#eeeeee", // Status
  "#eeeeee", // Submitter
  "#eeeeee", // URL
  "#E8F0E9", // Assigned
  "#EAE3FC", // Priority
  "#EAE3FC", // Due Date
  "#FFE9E0", // Est. Value
  "white", // Add
];

interface RowData {
  request: string;
  submitted: string;
  status: StatusType;
  submitter: string;
  url: string;
  assigned: string;
  priority: PriorityType;
  dueDate: string;
  estValue: string;
}

const statusColorMap: Record<StatusType, string> = {
  "In-process": "bg-[#FFF3D6] text-[#85640B]",
  Complete: "bg-[#D3F2E3] text-[#0A6E3D]",
  Blocked: "bg-[#FFE1DE] text-red-700",
  "Need to start": "bg-[#E2E8F0] text-[#475569]",
};

const priorityColorMap: Record<PriorityType, string> = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-blue-600",
};

const initialData: RowData[] = [
  {
    request: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    request: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    request: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000",
  },
  {
    request: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    request: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
];

const AirtableSheet: React.FC = () => {
  const [data, setData] = useState<RowData[]>(initialData);

  const handleChange = <K extends keyof RowData>(
    rowIndex: number,
    key: K,
    value: RowData[K]
  ) => {
    const updated = [...data];
    updated[rowIndex] = {
      ...updated[rowIndex],
      [key]: value,
    };
    setData(updated);
  };

  return (
    <div className="w-screen h-screen  bg-gray-50 fixed overflow-auto top-[104px] left-0" >
      <div className="min-w-[1000px]">
        {/* Tab Row above headers */}
<div className="grid   grid-cols-[2rem_2fr_repeat(9,1.3fr)] h-[32px] bg-white text-gray-700  border-b border-gray-300">
  {/* Empty cell for row number column */}
  <div className="h-[32px] border-r w-[32px] bg-[white]"></div>

  {/* Tab spanning 4 columns (Job Request to Submitter) */}
  <div className="col-span-4  flex items-center  px-2 border-r rounded-t border-2 border-b-0 bg-[#E2E2E2] ">
    <button className="inline-flex items-center justify-center  bg-gray-100 text-[#545454] rounded-md px-1 font-normal py-1  border h-[24px] w-[158px] border-gray-200 shadow-sm hover:bg-gray-200 text-[12px] space-x-1">
      <img
  src={link}
  alt="Link icon"
  className=" w-[16px] mr-[2px] h-[16px] "
/>

    Q3 Financial Overview

      
    </button>
     <button className="p-1 ml-2 bg-transparent  ">
      <img src={reload} className="w-[16px] h-[16px] " />
    </button>
  </div>

  
    <div key={5} className="h-9 border-r bg-[white]"></div>
    <div key={6} className="h-9 border-r flex justify-center items-center bg-[#D2E0D4]">
        <button className="flex items-center justify-center text-center gap-2 px-3 py-1.5 bg-[#D2E0D4] rounded-md text-[14px] font-semibold text-[#505450] ">
  
  <img src={arrowsplit} alt="arrow split"  className="w-[16px] h-[16px] fill-[#505450]" />

  
  <span>ABC</span>

  
  <div className="flex items-center justify-center ">
    <img src={more} alt="more"  className="w-[16px] h-[16px]" />
  </div>
</button>

    </div>
    <div  className="col-span-2 h-9 flex justify-center items-center px-3 border-r rounded-t border-2 border-b-0 bg-[#DCCFFC] text-[#463E59]">
        <button className="flex items-center justify-center text-center gap-2 px-3 py-1.5 bg-transparent rounded-md text-xs font-semibold text-[#505450] ">
  
  <img src={arrowsplitwhite} alt="arrow split"  className="w-[16px] h-[16px] " />

  
  <span  className=" text-[14px]">Answer a question</span>

  
  
  <div className="flex items-center justify-center ">
    <img src={more} alt="more"  className="w-[16px] h-[16px]" />
  </div>
</button>

    </div>
    <div key={9} className="h-9 border-r flex justify-center items-center bg-[#FAC2AF]">
        <button className="flex text-[14px] items-center justify-center text-center gap-2 px-3 py-1.5 bg-transparent rounded-md text-xs font-semibold text-[#505450] ">
  
  <img src={arrowsplitwhite} alt="arrow split"  className="w-[16px] h-[16px]" />

  
  <span className=" text-[14px]">Extract</span>

  
  
  <div className="flex items-center justify-center ">
    <img src={more} alt="more"  className="w-[16px] h-[16px]" />
  </div>
</button>

    </div>
    <div key={10} className="h-9 border-r flex justify-center items-center bg-[#EEEEEE]">
        <button className="w-[22px] h-[22px] p-0 flex items-center justify-center bg-transparent ">
  <img src={addicon} alt="add " className="w-[20px] h-[20px]"></img>
</button>

    </div>
  
</div>

        {/* Header */}
      <div className="grid grid-cols-[2rem_2fr_repeat(9,1.3fr)] sticky mt-[5px] bg-white text-gray-500 border-b border-gray-300 z-10 text-[10px]">
  <div className="h-9 flex text-[15px] items-center justify-center font-medium border-r bg-[#eeeeee]">#</div>

  {columns.map((col, index) => (
    <div
      key={col.key}
      className="h-9 flex items-center  justify-between px-2 font-semibold text-xs border-r"
      style={{ backgroundColor: headerColors[index] }}
    >
      <div className="flex items-center space-x-1 truncate">
        {col.icon}
        <span className="truncate">{col.label}</span>
      </div>

      {/* ✅ Show dropdown only if hasDropdown is true */}
      {col.hasDropdown && (
        <button className="px-1 bg-transparent rounded-md text-gray-700 flex items-center">
          <ChevronDownIcon className="w-3 h-3" />
        </button>
      )}
    </div>
  ))}
</div>


        {/* Rows */}
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-[2rem_2fr_repeat(9,1.3fr)] border-b border-gray-200 bg-white hover:bg-gray-50 text-[8px]"
          >
            <div className="h-9 flex text-xs items-center justify-center  text-gray-500 border-r bg-[white]">
              {rowIndex + 1}
            </div>
            <input className="h-9 px-1 text-black  text-xs border-r outline-none bg-transparent truncate" value={row.request} onChange={(e) => handleChange(rowIndex, "request", e.target.value)} />
            <input className="h-9 px-1 w-full border-r text-black text-xs text-right outline-none bg-transparent truncate" value={row.submitted} onChange={(e) => handleChange(rowIndex, "submitted", e.target.value)} />
            <div className="h-9 px-1 border-r flex text-center justify-center items-center truncate">
              <span className={clsx("text-xs text-center font-medium px-1 py-0.5 rounded-full", statusColorMap[row.status])}>
                {row.status}
              </span>
            </div>
            <input className="h-9 text-black text-xs w-full px-1 border-r outline-none bg-transparent truncate" value={row.submitter} onChange={(e) => handleChange(rowIndex, "submitter", e.target.value)} />
            <input className="h-9 px-1 border-r text-xs w-full outline-none bg-transparent text-black underline truncate" value={row.url} onChange={(e) => handleChange(rowIndex, "url", e.target.value)} />
            <input className="h-9 px-1 border-r text-xs w-full text-black outline-none bg-transparent truncate" value={row.assigned} onChange={(e) => handleChange(rowIndex, "assigned", e.target.value)} />
            <div className="h-9 px-1 border-r text-xs w-full text-center justify-center flex items-center font-semibold truncate">
              <span className={clsx(priorityColorMap[row.priority])}>{row.priority}</span>
            </div>
            <input className="h-9 px-1 border-r text-xs w-full text-black justify-center items-center text-right outline-none bg-transparent truncate" value={row.dueDate} onChange={(e) => handleChange(rowIndex, "dueDate", e.target.value)} />
            <div className="h-9 px-1 border-r text-black justify-end items-center text-right flex text-xs w-full truncate">{row.estValue} <span style={{color:"grey",marginLeft:"0.5rem",textAlign:"right"}}>₹</span></div>
            <div className="h-9 flex items-center justify-center text-gray-400 hover:text-gray-600 border-r cursor-pointer">
              
            </div>
          </div>
        ))}

        {/* Empty Rows */}
        {[...Array(12)].map((_, i) => {
          const rowIndex = data.length + i;
          return (
            <div
              key={`empty-${i}`}
              className="grid grid-cols-[2rem_2fr_repeat(9,1.3fr)] border-b border-gray-200 bg-white hover:bg-gray-50 text-[8px]"
            >
              <div className="h-9 flex items-center text-xs justify-center text-gray-500 border-r bg-[white]">
                {rowIndex + 1}
              </div>
              {[...Array(10)].map((_, colIndex) => (
                <input
                  key={colIndex}
                  className="h-9 px-1 border-r outline-none bg-transparent truncate"
                  value=""
                  readOnly
                />
              ))}
            </div>
          );
        })}
      </div>
     
    </div>
  );
};

export default AirtableSheet;
