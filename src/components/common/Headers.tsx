"use client"
import React from "react";

interface Props {
  header: string;
  icon? : React.ReactNode; 
}

export default function Headers({ header,icon }: Props) {
  return (
    <div className="px-10 text-center bg-white rounded-full shadow-md py-3 flex items-center justify-center gap-4">
      {icon}
      <h1 className="text-4xl text-blue-900 font-extrabold">{header}</h1>
    </div>
  );
}
