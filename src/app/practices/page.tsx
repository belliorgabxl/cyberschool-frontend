"use client";

import Headers from "@/components/common/Headers";
import EventForm from "@/components/form/EventForm";
import React from "react";

export default function Page() {

  return (
    <div className="py-5 px-10 bg-blue-100">
      <div className="w-full flex py-4 justify-center items-center">
        <Headers header="แนะนำโปรแกรมการเรียนรู้" />
      </div>
     <EventForm />
    </div>
  );
}
