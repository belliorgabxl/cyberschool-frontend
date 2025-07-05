import Headers from "@/components/common/Headers";
import TopicCard from "@/components/common/TopicCard";
import { TopicData } from "@/resource/TopicData";
import React from "react";

export default function page() {
  const topics = TopicData;

  return (
    <div className="py-4 px-10 bg-blue-100">
      <div className="w-full flex py-2 justify-center items-center mb-4">
        <Headers header="กิจกรรมการเรียนรู้"/>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {topics.map((items) => (
          <div key={items.topic}>
            <TopicCard
              topic={items.topic}
              description={items.description}
              icon={items.icon}
              amount={items.amount}
              link="/"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
