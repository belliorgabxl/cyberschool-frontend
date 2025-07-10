"use client"

import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <button
      onClick={handleBack}
      className="flex gap-2 py-1 bg-white hover:scale-105 duration-300 hover:bg-gray-300 rounded-lg px-8 items-center justify-center shadow-md"
    >
      <ArrowLeft className="w-5 h-5 text-gray-700" />
      <p>กลับ</p>
    </button>
  );
}
