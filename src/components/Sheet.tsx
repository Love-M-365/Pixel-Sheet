import React, { useState } from "react";
import clsx from "clsx";


type StatusType = "In-process" | "Complete" | "Blocked" | "Yet to start";
type PriorityType = "High" | "Medium" | "Low";

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
  "Complete": "bg-green-100 text-green-800",
  "Blocked": "bg-red-100 text-red-800",
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
   <div className="w-screen h-screen overflow-auto bg-gray-50 fixed top-14 left-3" style={{ marginTop: "6rem" }}>
  <div className="min-w-[990px]">
    {/* Header */}
    <div className="grid grid-cols-[2rem_repeat(10,130px)] sticky top-0 bg-white text-gray-500 border-b border-gray-300 z-10 text-[9px]">
      <div className="h-8 flex items-center justify-center font-medium bg-gray-100 border-r">#</div>
      {[
        "Job Request",
        "Submitted",
        "Status",
        "Submitter",
        "URL",
        "Assigned",
        "Priority",
        "Due Date",
        "Est. Value",
        "", // Plus icon
      ].map((col, i) => (
        <div key={i} className="h-8 px-0.5 flex items-center font-semibold border-r truncate">
          {col || <span className="text-xs font-bold">+</span>}
        </div>
      ))}
    </div>

    {/* Rows */}
    {data.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="grid grid-cols-[2rem_repeat(10,130px)] border-b border-gray-200 bg-white hover:bg-gray-50 text-[9px]"
      >
        <div className="h-8 flex items-center justify-center text-gray-500 border-r bg-gray-100">
          {rowIndex + 1}
        </div>

        <input className="h-8 px-0.5 border-r outline-none bg-transparent truncate" value={row.request} onChange={(e) => handleChange(rowIndex, "request", e.target.value)} />
        <input className="h-8 px-0.5 border-r outline-none bg-transparent truncate" value={row.submitted} onChange={(e) => handleChange(rowIndex, "submitted", e.target.value)} />
        <div className="h-8 px-0.5 border-r flex items-center truncate">
          <span className={clsx("text-[9px] font-medium px-1 py-0.5 rounded-full", statusColorMap[row.status])}>
            {row.status}
          </span>
        </div>
        <input className="h-8 px-0.5 border-r outline-none bg-transparent truncate" value={row.submitter} onChange={(e) => handleChange(rowIndex, "submitter", e.target.value)} />
        <input className="h-8 px-0.5 border-r outline-none bg-transparent text-blue-600 underline truncate" value={row.url} onChange={(e) => handleChange(rowIndex, "url", e.target.value)} />
        <input className="h-8 px-0.5 border-r outline-none bg-transparent truncate" value={row.assigned} onChange={(e) => handleChange(rowIndex, "assigned", e.target.value)} />
        <div className="h-8 px-0.5 border-r flex items-center font-semibold truncate">
          <span className={clsx(priorityColorMap[row.priority])}>{row.priority}</span>
        </div>
        <input className="h-8 px-0.5 border-r outline-none bg-transparent truncate" value={row.dueDate} onChange={(e) => handleChange(rowIndex, "dueDate", e.target.value)} />
        <div className="h-8 px-0.5 border-r flex items-center truncate">{row.estValue} ₹</div>

        {/* Plus column */}
        <div className="h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 border-r cursor-pointer">
          +
        </div>
      </div>
    ))}
   {[...Array(8)].map((_, i) => {
  const rowIndex = data.length + i;
  return (
    <div
      key={`empty-${i}`}
      className="grid grid-cols-[2rem_repeat(10,130px)] border-b border-gray-200 bg-white hover:bg-gray-50 text-[9px]"
    >
      <div className="h-8 flex items-center justify-center text-gray-500 border-r bg-gray-100">
        {rowIndex + 1}
      </div>

      {[
        "request",
        "submitted",
        "status",
        "submitter",
        "url",
        "assigned",
        "priority",
        "dueDate",
        "estValue",
        "add",
      ].map((col, colIndex) => (
        <input
          key={colIndex}
          className="h-8 px-0.5 border-r outline-none bg-transparent truncate"
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
