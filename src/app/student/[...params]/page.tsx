import BackButton from "@/components/common/BackButton";
import StudentContentForm from "@/components/form/StudentContentForm";
import React from "react";

export default function Page({ params }: { params: { params: string[] } }) {
  const encodedHeader = params.params[0];
  const id = params.params[1];
  const type = params.params[2];
  const header = decodeURIComponent(encodedHeader || "");
  return (
    <div
      className="py-5 px-10  "
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <BackButton />
      <div className="w-full my-5 grid place-items-center mb-2">
        <StudentContentForm id={id} header={header} type={type} />
      </div>
    </div>
  );
}
