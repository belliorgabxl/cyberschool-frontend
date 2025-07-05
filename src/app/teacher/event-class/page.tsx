"use client";
import Headers from "@/components/common/Headers";
import TopicCard from "@/components/common/TopicCard";
import { TopicData } from "@/resource/TopicData";
import React from "react";

const data = TopicData;

export default function page() {
  const topics = data;
  return (
    <div className="py-4 px-10 bg-blue-100">
      <div className="w-full flex py-2 justify-center items-center">
       <Headers header="กิจกรรมในห้องเรียน"/>
      </div>
      <div className="grid grid-cols-3 gap-4 py-5">
        {topics.map((d) => (
          <TopicCard
          link="/"
            key={d.amount}
            topic={d.topic}
            description={d.description}
            icon={d.icon}
            amount={d.amount}
          />
        ))}
      </div>
    </div>
  );
}
