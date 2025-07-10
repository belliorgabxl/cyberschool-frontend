"use client";
import { fetchAllTeachTopic } from "@/api/topic/route";
import { TeacherTopicReponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import TeacherTopicCard from "../common/TeacherTopicCard";

const themes = [
  {
    icon_bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
    border_color: "border border-blue-300",
    bg_color: "bg-blue-100",
    button_color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    icon_bg: "bg-gradient-to-r from-green-500 to-cyan-500",
    border_color: "border border-green-300",
    bg_color: "bg-green-100",
    button_color: "bg-gradient-to-r from-green-500 to-cyan-500",
  },
  {
    icon_bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    border_color: "border border-purple-300",
    bg_color: "bg-purple-100",
    button_color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    icon_bg:  "bg-gradient-to-r from-orange-500 to-yellow-500",
    border_color: "border border-orange-300",
    bg_color: "bg-orange-100",
    button_color: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
];

export default function TeacherForm() {
  const [datas, setDatas] = useState<TeacherTopicReponse[]>([]);
  useEffect(() => {
    fetchAllTeachTopic().then((items) => {
      setDatas(items);
    });
  }, []);
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2 gap-5 ">
        {datas.map((d, index) => {
          const theme = themes[index % themes.length];
          return (
            <div key={d.id}>
              <TeacherTopicCard
                data={d}
                icon_bg={theme.icon_bg}
                border_color={theme.border_color}
                bg_color={theme.bg_color}
                button_color={theme.button_color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
