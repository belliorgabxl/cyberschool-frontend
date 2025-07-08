import { NavBarData } from "@/resource/NavbarData";
import { LockKeyhole, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const navData = NavBarData;
  return (
    <div className="w-full fixed flex z-50 bg-white items-center top-0 right-0 left-0 h-20 px-5 border-b border-gray-200">
      <div className=" flex justify-between px-2 lg:px-0 lg:grid lg:grid-cols-[35%_65%]  md:grid-cols-[30%_70%] w-full items-center">
        <Link href="/" className="flex gap-5 items-center px-5">
          <span className="bg-blue-900 rounded-full p-3 grid place-items-center">
            <LockKeyhole className="w-8 h-8 text-white" />
          </span>
          <h1 className="font-Prompt text-xl md:text-2xl text-blue-900">
            CyberSafeKids
          </h1>
        </Link>

        <div className="hidden md:flex lg:flex lg:gap-5 md:gap-0 justify-center items-center">
          {navData.map((d) => (
            <Link
              key={d.id}
              href={d.href}
              className="text-black px-6 hover:text-blue-600 items-center flex"
            >
              <p className="line-clamp-1">{d.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex md:hidden justify-end items-center">
          <button className="hover:text-blue-600 active:text-blue-600">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
