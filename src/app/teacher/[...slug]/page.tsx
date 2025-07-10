import BackButton from "@/components/common/Button/BackButton";
import TeacherContent from "@/components/content/TeacherContent";
import TeacherContentHeader from "@/components/content/TeacherContentHeader";
import { GraduationCap } from "lucide-react";
import React from "react";

type PageParams = Promise<{ slug: string[] }>;

export default async function Page({ params }: { params: PageParams }) {
  const { slug: paramArray } = await params;
  const [id, encodedHeader] = paramArray;
  const header = decodeURIComponent(encodedHeader || "");
  return (
    <div className="py-5 px-10 h-full bg-[#f3f8ff]  ">
      <BackButton />
      <div className="px-10 w-full grid ">
        <div className="w-full mt-4 grid place-items-center">
          <TeacherContentHeader
            icon={<GraduationCap className="text-blue-600 w-8 h-8 " />}
            header={header}
            second_header="รับชมและรับฟังอย่างตั้งใจ เพื่อประโยชน์ของอาจารย์ในการรับมือและป้องกันภัยไซเบอร์"
          />
        </div>
        <div className="my-4">
           <TeacherContent id={id} /> 
        </div>
        
      </div>
    </div>
  );
}
