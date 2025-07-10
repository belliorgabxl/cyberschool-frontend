"use client";

import { Search } from "lucide-react";
import React  from "react";
import DocumentCard from "../common/DocumentCard";

export default function KnowlegdeForm() {


  return (
    <div className="grid  my-5 w-full">
      <div className="flex w-full items-center justify-center gap-5">
        <input
          className="border-2 border-blue-200 bg-white rounded-xl px-4  text-lg py-2 focus:outline-2 focus:outline-blue-400 w-[300px] "
          placeholder="ค้นหาเอกสารได้ที่นี่..."
        />
        <button className="px-6  flex gap-2 justify-center items-center bg-white rounded-lg  py-2 shadow-sm border border-gray-200 hover:bg-gray-200">
          <Search className="w-6 h-6" />
          ค้นหาข้อมูล
        </button>
      </div>

      <div className="grid place-items-center gap-4 mt-8 mb-5">
        <h1 className="text-2xl font-semibold font-prompt ">
          คู่มือและไดเรกทอรีแหล่งข้อมูล
        </h1>
        <p className="text-lg text-gray-500">รวบรวมข้อมูลครบถ้วนในรูปแบบ PDF ที่สะดวกต่อการดาวน์โหลดและใช้งาน</p>
      </div>
      <div className="my-4 px-10">
        <DocumentCard/>
      </div>
      
    </div>
  );
}
