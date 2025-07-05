import TopicHeader from "@/components/common/TopicHeader";
import StudentTopicForm from "@/components/form/StudentTopicForm";
import { ScrollIcon } from "lucide-react";
import React from "react";

export default function Student() {
  return (
    <div className="py-5 px-10 bg-blue-100">
      <div></div>
      <div className="w-full grid place-items-center mb-2">
        <div className="w-[50%] py-4">
          <TopicHeader
            icon={<ScrollIcon className=" text-white w-10 h-10" />}
            header="สำหรับนักเรียน"
            second_header="ความรู้ที่นักเรียนควรรู้และระวัง"
          />
        </div>
      </div>
      <div className="">
        <StudentTopicForm />
      </div>
    </div>
  );
}
