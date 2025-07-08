"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  topic: string;
  topic_link: string;
  topic_icon: React.ReactNode;
  content: Content[];
}

type Content = {
  title: string;
  icon: React.ReactNode;
  bg_icon: string;
  border: string;
  href: string;
};

export default function RecommendCard({
  topic,
  topic_link,
  topic_icon,
  content,
}: Props) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(topic_link);
  };

  return (
    <div
      className="px-10 w-full py-5 rounded-2xl bg-white duration-500 cursor-pointer hover:shadow-md"
      onClick={handleCardClick}
    >
      <h1 className="text-3xl text-blue-900 font-Prompt my-3 flex gap-3 items-center justify-start">
        <p className="px-3 py-3  rounded-full bg-blue-700">{topic_icon}</p>{" "}
        {topic}
      </h1>
      <div className="grid  gap-3">
        {content.map((d, index) => (
          <Link
            href={d.href}
            key={index}
            onClick={(e) => e.stopPropagation()}
            className={`grid duration-500 hover:scale-[105%] gap-3 place-items-center bg-white border-2 rounded-lg py-2 px-8 ${d.border}`}
          >
            <div className="flex justify-start items-center gap-5 w-full">
              <div
                className={`rounded-full px-3 py-3 items-center ${d.bg_icon}`}
              >
                {d.icon}
              </div>
              <div className="text-base">{d.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
