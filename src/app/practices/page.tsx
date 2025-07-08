"use client";

import Headers from "@/components/common/Headers";
import EventForm from "@/components/form/EventForm";
import { CircleCheck } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div
      className="py-4 px-10 bg-blue-100"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full flex py-2 justify-center items-center">
        <Headers
          header="แนะนำโปรแกรมการเรียนรู้"
          icon={<CircleCheck className="w-8 h-8 text-blue-600" />}
        />
      </div>
      <EventForm />
    </div>
  );
}
