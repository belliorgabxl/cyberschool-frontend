"use client";

import Headers from "@/components/common/Headers";
import EventForm from "@/components/form/EventForm";
import { CircleCheck } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="py-4 px-10 bg-[#f3f8ff]">
      <div className="w-full py-2 grid place-items-center gap-4">
        <Headers
          header="แนะนำโปรแกรมการเรียนรู้"
          icon={<CircleCheck className="w-8 h-8 text-blue-600" />}
        />
        <p className="text-lg my-4 w-full text-center font-prompt text-gray-500">
          ดาวน์โหลดคู่มือและไดเรกทอรีแหล่งข้อมูลด้านความปลอดภัยไซเบอร์
          จากหน่วยงานภาครัฐ สถาบันการศึกษา และองค์กรต่างๆ
        </p>
      </div>
      <EventForm />
    </div>
  );
}
