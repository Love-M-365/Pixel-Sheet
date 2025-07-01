import React, { useState, useRef, useEffect } from 'react';

type Cell = string;
type SpreadsheetData = Cell[][];

const ROWS = 10;
const COLS = 8;

const Spreadsheet: React.FC = () => {
  const [data, setData] = useState<SpreadsheetData>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(''))
  );
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (row: number, col: number, value: string) => {
    const updated = [...data];
    updated[row][col] = value;
    setData(updated);
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    const move = (newRow: number, newCol: number) => {
      if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
        setActiveCell({ row: newRow, col: newCol });
      }
    };

    switch (e.key) {
      case 'ArrowUp':
        move(row - 1, col);
        break;
      case 'ArrowDown':
        move(row + 1, col);
        break;
      case 'ArrowLeft':
        move(row, col - 1);
        break;
      case 'ArrowRight':
      case 'Tab':
        e.preventDefault();
        move(row, col + 1);
        break;
      case 'Enter':
        move(row + 1, col);
        break;
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeCell]);

  return (
    <div className="overflow-x-auto p-4 w-full">
  <div className="border border-gray-300 rounded-md w-full">
    {data.map((rowData, row) => (
      <div className="flex w-full" key={row}>
        {rowData.map((cell, col) => {
          const isActive = activeCell?.row === row && activeCell?.col === col;

          return (
            <div
              key={col}
              className={`border border-gray-300 flex-1 min-w-[100px] h-10 flex items-center justify-center px-1 ${
                isActive ? 'bg-blue-100 outline outline-blue-500' : 'bg-white'
              }`}
              onClick={() => setActiveCell({ row, col })}
            >
              {isActive ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={cell}
                  className="w-full h-full bg-blue-50 focus:outline-none text-center"
                  onChange={(e) => handleChange(row, col, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, row, col)}
                  onBlur={() => setActiveCell(null)}
                />
              ) : (
                <span>{cell}</span>
              )}
            </div>
          );
        })}
      </div>
    ))}
  </div>
</div>

  );
};

export default Spreadsheet;
