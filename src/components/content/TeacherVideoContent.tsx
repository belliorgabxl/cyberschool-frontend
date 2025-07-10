"use client";
import React from "react";

interface Props {
  videoUrl: string;
}

export default function TeacherVideoContent({ videoUrl }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden bg-black">
        <video
          controls
          className="w-full h-full object-cover"
          src={videoUrl}
        />
      </div>
    </div>
  );
}
