"use client";
import React from "react";
import SearchInputHomePage from "./SearchInputHomePage";
import Image from "next/image";

export default function BannerHomePage() {
  return (
    <div className="rounded-2xl  bg-white overflow-hidden flex justify-between items-start">
      <div className="px-16 py-10  grid gap-5">
        <h1 className="text-start text-7xl text-blue-900  font-extrabold">
          เด็กปลอดภัยไซเบอร์
          <br />
          คืออนาคตที่ดี
        </h1>
        <p className="text-3xl text-black font-prompt">
          ครูพร้อมสอน เด็กพร้อมป้องกัน
        </p>
        <SearchInputHomePage />
      </div>
      <div className="flex overflow-hidden">
        <Image
          src="/asset/banner-1.jpg"
          alt="CyberSafeKids Banner"
          height={100}
          width={250}
          className="hover:scale-105 duration-500"
        />
        <Image
          src="/asset/banner-2.jpg"
          alt="CyberSafeKids Banner"
          height={250}
          width={240}
          className="hover:scale-105 duration-500"
        />
        <Image
          src="/asset/banner-3.jpg"
          alt="CyberSafeKids Banner"
          height={100}
          width={240}
          className="hover:scale-105 duration-500"
        />
      </div>
    </div>
  );
}
