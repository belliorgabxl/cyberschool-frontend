import { NavBarData } from "@/resource/NavbarData";
import { LockKeyhole } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const navData = NavBarData;
  return (
    <div className="w-full fixed flex z-50 bg-white item-center top-0 right-0 left-0 h-20 px-5 border-b-1  border-gray-200">
      <div className="grid grid-cols-[35%_65%] w-full">
        <Link href={"/"} className="px-10 flex gap-5 items-center">
          <span className="bg-blue-900 rounded-full px-3 py-3 grid place-items-center ">
            <LockKeyhole className="w-8 h-8  text-white" />
          </span>
          <h1 className="font-Prompt text-2xl text-blue-900">CyberSafeKids</h1>
        </Link>

        <div className="text-blue-900 flex items-center justify-center">
          {navData.map((d) => (
            <Link key={d.id} href={d.href} className="h-full px-10 hover:bg-blue-900  hover:text-white duration-700 items-center flex ">
              {d.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
