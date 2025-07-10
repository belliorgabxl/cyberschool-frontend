"use client";
import React from "react";

interface Props {
  icon: React.ReactNode;
  header: string;
  second_header: string;
}

export default function TeacherContentHeader({
  icon,
  header,
  second_header,
}: Props) {
  return (
    <div className="flex bg-white shadow-md border-gray-2000 py-5 px-10  rounded-lg w-full gap-5 justify-start items-center ">
      <div className="rounded-full px-3 py-3 bg-blue-200">{icon}</div>

      <div className="grid ">
        <h1 className="text-2xl text-gray-700 text-start font-Prompt font-bold">
          {header}
        </h1>
        <p className="text-gray-500 text-base text-start">{second_header}</p>
      </div>
    </div>
  );
}
