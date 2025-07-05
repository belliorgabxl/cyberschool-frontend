"use client";
interface Props {
  data: StudentTopicReponse;
}

import { StudentTopicReponse } from "@/resource/dto";
import React from "react";

export default function StudentTopicCard({ data }: Props) {
  return <div className="bg-white rounded-lg hover:scale-[102%] duration-500 hover:bg-gray-100 p-5 shadow-md grid  cursor-pointer">
    <h1 className="font-prompt font-semibold text-2xl text-gray-700 text-start mb-4">{data.title}</h1>
    <p className="text-gray-500 indent-8 mb-4 line-clamp-3">{data.description}</p>
    <p className="py-1 px-2 text-gray-600 border-gray-300 border rounded-md w-fit">6 บทความ</p>
  </div>;
}
