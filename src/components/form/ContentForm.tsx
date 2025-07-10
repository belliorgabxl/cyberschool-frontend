"use client";

import { fetchFileByContentID } from "@/api/files/route";
import { ContentFileResponse, FileType } from "@/resource/dto";
import React, { useEffect, useState } from "react";
import ToggleFileButton from "../common/Button/ToggleFileButton";
import ContentTypeHeader from "../content/ContentTypeHeader";
import { FileBox } from "lucide-react";
import VideoContentFile from "../files/VideoContentFile";
import ImageContentFile from "../files/ImageContentFile";
import PDFContentFile from "../files/PDFContentFile";
import SkeletonContent from "./SkeletonContent";

interface Props {
  id: string;
  header: string;
}

export default function ContentForm({ id, header }: Props) {
  const [files, setFiles] = useState<ContentFileResponse[]>([]);
  const [selectedType, setSelectedType] = useState<FileType>("video");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFileByContentID(id).then((d) => {
      setFiles(d);
      setIsLoading(false);
    });
  }, [id]);

  const filteredFiles = files.filter((file) => file.file_type === selectedType);

  return (
    <div>
      <div className=" w-[1000px]">
        <ContentTypeHeader
          icon={<FileBox className="w-8 h-8" />}
          header={header}
          second_header="เนื้อหาสำหรับการเรียนรู้ของนักเรียน"
        />
      </div>

      <div className="my-4 w-[1000px]">
        <ToggleFileButton onToggle={(type) => setSelectedType(type)} />
      </div>

      <div className=" ">
        {isLoading
          ? Array(2)
              .fill(null)
              .map((_, i) => <SkeletonContent key={i} />)
          : filteredFiles.map((file) => (
              <div key={file.id} className="w-full max-w-[1000px] mx-auto ">
                {file.file_type === "video" && (
                  <VideoContentFile url={file.file_url} />
                )}
                {(file.file_type === "info" || file.file_type === "test") && (
                  <ImageContentFile url={file.file_url} />
                )}
                {file.file_type === "question" && (
                  <PDFContentFile url={file.file_url} />
                )}
              </div>
            ))}
      </div>
    </div>
  );
}
