"use client";
import { useState } from "react";
import { Zap, Play } from "lucide-react";

interface Props {
  onToggle: (type: "1" | "2") => void;
}

export default function ToggleTypeButton({ onToggle }: Props) {
  const [selected, setSelected] = useState<"motion-graphic" | "short-video">(
    "motion-graphic"
  );

  const handleToggle = (type: "motion-graphic" | "short-video") => {
    setSelected(type);
    onToggle(type === "motion-graphic" ? "1" : "2");
  };

  return (
    <div className="relative w-full inline-flex border border-gray-200 rounded-lg overflow-hidden text-sm font-medium shadow-sm bg-gray-300">
      <div
        className="absolute inset-y-0 w-1/2 bg-white rounded-lg transition-transform duration-300"
        style={{
          transform:
            selected === "motion-graphic"
              ? "translateX(0%)"
              : "translateX(100%)",
        }}
      />

      <div className="relative w-full  z-10 flex">
        <button
          onClick={() => handleToggle("motion-graphic")}
          className={`flex justify-center items-center w-full gap-2 px-16 py-2 transition-colors duration-300 ${
            selected === "motion-graphic" ? "text-black" : "text-gray-400"
          }`}
        >
          <Zap className="w-4 h-4" />
          Motion Graphics
        </button>
        <button
          onClick={() => handleToggle("short-video")}
          className={`flex justify-center items-center gap-2 px-16 py-2 w-full transition-colors duration-300 ${
            selected === "short-video" ? "text-black" : "text-gray-400"
          }`}
        >
          <Play className="w-4 h-4" />
          Short Videos
        </button>
      </div>
    </div>
  );
}
