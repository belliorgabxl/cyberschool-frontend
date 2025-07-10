"use client";
import { fetchFileByContentID } from "@/api/files/route";
import { ContentFileResponse } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import TeacherVideoContent from "./TeacherVideoContent";
import { Loader2, Play } from "lucide-react";

interface Props {
  id: string;
}

export default function TeacherContent({ id }: Props) {
  const [datas, setData] = useState<ContentFileResponse[]>([]);
  const [selectedVideo, setSelectedVideo] =
    useState<ContentFileResponse | null>(null);

  useEffect(() => {
    fetchFileByContentID(id).then((d) => {
      const videos = d.filter((item) => item.file_type === "video");
      setData(videos);
      if (videos.length > 0) {
        setSelectedVideo(videos[0]);
      }
    });
  }, [id]);

  return (
    <div className="flex w-full  gap-5 ">
      {selectedVideo ? (
        <div className="w-full ">
          <TeacherVideoContent videoUrl={selectedVideo.file_url} />
        </div>
      ) : (
        <div className="w-full h-full grid place-items-center text-2xl">
          <Loader2 className="w-8 h-8 text-blue-500" />
          Loading...
        </div>
      )}

      <div className="grid gap-3 w-full h-fit">
        {datas.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedVideo(item)}
            className={`cursor-pointer w-full  h-fit p-3 gap-4 rounded-md  flex justify-start items-center shadow-md shadow-gray-300 ${
              selectedVideo?.id === item.id ? "bg-green-100" : "bg-white"
            } hover:outline-2 hover:outline-green-500`}
          >
            <div className="p-3 rounded-full bg-green-500 shadow-md shadow-gray-400  w-fit ">
              <Play className="text-white" />
            </div>
            {item.file_url.split("/").pop()}
          </div>
        ))}
      </div>
    </div>
  );
}
