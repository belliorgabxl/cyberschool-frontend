import { ContentResponse } from "@/resource/dto";
import { Shield, Zap } from "lucide-react";
import React from "react";
import ContentTypeHeader from "./ContentTypeHeader";
import Link from "next/link";
interface Props {
  contents: ContentResponse[];
}
export default function MotionContent({ contents }: Props) {
  return (
    <div>
      <div className="mb-4">
        <ContentTypeHeader
          icon={<Zap className="w-8 h-8" />}
          header="Motion Graphics"
          second_header="Quick motion graphic Content"
        />
      </div>
      <div className="grid gap-4 ">
        {contents.map((d) => (
          <Link
            href={"/content/" + d.id + "/" + d.title}
            key={d.id}
            className="rounded-lg grid shadow-md hover:scale-[102%] hover:bg-gray-100 duration-500  gap-2 bg-white px-5 py-5  "
          >
            <div className="flex justify-start items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                <Shield className="w-6 h-6" />
              </div>

              <h1 className="lg:text-xl text-lg font-prompt font-semibold text-gray-700">
                {d.title}
              </h1>
            </div>

            <p className="text-gray-500  line-clamp-3 indent-8 text-start">
              {d.content_description}
            </p>
            <div className="flex gap-3 items-center text-sm">
              <p className="px-20 py-2 bg-gradient-to-r from-teal-500 to-blue-500 grid place-items-center rounded-lg w-fit text-white">
                เนื้อหาอื่นๆ
              </p>
              <p className="px-2 py-0.5 text-gray-ุ00  grid place-items-center rounded-full border border-gray-300 w-fit">
                3 file
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
