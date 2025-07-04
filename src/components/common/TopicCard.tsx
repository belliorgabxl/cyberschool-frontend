"use client";
import React, { ReactNode } from "react";

interface TopicCardProps {
  topic: string;
  description: string;
  icon?: ReactNode;
  amount? : number;
}

export default function TopicCard({
  topic,
  description,
  icon,
  amount
}: TopicCardProps) {
  return (
    <div className="py-4 px-5 hover:scale-[102%] hover:bg-gray-100  duration-300  rounded-xl bg-white grid place-items-center gap-3  shadow-md">
      {icon && <span  className="px-2 rounded-full bg-blue-500 py-2 text-white">{icon}</span>}
        <h2 className="text-xl font-bold">{topic}</h2>
      <p className="text-base text-gray-700 line-clamp-1">{description}</p>
      <p className="text-base text-gray-700 py-1 border-1 border-gray-300 rounded-3xl px-4">{amount} ตัวอย่าง</p>
    </div>
  );
}
