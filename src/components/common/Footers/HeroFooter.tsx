"use client";
import { Lightbulb, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroFooter() {
  const router = useRouter()
  return (
    <section className="min-h-[350px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl mx-auto text-center text-white space-y-5">
        <div className="flex justify-center gap-5 items-center">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight">
            เริ่มต้นการเรียนรู้วันนี้
          </h1>
        </div>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          กิจกรรมเหล่านี้ได้รับการออกแบบมาเพื่อให้เด็กและเยาวชนเข้าใจถึงความสำคัญของ
          ความปลอดภัยในโลกดิจิทัล
        </p>

        <div className=" w-full grid place-items-center">
          <button className="bg-white flex gap-4 justify-center items-center text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg hover:scale-105 rounded-full h-fit w-fit shadow-lg hover:shadow-xl transition-all duration-200" onClick={()=>{
            router.push("/student/")
          }}>
            เริ่มกิจกรรมแรก
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}