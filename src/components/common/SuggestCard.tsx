"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  topic: string;
  topic_link : string;
  content: Content[];
}

type Content = {
  title: string;
  icon: React.ReactNode;
  bg_icon: string;
  href: string;
};

export default function RecommendCard({ topic,topic_link, content }: Props) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(topic_link); 
  };

  return (
    <div
      className="px-10 py-5 rounded-2xl bg-white duration-500 cursor-pointer hover:shadow-md"
      onClick={handleCardClick}
    >
      <h1 className="text-3xl text-blue-900 font-Prompt my-3">{topic}</h1>
      <div className="grid grid-cols-2 gap-5">
        {content.map((d, index) => (
          <Link
            href={d.href}
            key={index}
            onClick={(e) => e.stopPropagation()} 
            className="grid duration-500 hover:scale-[105%] gap-3 place-items-center bg-blue-100 rounded-lg py-5 px-4"
          >
            <div className={`rounded-full px-3 py-3 items-center ${d.bg_icon}`}>
              {d.icon}
            </div>
            <div className="text-base">{d.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
