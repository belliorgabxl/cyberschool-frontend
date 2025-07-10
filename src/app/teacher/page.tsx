
import Headers from "@/components/common/Headers";
import TeacherForm from "@/components/form/TeacherForm";
import { BookCheck, Search } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="py-5 px-10 bg-[#f3f8ff] h-full">
      <div className="w-full flex py-4 justify-center items-center">
        <Headers
          header="ความรู้สำหรับครูผู้สอน"
          icon={<BookCheck className="w-8 h-8 text-blue-600" />}
        />
      </div>

      <div className="w-full mb-5">
        <p className="text-center text-gray-500  text-lg">
          เสริมสร้างความรู้และทักษะในการสอนเรื่องความปลอดภัยในโลกไซเบอร์ให้กับนักเรียน
        </p>
      </div>

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

      <div className="px-10 py-5 ">
        <TeacherForm />
      </div>
    </div>
  );
}
