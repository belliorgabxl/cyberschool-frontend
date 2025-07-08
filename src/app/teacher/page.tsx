import NotAvailableData from "@/components/common/ErrorBox/NotAvailableData";
import Headers from "@/components/common/Headers";
import { BookCheck } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div
      className="py-5 px-10 bg-blue-100 h-full"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full flex py-4 justify-center items-center">
        <Headers
          header="ความรู้สำหรับครูผู้สอน"
          icon={<BookCheck className="w-8 h-8 text-blue-600" />}
        />
      </div>
      <div className="grid py-10 place-items-center ">
        <NotAvailableData />
      </div>
    </div>
  );
}
