import BannerHomePage from "@/components/common/Banner";
import HeroFooter from "@/components/common/Footers/HeroFooter";
import RecommendCard from "@/components/common/RecommendCard";
import StudentRecommendCard from "@/components/common/StudentRecommendCard";
import { BookOpen, GraduationCap, PlayIcon, School, Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div
        className="bg-blue-100 lg:px-10 pb-10 h-full"
        style={{
          backgroundColor: "#dbeafe",
          backgroundImage:
            "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="py-5 ">
          <BannerHomePage />
        </div>
        <div className="flex gap-10 w-full mb-5">
          <RecommendCard
            topic_link="/teacher"
            topic="แนะนำสำหรับครู"
            topic_icon={<GraduationCap className="h-8 w-8 text-white" />}
            content={[
              {
                title: "ความรู้สำหรับครูผู้สอน",
                icon: <School className="w-6 h-6 text-white" />,
                bg_icon: "bg-yellow-500",
                border: "border-yellow-300",
                href: "/teacher",
              },
              {
                title: "แนะนำโปรแกรมการเรียนรู้",
                icon: <Star className="w-6 h-6 text-white" />,
                bg_icon: "bg-green-500",
                border: "border-green-300",
                href: "/suggest",
              },
            ]}
          />
          <StudentRecommendCard
            topic_link="/student"
            topic_icon={<BookOpen className="h-8 w-8 text-white" />}
            topic="เนื้อหาสำหรับนักเรียน"
            content={[
              {
                title: "คลิกเข้าไปเพื่อรับชม",
                icon: <PlayIcon className="w-8 h-8 text-white" />,
                bg_icon: "bg-blue-400",
                href: "/student",
              },
            ]}
          />
        </div>
      </div>
      <div className=" ">
        <HeroFooter />
      </div>
    </div>
  );
}
