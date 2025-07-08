import HeroFooter from "@/components/common/Footers/HeroFooter";
import Headers from "@/components/common/Headers";
import EventForm from "@/components/form/EventForm";
import { BookOpen } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="py-4 px-10 bg-blue-100 h-full"
        style={{
          backgroundColor: "#dbeafe",
          backgroundImage:
            "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="w-full flex py-2 justify-center items-center mb-4">
          <Headers
            header="กิจกรรมการเรียนรู้"
            icon={<BookOpen className="h-8 w-8 text-blue-600" />}
          />
        </div>
        <EventForm />
      </div>
      <div className=" ">
        <HeroFooter />
      </div>
    </div>
  );
}
