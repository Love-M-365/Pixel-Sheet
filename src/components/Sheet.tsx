import React, { useState } from "react";
import clsx from "clsx";
import assigned from "../assets/Shape.svg";
import globe from "../assets/Globe.svg";
import briefcase from "../assets/Briefcase.svg";
import submitted from "../assets/Calendar.svg";
import person from "../assets/Person.svg";
import statusicon from "../assets/Chevron Circle.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type StatusType = "In-process" | "Complete" | "Blocked" | "Yet to start";
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
  "In-process": "bg-yellow-100 text-yellow-800",
  Complete: "bg-green-100 text-green-800",
  Blocked: "bg-red-100 text-red-800",
  "Yet to start": "bg-blue-100 text-blue-800",
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
    status: "Yet to start",
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
    <div className="w-screen h-screen overflow-auto bg-gray-50 fixed top-14 left-0" style={{ marginTop: "6rem" }}>
      <div className="min-w-[1000px]">
        {/* Header */}
      <div className="grid grid-cols-[2rem_2fr_repeat(9,1.3fr)] sticky top-0 bg-white text-gray-500 border-b border-gray-300 z-10 text-[10px]">
  <div className="h-9 flex items-center justify-center font-medium border-r bg-[#eeeeee]">#</div>

  {columns.map((col, index) => (
    <div
      key={col.key}
      className="h-9 flex items-center justify-between px-2 font-semibold text-xs border-r"
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
            <div className="h-9 flex items-center justify-center  text-gray-500 border-r bg-gray-100">
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
        {[...Array(8)].map((_, i) => {
          const rowIndex = data.length + i;
          return (
            <div
              key={`empty-${i}`}
              className="grid grid-cols-[2rem_2fr_repeat(9,1.3fr)] border-b border-gray-200 bg-white hover:bg-gray-50 text-[8px]"
            >
              <div className="h-9 flex items-center justify-center text-gray-500 border-r bg-gray-100">
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
