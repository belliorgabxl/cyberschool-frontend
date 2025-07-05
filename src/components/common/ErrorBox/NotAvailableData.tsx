"use client";
import React from "react";

export default function NotAvailableData() {
  return (
    <div className=" border-4 w-[60%] mb-20 grid place-items-center gap-5 border-gray-400 rounded-lg border-dotted py-10">
      <h1 className="text-3xl text-gray-500 font-Prompt font-semibold">
        ขออภัย
      </h1>
      <h1 className="text-5xl text-gray-600 font-Prompt font-semibold">
        ขณะนี้ยังไม่มีข้อมูล
      </h1>
    </div>
  );
}
