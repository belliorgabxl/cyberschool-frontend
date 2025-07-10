import HeroFooter from "@/components/common/Footers/HeroFooter";
import Headers from "@/components/common/Headers";
import StudentTopicForm from "@/components/form/StudentTopicForm";
import { BookOpen } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="py-4 px-10 bg-[#f3f8ff] h-full">
        <div className="w-full flex py-2 justify-center items-center mb-4">
          <Headers
            header="กิจกรรมการเรียนรู้"
            icon={<BookOpen className="h-8 w-8 text-blue-600" />}
          />
        </div>
      </div>
      <div className="px-10 pb-10">
        <StudentTopicForm />
      </div>

      <div className=" ">
        <HeroFooter />
      </div>
    </div>
  );
}
