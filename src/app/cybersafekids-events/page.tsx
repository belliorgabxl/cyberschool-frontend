import Headers from "@/components/common/Headers";
import EventForm from "@/components/form/EventForm";
import React from "react";

export default function page() {
  return (
    <div
      className="py-4 px-10 bg-blue-100 h-full"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full flex py-2 justify-center items-center mb-4">
        <Headers header="กิจกรรมการเรียนรู้" />
      </div>
      {/* <div className="grid grid-cols-3 gap-4 mb-4">
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
      </div> */}
      <EventForm />
    </div>
  );
}
