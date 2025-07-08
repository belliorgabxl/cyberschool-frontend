"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  url: string;
}

export default function ImageContentFile({ url }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden rounded-md cursor-pointer">
        <Image
          src={url}
          alt="CyberSafeKids"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-contain hover:scale-[102%] duration-300"
          onClick={handleOpen}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={url}
              alt="Full View"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
