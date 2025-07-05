"use client";
import { fetchAllStudentTopic } from "@/api/topic/route";
import { StudentTopicReponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import StudentTopicCard from "../common/StudentTopicCard";

export default function StudentTopicForm() {
  const [studentTopics, setStudentTopics] = useState<StudentTopicReponse[]>([]);

  useEffect(() => {
    fetchAllStudentTopic().then((data: StudentTopicReponse[]) => {
      setStudentTopics(data);
    });
  }, []);
  return (
    <div className="grid gap-3 place-items-center">
      {studentTopics.map((data) => (
        <div key={data.id} className="w-[90%] lg:w-[50%]">
          <StudentTopicCard data={data} />
        </div>
      ))}
    </div>
  );
}
