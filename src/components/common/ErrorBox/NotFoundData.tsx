"use client";
import React from "react";

export default function NotFoundData() {
  return (
    <div className=" border-4 w-[60%] mb-20 grid place-items-center border-gray-400 gap-4 rounded-lg border-dotted py-10">
      <h1 className="text-3xl text-gray-500 font-Prompt font-semibold">
        ขออภัย
      </h1>
      <h1 className="text-5xl text-gray-600 font-Prompt font-semibold">
        ไม่พบข้อมูล
      </h1>
    </div>
  );
}
