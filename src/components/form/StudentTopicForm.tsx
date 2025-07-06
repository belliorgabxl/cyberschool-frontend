"use client";
import { fetchAllTopic } from "@/api/topic/route";
import { TopicResponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import StudentTopicCard from "../common/StudentTopicCard";
import NotFoundData from "../common/ErrorBox/NotFoundData";

export default function StudentTopicForm() {
  const [studentTopics, setStudentTopics] = useState<TopicResponse[]>([]);

  useEffect(() => {
    fetchAllTopic().then((data: TopicResponse[]) => {
      setStudentTopics(data);
    });
  }, []);
  return (
    <div>
      {studentTopics.length > 0 ? (
        <div className="grid gap-3 place-items-center">
          {studentTopics.map((data) => (
            <div key={data.id} className="w-[90%] lg:w-[60%]">
              <StudentTopicCard data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid place-items-center">
          <NotFoundData />
        </div>
      )}
    </div>
  );
}
