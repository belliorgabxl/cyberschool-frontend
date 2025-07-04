"use client";
import TopicCard from "@/components/common/TopicCard";
import { TopicData } from "@/resource/TopicData";
import React from "react";

const data = TopicData;

export default function page() {
  const topics = data;
  return (
    <div className="py-10 px-10 bg-blue-100">
      <div className="w-full flex py-4 justify-center items-center">
        <div className="px-10 text-center bg-white rounded-2xl py-10">
          <h1 className="text-4xl text-blue-900 font-extrabold">
            วิดิโอล่าสุดจำลองเหตุการณ์
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-5">
        {topics.map((d) => (
          <TopicCard
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
