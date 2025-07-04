import BannerHomePage from "@/components/common/Banner";
import NewsCard from "@/components/common/NewsCard";
import SuggestCard from "@/components/common/SuggestCard";
import { File, Joystick, PlayIcon, Puzzle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-blue-100 lg:px-10 pb-20">
      {/* <div className="grid w-full place-items-center my-20">
        <HeaderHomePage/>
      </div> */}
      <div className="py-5 ">
        <BannerHomePage />
      </div>
      {/* <div className="grid grid-cols-3 gap-4 py-5">
        {topics.map((d) => (
          <TopicCard
            key={d.amount}
            topic={d.topic}
            description={d.description}
            icon={d.icon}
            amount={d.amount}
          />
        ))}
      </div> */}
      <div className="flex gap-10 mb-5">
        <SuggestCard
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
        <SuggestCard
          topic="แนะนำสำหรับนักเรียน"
          content={[
            {
              title: "วิดิโอล่าสุดจำลองเหตุการณ์",
              icon: <PlayIcon className="w-8 h-8 text-white" />,
              bg_icon: "bg-blue-800",
              href: "/student/video-situation",
            },
            {
              title: "เกมแบบฝึกหัดความปลอดภัย",
              icon: <Joystick className="w-8 h-8 text-white" />,
              bg_icon: "bg-blue-500",
              href: "/student/game-practice",
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
