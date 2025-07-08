import React from "react";

interface Props {
  icon: React.ReactNode;
  header: string;
  second_header: string;
}

export default function TopicHeader({ icon, header, second_header }: Props) {
  return (
    <div className="flex bg-white rounded-lg w-fit px-5 py-2 gap-2 justify-start items-center">
      <div className="rounded-full px-2 py-2 bg-blue-600 shadow-md shadow-gray-400">{icon}</div>

      <div className="grid ">
        <h1 className="text-4xl text-gray-700 text-start font-Prompt font-extrabold">
          {header}
        </h1>
        <p className="text-gray-500 text-base text-start">{second_header}</p>
      </div>
    </div>
  );
}
