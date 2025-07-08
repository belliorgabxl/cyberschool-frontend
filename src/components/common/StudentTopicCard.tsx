"use client";
interface Props {
  data: TopicResponse;
  bg_icon:string;
  icons: React.ReactNode;
  bg_color: string;
  border_color: string;
  from_color: string;
  to_color: string;
}

import { TopicResponse } from "@/resource/dto";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function StudentTopicCard({
  data,
  icons,
  bg_icon,
  bg_color,
  border_color,
  from_color,
  to_color,
}: Props) {
  return (
    <Link
      href={"/student/" + "/" + data.title + "/" + data.id + "/" + "1"}
      className={` w-full rounded-xl border-2 ${border_color}  ${bg_color} duration-500 py-4 px-5 grid cursor-pointer hover:scale-[102%]`}
    >
      <div className="w-full flex justify-start gap-3 items-center mb-4">
        <div className={`px-2 py-2 ${bg_icon}  tex-white rounded-full shadow-md shadow-gray-400 `}>
          {icons}
        </div>
        <h1 className="font-prompt font-semibold text-2xl text-gray-700 text-start">
          {data.title}
        </h1>
      </div>

      <p className="text-gray-500 indent-8 mb-4 line-clamp-2 break-all text-ellipsis">
        {data.description.slice(0, 130)}...
      </p>
      <div className="flex justify-between items-center">
        <p className="py-1 px-2 text-gray-600 border-gray-300 border rounded-md w-fit">
          6 บทความ
        </p>
        <span className={`flex gap-2 justify-center items-center text-white bg-gradient-to-r ${from_color} ${to_color} hover:from-blue-900 hover:to-sky-500  px-5 py-2 rounded-md`}>
          คลิกเพื่อดูเพิ่มเติม <ArrowRight />
        </span>
      </div>
    </Link>
  );
}
