import HeroFooter from "@/components/common/Footers/HeroFooter";
import TopicHeader from "@/components/common/TopicHeader";
import StudentTopicForm from "@/components/form/StudentTopicForm";
import { GraduationCap } from "lucide-react";
import React from "react";

export default function Student() {
  return (
    <div>
      <div
        className="py-5 px-10  h-full"
        style={{
          backgroundColor: "#dbeafe",
          backgroundImage:
            "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div></div>
        <div className="w-full grid place-items-center mb-2">
          <div className="w-full py-2">
            <TopicHeader
              icon={<GraduationCap className=" text-white w-10 h-10" />}
              header="สำหรับนักเรียน"
              second_header="ความรู้ที่นักเรียนควรรู้และระวัง"
            />
          </div>
        </div>
        <div className="mb-10">
          <StudentTopicForm />
        </div>
      </div>
      <div>
        <HeroFooter />
      </div>
    </div>
  );
}
