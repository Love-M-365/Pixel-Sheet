import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import assigned from "../assets/Shape.svg";
import globe from "../assets/Globe.svg";
import briefcase from "../assets/Briefcase.svg";
import submitted from "../assets/Calendar.svg";
import person from "../assets/Person.svg";
import statusicon from "../assets/Chevron Circle.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import link from '../assets/Link.svg'
import reload from '../assets/Arrow Sync.svg'
import arrowsplit from '../assets/Arrow Split.svg'
import arrowsplitwhite from '../assets/Arrow Split White.svg'
import more from "../assets/More.svg"
import addicon from "../assets/Add.svg"
import CustomButton from "./CustomButton";


type StatusType = "In-process" | "Complete" | "Blocked" | "Need to start";
type PriorityType = "High" | "Medium" | "Low";



const extraHeaders = [
  {
    span: 4,
    bgColor: "#E2E2E2",
    border: false,
    content: <span className="text-sm font-semibold"><button className="inline-flex items-center justify-center  bg-gray-100 text-[#545454] rounded-[4px] px-1 font-normal   border h-[24px] w-[158px] border-gray-200 shadow-sm hover:bg-gray-200 text-[12px] space-x-1">
      <img
  src={link}
  alt="Link icon"
  className=" w-[16px] mr-[2px] h-[16px] "
/>

    Q3 Financial Overview

      
    </button>
     <button className="p-1 ml-2 bg-transparent  ">
      <img src={reload} className="w-[16px] h-[16px] " />
    </button></span>,
  },
  {
    span: 1,
    bgColor: "#FFFFFF",
    border: false,
    content: <div className="flex items-center space-x-2">
    </div>,
  },
  {
    span: 1,
    bgColor: "#D2E0D4",
    border: false,
    content: <button className="flex items-center justify-center text-center gap-2 px-3 py-1.5 bg-[#D2E0D4] rounded-md text-[14px] font-semibold text-[#505450] ">
  
  <img src={arrowsplit} alt="arrow split"  className="w-[16px] h-[16px] fill-[#505450]" />

  
  <span>ABC</span>

  
  <div className="flex items-center justify-center ">
    <img src={more} alt="more"  className="w-[16px] h-[16px]" />
  </div>
</button>,
  },
  {
    span: 2,
    bgColor: "#DCCFFC",
    border: false,
    content: <button className="flex items-center justify-center text-center gap-2 px-3 py-1.5 bg-transparent rounded-md text-xs font-semibold text-[#505450] ">
  
  <img src={arrowsplitwhite} alt="arrow split"  className="w-[16px] h-[16px] " />

  
  <span  className=" text-[14px]">Answer a question</span>

  
  
  <div className="flex items-center justify-center ">
    <img src={more} alt="more"  className="w-[16px] h-[16px]" />
  </div>
</button>,
  },
  {
    span: 1,
    bgColor: "#FAC2AF",
    border: false,
    content: (
       <button className="flex text-[14px] items-center justify-center text-center gap-2 px-1 py-1 bg-transparent rounded-md text-xs font-semibold text-[#505450] ">
  
  <img src={arrowsplitwhite} alt="arrow split"  className="w-[16px] h-[16px]" />

  
  <span className=" text-[14px]">Extract</span>

  
  
  <div className="flex items-center justify-center ">
    <img src={more} alt="more"  className="w-[16px] h-[16px]" />
  </div>
</button>
    ),
  },
  {
    span: 1,
    bgColor: "#EEEEEE",
    border: true,
    content: (
       <button className="w-[22px] h-[22px] p-0 flex items-center justify-center bg-transparent ">
  <img src={addicon} alt="add " className="w-[20px] h-[20px]"></img>
</button>
    ),
  },
];

