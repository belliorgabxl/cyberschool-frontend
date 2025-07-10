"use client";

import { TeacherTopicReponse } from "@/resource/dto";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  data: TeacherTopicReponse;
  icon_bg: string;
  border_color: string;
  bg_color: string;
  button_color: string;
}

export default function TeacherTopicCard({
  data,
  icon_bg,
  border_color,
  bg_color,
  button_color,
}: Props) {
  return (
    <Link href={"/teacher/"+data.id+"/"+data.title}
      className={`rounded-xl ${border_color} h-full p-5 shadow-md ${bg_color} flex font-sans-serif flex-col justify-between`}
    >
      <div className="space-y-4 flex-grow">
        <div className="flex items-center gap-5">
          <div className={`${icon_bg} text-white rounded-xl p-4 shadow-lg`}>
            <Play />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{data.title}</h2>
            <div className="text-sm text-gray-600">{data.content_text}</div>

            <div className="flex gap-3 items-center">
              <div className="text-xs text-gray-600 mt-1  rounded-2xl w-fit px-4 py-1 bg-gray-200">
                {data.files.length} วิดีโอ
              </div>
              <div className="text-xs text-gray-560 mt-1 bg-white  rounded-2xl w-fit px-4 py-1 border border-gray-400">
                ระดับเริ่มต้น
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {data.files.map((file) => (
            <div
              key={file.id}
              className="flex justify-between items-center px-4 py-3 rounded-md bg-white w-full  hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex items-center gap-4 justify-start">
                <div className="p-3 bg-gray-200 rounded-full">
                  <Play className="w-4 h-4 text-gray-600" />
                </div>
                <div className="grid  ">
                  <h1 className="text-lg">{file.file_name}</h1>
                  <p className=" text-sm text-gray-500">
                    {" "}
                    -- นาที &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -- รับชม
                  </p>
                </div>
              </div>
              <div>
                <ChevronRight className="text-gray-500 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          className={`hover:scale-105 duration-300 w-full py-2 rounded-md  ${button_color}  text-white text-sm font-medium`}
        >
          เริ่มเรียนรู้
        </button>
      </div>
    </Link>
  );
}
