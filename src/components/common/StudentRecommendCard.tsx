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
  href: string;
};

export default function StudentRecommendCard({
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
      <div className="flex gap-5 justify-start items-center mb-4">
        <p className="px-3 py-3 grid place-items-center rounded-full bg-purple-700">
          {topic_icon}
        </p>
        <h1 className="text-3xl text-blue-900 font-Prompt my-3 flex gap-3 items-center justify-start">
          {topic}
        </h1>
      </div>

      <div className="grid  gap-3">
        {content.map((d, index) => (
          <Link
            href={d.href}
            key={index}
            onClick={(e) => e.stopPropagation()}
            className={`grid duration-500 hover:scale-[105%] gap-3 place-items-center bg-gradient-to-r  from-[#2562ea] to-[#4e46e5] shadow-md rounded-lg py-5 px-8 `}
          >
            <div className="flex justify-center items-center gap-5 w-full">
              <div
                className={`rounded-full px-3 py-3 items-center ${d.bg_icon}`}
              >
                {d.icon}
              </div>
              <div className="text-xl text-white">{d.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
