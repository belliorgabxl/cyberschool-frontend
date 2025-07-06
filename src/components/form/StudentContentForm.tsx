"use client";
import React, { useEffect, useState } from "react";
import TopicHeader from "../common/TopicHeader";
import { ScrollIcon } from "lucide-react";
import { fetchContentByTopicANDTypeID } from "@/api/content/route";
import { ContentResponse } from "@/resource/dto";
import MotionContent from "../content/MotionContent";
import VideoContent from "../content/VideoContent";
import ToggleButton from "../common/ToggleButton";
import NotFoundData from "../common/ErrorBox/NotFoundData";

interface Props {
  header: string;
  id: string;
  type: string;
}

export default function StudentContentForm({ header, id, type }: Props) {
  const [contents, setContents] = useState<ContentResponse[]>([]);
  const [types, setTypes] = useState<"1" | "2">(type === "2" ? "2" : "1");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const items = await fetchContentByTopicANDTypeID(id, types);
        setContents(items);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, types]);

  return (
    <div className="w-[70%] pb-10 ">
      {isLoading!= true ? (
        <div>
          {" "}
          <TopicHeader
            icon={<ScrollIcon className="text-white w-10 h-10" />}
            header={header}
            second_header="ความรู้ที่นักเรียนควรรู้และระวัง"
          />
          {contents.length > 0 ? (
            <div>
              <div className="my-4">
                <ToggleButton onToggle={setTypes} />
              </div>
              {types === "1" ? (
                <MotionContent contents={contents} />
              ) : (
                <VideoContent contents={contents} />
              )}
            </div>
          ) : (
            <div className="grid place-items-center my-10 ">
              {" "}
              <NotFoundData />
            </div>
          )}
        </div>
      ) : (
        <div className="grid place-items-center py-20">
          <h1 className="text-7xl font-extrabold text-blue-900 animate-pulse">
            Loading...
          </h1>
        </div>
      )}
    </div>
  );
}
