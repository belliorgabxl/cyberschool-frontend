import Headers from "@/components/common/Headers";
import React from "react";

export default function Content() {
  return (
    <div className="py-10 px-10 bg-blue-100"
    style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}>
      <div className="w-full flex py-4 justify-center items-center">
        <Headers header="เนื้อการกาเรียนรู้"/>
      </div>
      <div></div>
    </div>
  );
}
