"use client"

import React from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

const itemCount = 100000;
const itemHeight = 300;
const columnCount = 4;
const containerWidth = 800;


const items = Array.from({ length: itemCount }, (_, index) => `Item ${index + 1}`);

const Row = ({ index, style }: ListChildComponentProps) => {
  const startIndex = index * columnCount;
  const endIndex = Math.min(startIndex + columnCount, items.length);
  const rowItems = items.slice(startIndex, endIndex);

  return (
    <div 
      style={{ ...style, display: "grid", gridTemplateColumns: `repeat(${columnCount}, 1fr)`, gap: "10px", padding: "10px" }}
      className="border-b border-gray-300"
    >
      {rowItems.map((item, idx) => (
        <div key={idx} className="flex flex-col p-4 border rounded-md shadow-md bg-white">
          <div>
            <p className="font-bold">{item}</p>
            <p>Hello World</p>
          </div>
          <div className="flex justify-center items-center h-full">
            <p className="font-bold text-4xl">{item.slice(4,11)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


const VirtualizedGrid: React.FC = () => {
  return (
    <div 
      style={{ width: `${containerWidth}px`, height: "880px", border: "1px solid #ddd" }}
    >
      <List
        height={880}
        itemCount={Math.ceil(itemCount / columnCount)}
        itemSize={itemHeight}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedGrid;