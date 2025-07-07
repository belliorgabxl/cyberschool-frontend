"use client";
import { JSX, useState } from "react";
import { Play, FileText, HelpCircle, BarChart } from "lucide-react";
import { FileType } from "@/resource/dto";

interface Props {
  onToggle: (type: FileType) => void;
}

const tabs: { type: FileType; icon: JSX.Element; label: string }[] = [
  { type: "video", icon: <Play className="w-4 h-4" />, label: "Video" },
  { type: "info", icon: <FileText className="w-4 h-4" />, label: "Info" },
  {
    type: "question",
    icon: <HelpCircle className="w-4 h-4" />,
    label: "Questions",
  },
  { type: "test", icon: <BarChart className="w-4 h-4" />, label: "Test" },
];

export default function ToggleFileButton({ onToggle }: Props) {
  const [selected, setSelected] = useState<FileType>("video");

  const handleToggle = (type: FileType) => {
    setSelected(type);
    onToggle(type);
  };

  const selectedIndex = tabs.findIndex((tab) => tab.type === selected);
  const translateX = `${selectedIndex * 100}%`;

  return (
    <div className="relative inline-flex w-full border border-gray-200 rounded-lg overflow-hidden text-sm font-medium shadow-sm bg-gray-200">
      <div
        className="absolute inset-y-0 w-1/4 bg-white rounded-lg transition-transform duration-300"
        style={{ transform: `translateX(${translateX})` }}
      />

      <div className="relative z-10 flex w-full">
        {tabs.map((item) => (
          <button
            key={item.type}
            onClick={() => handleToggle(item.type)}
            className={`flex items-center justify-center gap-2 w-1/4 px-4 py-2 transition-colors duration-300 ${
              selected === item.type ? "text-black" : "text-gray-400"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
