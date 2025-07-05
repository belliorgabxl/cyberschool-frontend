"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function SearchInputHomePage() {
  const [searchParams, setSearchParams] = useState<string>("");
  const handleSearch = async()=>{
    alert("Search not available.")
  }
  return (
    <div className="border-2 border-gray-300 w-fit  rounded-md flex items-center ">
      <button onClick={handleSearch} className="px-4"><Search className="w-6 h-6" /></button>
      <input
        className="border-none rounded-r-md px-2 text-lg py-2 focus:outline-2 focus:outline-blue-400 w-[200px] "
        placeholder="ค้นหา..."
        onChange={(e) => setSearchParams(e.target.value)}
        onKeyDown={(e)=>{
          if (e.key == "Enter"){
            handleSearch()
          }  
        }}
        value={searchParams}
      />
    </div>
  );
}