const columns = [
  {
    key: "request",
    label: "Job Request",
    icon: <img src={briefcase} alt="Briefcase" className="w-[16px] h-[16px]" />,
    hasDropdown: true,
    dropdownIcon: <CustomButton className="p-1 bg-transparent"><ChevronDownIcon  aria-label="drop-down" className="w-[12px] fill-[#AFAFAF] h-[12px]" /></CustomButton>,
    width: 256,
    bgColor: "#EEEEEE",
    align: "left",
  },
  {
    key: "submitted",
    label: "Submitted",
    icon: <img src={submitted} alt="submitted" className="w-[16px] h-[16px]" />,
    hasDropdown: true,
    dropdownIcon: <CustomButton className="p-1 bg-transparent"><ChevronDownIcon aria-label="drop-down"  className="w-[12px] fill-[#AFAFAF] h-[12px]" /></CustomButton>,
    width: 124,
    bgColor: "#EEEEEE",
    align: "right",
  },
  {
    key: "status",
    label: "Status",
    icon: <img src={statusicon} alt="status" className="w-[16px] h-[16px]" />,
    hasDropdown: true,
    dropdownIcon: <CustomButton className="p-1 bg-transparent"><ChevronDownIcon aria-label="drop-down"  className="w-[12px] fill-[#AFAFAF] h-[12px]" /></CustomButton>,
    width: 124,
    bgColor: "#EEEEEE",
    align: "center",
  },
  {
    key: "submitter",
    label: "Submitter",
    icon: <img src={person} alt="submitter" className="w-[16px] h-[16px]" />,
    hasDropdown: true,
    dropdownIcon: <CustomButton className="p-1 bg-transparent"><ChevronDownIcon aria-label="drop-down"  className="w-[12px] fill-[#AFAFAF] h-[12px]" /></CustomButton>,
    width: 124,
    bgColor: "#EEEEEE",
    align: "left",
  },
  {
    key: "url",
    label: "URL",
    icon: <img src={globe} alt="url" className="w-[16px] h-[16px]" />,
    hasDropdown: true,
    dropdownIcon: <CustomButton className="p-1 bg-transparent"><ChevronDownIcon aria-label="drop-down"  className="w-[12px] fill-[#AFAFAF] h-[12px]" /></CustomButton>,
    width: 124,
    bgColor: "#EEEEEE",
    align: "left",
  },
  {
    key: "assigned",
    label: "Assigned",
    icon: <img src={assigned} alt="assigned" className="w-[16px] h-[16px]" />,
    hasDropdown: false,
    width: 124,
    bgColor: "#E8F0E9",
    align: "left",
  },
  {
    key: "priority",
    label: "Priority",
    icon: <></>,
    hasDropdown: false,
    width: 125,
    bgColor: "#EAE3FC",
    align: "center",
  },
  {
    key: "dueDate",
    label: "Due Date",
    icon: <></>,
    hasDropdown: false,
    width: 125,
    bgColor: "#EAE3FC",
    align: "right",
  },
  {
    key: "estValue",
    label: "Est. Value",
    icon: <></>,
    hasDropdown: false,
    width: 124,
    bgColor: "#FFE9E0",
    align: "right",
  },
  {
    key: "add",
    label: "",
    icon: <></>,
    hasDropdown: false,
    width: 124,
    bgColor: "#FFFFFF",
    align: "center",
  },
  
];

