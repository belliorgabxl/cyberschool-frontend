import NotAvailableData from "@/components/common/ErrorBox/NotAvailableData";
import Headers from "@/components/common/Headers";
import React from "react";

export default function page() {
  return (
    <div className="py-5 px-10 bg-blue-100">
      <div className="w-full flex py-4 justify-center items-center">
        <Headers header="ข้อมูลการติดต่อ"/>
      </div>
      <div className="grid py-10 place-items-center ">
              <NotAvailableData />
            </div>
    </div>
  );
}
