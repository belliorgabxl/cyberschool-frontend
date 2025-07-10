"use client";
import { fetchAllStudentTopic } from "@/api/topic/route";
import { StudentTopicReponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import StudentTopicCard from "../common/StudentTopicCard";
import NotFoundData from "../common/ErrorBox/NotFoundData";
import {
  CircleDollarSign,
  VenusAndMars,
  ShieldAlert,
  BookKey,
} from "lucide-react";

const icons = [
  <CircleDollarSign key="lock" className="w-6 h-6 text-white" />,
  <VenusAndMars key="sheid" className="w-6 h-6 text-white" />,
  <ShieldAlert key="book" className="w-6 h-6 text-white" />,
  <BookKey key="triangle" className="w-6 h-6 text-white" />,
];

const themeConfigs = [
  {
    bg_color: "bg-blue-50",
    border_color: "border-blue-400",
    bg_icon: "bg-blue-400",
    from_color: "from-purple-800",
    to_color: "to-sky-400",
  },
  {
    bg_color: "bg-yellow-50",
    border_color: "border-yellow-400",
    bg_icon: "bg-yellow-400",
    from_color: "from-orange-600",
    to_color: "to-amber-400",
  },
  {
    bg_color: "bg-green-50",
    border_color: "border-green-400",
    bg_icon: "bg-green-400",
    from_color: "from-sky-800",
    to_color: "to-emerald-400",
  },
  {
    bg_color: "bg-red-50",
    border_color: "border-red-400",
    bg_icon: "bg-red-400",
    from_color: "from-pink-800",
    to_color: "to-red-400",
  },
];

export default function StudentTopicForm() {
  const [studentTopics, setStudentTopics] = useState<StudentTopicReponse[]>([]);

  useEffect(() => {
    fetchAllStudentTopic().then((data: StudentTopicReponse[]) => {
      setStudentTopics(data);
    });
  }, []);
  return (
    <div>
      {studentTopics.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-3 place-items-center">
          {studentTopics.map((data, index) => {
            const icon = icons[index % icons.length];
            const theme = themeConfigs[index % themeConfigs.length];
            return (
              <div key={data.id} className="w-full">
                <StudentTopicCard
                  data={data}
                  icons={icon}
                  bg_icon={theme.bg_icon}
                  bg_color={theme.bg_color}
                  border_color={theme.border_color}
                  from_color={theme.from_color}
                  to_color={theme.to_color}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid place-items-center">
          <NotFoundData />
        </div>
      )}
    </div>
  );
}
