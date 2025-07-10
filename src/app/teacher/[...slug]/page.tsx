import BackButton from "@/components/common/Button/BackButton";
import React from "react";

type PageParams = Promise<{ slug: string[] }>;

export default async function Page({ params }: { params: PageParams }) {
  const { slug: paramArray } = await params;
  const [id, encodedHeader] = paramArray;
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
      {id}
      <br />
      {header}
    </div>
  );
}
