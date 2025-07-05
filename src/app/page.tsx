import BannerHomePage from "@/components/common/Banner";
import NewsCard from "@/components/common/NewsCard";
import RecommendCard from "@/components/common/SuggestCard";
import { File, Joystick, PlayIcon, Puzzle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-blue-100 lg:px-10 pb-20">
      <div className="py-5 ">
        <BannerHomePage />
      </div>
      <div className="flex gap-10 mb-5">
        <RecommendCard
          topic_link="/teacher"
          topic="แนะนำสำหรับครู"
          content={[
            {
              title: "ดาวน์โหลดแผนการสอน",
              icon: <File className="w-8 h-8 text-white" />,
              bg_icon: "bg-yellow-500",
              href: "/teacher/schedule-plane",
            },
            {
              title: "กิจกรรมในห้องเรียน",
              icon: <Puzzle className="w-8 h-8 text-white" />,
              bg_icon: "bg-green-500",
              href: "/teacher/event-class",
            },
          ]}
        />
        <RecommendCard
        topic_link="/student"
          topic="แนะนำสำหรับนักเรียน"
          content={[
            {
              title: "วิดิโอล่าสุดจำลองเหตุการณ์",
              icon: <PlayIcon className="w-8 h-8 text-white" />,
              bg_icon: "bg-blue-800",
              href: "/student",
            },
            {
              title: "เกมแบบฝึกหัดความปลอดภัย",
              icon: <Joystick className="w-8 h-8 text-white" />,
              bg_icon: "bg-blue-500",
              href: "/student",
            },
          ]}
        />
      </div>
      <div className="">
        <NewsCard />
      </div>
    </div>
  );
}
