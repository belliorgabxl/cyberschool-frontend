"use client";
import { LockKeyhole } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#0C243C] px-5 py-10 lg:px-10">
      <div className="grid place-items-center  gap-5 lg:gap-10 lg:justify-center md:justify-center lg:flex md:flex ">
        <div className="flex text-white">
          <div className="rounded-full hidden lg:block md:block sm:block w-fit h-fit bg-white  py-3 px-3">
            <LockKeyhole className="w-18 h-18 text-[#0C243C] "/>
          </div>
          <div className="flex flex-col justify-start  p-2 pl-6 ">
            <span className="sm:text-lg  lg:font-bold lg:text-2xl   line-clamp-1">
              Cyber Safe Kids
            </span>
            <span className="font-Prompt">
              แหล่งความรู้เพื่อความปลอดภัยทางไซเบอร์เพื่อเยาวชน
            </span>
          </div>
        </div>
        <div className="text-white lg:text-start md:text-start text-center lg:w-[350px] md:w-[200px] sm:text-center sm:w-[350px]">
          <div>
            50/12 Rd.Ladprow Prawate Bangkok 10260 Thailand
          </div>
          <div className="mt-2">ติดต่อ : 091-864-9154</div>
        </div>
      </div>
      <div className="text-center  py-4  text-white">
        <p>Cyber Safe Kids & Student Thailand | ©2024 </p>
      </div>
    </div>
  );
}
