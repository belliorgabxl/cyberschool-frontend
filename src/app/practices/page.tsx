"use client";

import { fetchAllStudentTopic } from "@/api/topic/route";
import NotFoundData from "@/components/common/ErrorBox/NotFoundData";
import Headers from "@/components/common/Headers";
import { StudentTopicReponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [datas, setData] = useState<StudentTopicReponse[]>([]);
  useEffect(() => {
    fetchAllStudentTopic().then((items: StudentTopicReponse[]) => {
      setData(items);
    });
  }, []);
  return (
    <div className="py-5 px-10 bg-blue-100">
      <div className="w-full flex py-4 justify-center items-center">
        <Headers header="แนะนำโปรแกรมการเรียนรู้" />
      </div>
      {datas.length > 0 ? (
        <div>
          {" "}
          {datas.map((item) => (
            <div
              key={item.id}
              className="rounded-lg py-10 px-10 flex justify-center items-center bg-blue-50"
            >
              {item.title}
            </div>
          ))}
        </div>
      ) : (
        <div className="pb-20 grid place-items-center">
          <NotFoundData />
        </div>
      )}
    </div>
  );
}
