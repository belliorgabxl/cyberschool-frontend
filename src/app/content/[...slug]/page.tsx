import Headers from "@/components/common/Headers";
import ContentForm from "@/components/form/ContentForm";
import React from "react";

type PageParams = Promise<{ slug: string[] }>;

export default async function Content({ params }: { params: PageParams }) {
  const { slug: paramArray } = await params;
  const [ID, encodedHeader] = paramArray;
  const header = decodeURIComponent(encodedHeader || "");
  return (
    <div
      className="py-4 px-10 bg-blue-100  h-full"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full flex py-2 justify-center items-center">
        <Headers header="เนื้อหาการเรียนรู้" />
      </div>
      <div className="grid place-items-center w-full">
        <ContentForm id={ID} header={header} />
      </div>
    </div>
  );
}
