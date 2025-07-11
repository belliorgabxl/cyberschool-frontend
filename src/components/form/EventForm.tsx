"use client";

import { Search } from "lucide-react";
import React from "react";
import DocumentCard from "../common/DocumentCard";

export default function EventForm() {
  return (
    <div className="grid  my-5 w-full">
      <div className="grid place-items-center gap-4 mt-8 mb-5">
        <h1 className="text-2xl font-semibold font-prompt ">
          คู่มือและแหล่งข้อมูล
        </h1>
        <p className="text-lg text-gray-500">
          รวบรวมข้อมูลครบถ้วนในรูปแบบ PDF ที่สะดวกต่อการดาวน์โหลดและใช้งาน
        </p>
      </div>
      <div className="my-4 px-10">
        <DocumentCard />
      </div>
    </div>
  );
}
