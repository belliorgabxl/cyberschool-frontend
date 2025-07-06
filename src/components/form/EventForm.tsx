"use client";
import { fetchAllTopic } from "@/api/topic/route";
import { TopicResponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import TopicCard from "../common/TopicCard";
import {
  Coins,
  ShieldAlert,
  Bug,
  CreditCard,
  Lock,
  LucideIcon,
} from "lucide-react";

const icons: LucideIcon[] = [Coins, ShieldAlert, Bug, CreditCard, Lock];

export default function EventForm() {
  const [topics, setTopics] = useState<TopicResponse[]>([]);

  useEffect(() => {
    fetchAllTopic().then((d: TopicResponse[]) => {
      setTopics(d);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      {topics.map((items, index) => {
        const IconComponent = icons[index % icons.length];
        return (
          <div key={items.id}>
            <TopicCard
              topic={items.title}
              description={items.description}
              icon={<IconComponent className="w-6 h-6" />}
              amount={1}
              link="/"
            />
          </div>
        );
      })}
    </div>
  );
}
