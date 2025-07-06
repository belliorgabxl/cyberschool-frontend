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

  useEffect(() => {
    fetchContentByTopicANDTypeID(id, types).then((items) => {
      setContents(items);
    });
  }, [id, types]);

  return (
    <div className="w-[70%] pb-10 ">
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
    </div>
  );
}