const headerColors = [
  "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee", "#eeeeee",
  "#E8F0E9", "#EAE3FC", "#EAE3FC", "#FFE9E0", "white",
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

const statusStyleMap: Record<StatusType, { bg: string; text: string }> = {
  "In-process": { bg: "bg-[#FFF3D6]", text: "text-[#85640B]" },
  Complete: { bg: "bg-[#D3F2E3]", text: "text-[#0A6E3D]" },
  Blocked: { bg: "bg-[#FFE1DE]", text: "text-red-700" },
  "Need to start": { bg: "bg-[#E2E8F0]", text: "text-[#475569]" },
};


const priorityStyleMap: Record<PriorityType, string> = {
  High: "text-[#EF4D44]",
  Medium: "text-[#C29210]",
  Low: "text-[#1A8CFF]",
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
    url: "www.irfankhanp.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    request: "Finalize user testing feedback for app update",
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
  const [colWidths, setColWidths] = useState<number[]>(columns.map((col) => col.width || 124));
  const inputRefs = useRef<(HTMLInputElement | null)[][]>([]);
  useEffect(() => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    if (!(btn as any)._logged) {
      btn.addEventListener("click", () => {
        console.log("Button clicked:", btn.innerText);
      });
      (btn as any)._logged = true; // to prevent duplicate listeners
    }
  });
}, []);

  

  const handleChange = <K extends keyof RowData>(rowIndex: number, key: K, value: RowData[K]) => {
    const updated = [...data];
    updated[rowIndex] = { ...updated[rowIndex], [key]: value };
    setData(updated);
  };

  const startResizing = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = colWidths[index];
    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(50, startWidth + moveEvent.clientX - startX);
      setColWidths((prev) => {
        const updated = [...prev];
        updated[index] = newWidth;
        return updated;
      });
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    row: number,
    col: number
  ) => {
    if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      const targetRow = row + (e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0);
      const targetCol = col + (e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0);
      const input = inputRefs.current?.[targetRow]?.[targetCol];
      if (input) input.focus();
    }
  };

  return (
    <div className="w-screen h-screen  bg-gray-50 fixed overflow-auto top-[104px] left-0 ">
      <div className="w-[1440px] bg-[#F6F6F6]">
       
       
       {/* Extra Header Row */}
<div className="flex sticky top-0 z-30">
  <div className="w-[32px] h-[32px] bg-white border-r"></div>
  {extraHeaders.map((header, index) => {
    const startIndex = extraHeaders.slice(0, index).reduce((acc, h) => acc + h.span, 0);
    const totalWidth = colWidths
      .slice(startIndex, startIndex + header.span)
      .reduce((a, b) => a + b, 0);

    return (
      <div
        key={index}
        style={{
          width: totalWidth,
          backgroundColor: header.bgColor,
          
        }}
         className={clsx(
          "h-[32px] px-2 flex items-center text-xs font-semibold",
          header.span === 4 ? "justify-between" : "justify-center",
          header.border === true ? "dashed-vertical-border":""
        )}
      >
        {header.content}
      </div>
    );
  })}
</div>


        {/* Main Header Row */}
        <div className="flex sticky top-[32px] z-20">
          <div className="w-[32px] h-[32px] flex items-center justify-center border-r bg-[#eeeeee] text-[#AFAFAF] text-[16px]">#</div>
          {columns.map((col, index) => (
  <div
    key={col.key}
    style={{ width: colWidths[index], backgroundColor: col.bgColor }}
    className={clsx(
  "relative h-[32px] flex items-center justify-between px-2  text-xs font-semibold text-[#757575]",
  {
    "border-r": index !== columns.length - 2, 
    "dashed-vertical-border border-b bg-[#EEEEEE]": index === columns.length - 1, 
  }
)}

  >
    <div className="flex items-center space-x-1">
      {col.icon}
      <span>{col.label}</span>
    </div>
    {col.hasDropdown && col.dropdownIcon && (
      <div className="cursor-pointer">
        {col.dropdownIcon}
      </div>
    )}
    <div
      onMouseDown={(e) => startResizing(index, e)}
      className="absolute right-0 top-0 h-full w-[4px] cursor-col-resize z-10"
    />
  </div>
))}

        </div>

        {/* Data Rows */}
       {data.map((row, rowIndex) => (
  <div key={rowIndex} className="flex  border-b w-[1406px] bg-white border-gray-200">
    <div className="w-[32px] text-[12px] h-[32px] flex items-center justify-center border-r text-[#757575]">
      {rowIndex + 1}
    </div>
    {columns.slice(0, 10).map((col, colIndex) => {
      const key = col.key as keyof RowData;
      const value = row[key];

      return (
        <div
  key={key as string}
  style={{ width: colWidths[colIndex] }}
  className={clsx(
    "h-[32px] flex items-center",
    colIndex === columns.length - 1
  ? "dashed-vertical-border"
  : colIndex === columns.length - 2
    ? "border-r-0"
    : "border-r",

    {
      "justify-start": columns[colIndex].align === "left",
      "justify-center": columns[colIndex].align === "center",
      "justify-end": columns[colIndex].align === "right",
    }
  )}
>
          {key === "status" ? (
            <div
              className={clsx(
                "px-3 py-1 rounded-full text-[12px] font-medium",
                statusStyleMap[value as StatusType]?.bg,
                statusStyleMap[value as StatusType]?.text
              )}
            >
              {value}
            </div>
          ) : key === "priority" ? (
            <div
              className={clsx(
                "text-[12px] font-semibold",
                priorityStyleMap[value as PriorityType]
              )}
            >
              {value}
            </div>
          ) : key === "estValue" ? (
            <div className="flex items-center justify-end w-full pr-2 space-x-1">
              <span className="text-[12px] text-[#121212]">{value}</span>
              <span className="text-[12px] text-[#AFAFAF]">₹</span>
            </div>
          ) : (
            <input
              ref={(el) => {
                if (!inputRefs.current[rowIndex]) inputRefs.current[rowIndex] = [];
                inputRefs.current[rowIndex][colIndex] = el;
              }}
              className={clsx(
                "bg-transparent text-[12px] text-[#121212] px-2 w-full h-full outline-none truncate",
                {
                  "text-left": columns[colIndex].align === "left",
                  "text-center": columns[colIndex].align === "center",
                  "text-right": columns[colIndex].align === "right",
                }
              )}
              value={value as string}
              onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
              onChange={(e) =>
                handleChange(rowIndex, key, e.target.value as never)
              }
            />
          )}
        </div>
      );
    })}
  </div>
))}

        {/* Blank Rows */}
{[...Array(20)].map((_, i) => {
  const rowIndex = data.length + i;
  return (
    <div key={`empty-${i}`} className="flex h-[32px] bg-white  border-b w-[1406px] border-gray-200">
      <div className="w-[32px] h-9 flex items-center justify-center border-r text-[#757575] text-[12px]">
        {rowIndex + 1}
      </div>
      {columns.map((_, colIndex) => (
        <div
          key={colIndex}
          style={{ width: colWidths[colIndex] }}
          className={clsx(
    " flex items-center",
    colIndex === columns.length - 1
  ? "dashed-vertical-border"
  : colIndex === columns.length - 2
    ? "border-r-0"
    : "border-r",

    {
      "justify-start": columns[colIndex].align === "left",
      "justify-center": columns[colIndex].align === "center",
      "justify-end": columns[colIndex].align === "right",
    }
  )}
        >
          <input
            ref={(el) => {
              if (!inputRefs.current[rowIndex]) inputRefs.current[rowIndex] = [];
              inputRefs.current[rowIndex][colIndex] = el;
            }}
            className="bg-transparent text-black w-full h-full px-2 outline-none truncate"
            onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
            value=""
            onChange={() => {}}
          />
        </div>
      ))}
    </div>
  );
})}

      </div>
    </div>
  );
};

export default AirtableSheet;
