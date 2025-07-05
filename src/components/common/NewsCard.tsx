"use client";

import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    content: "เปิดโลกการเรียนรู้ผ่านกิจกรรมวันวิทยาศาสตร์",
  },
  {
    id: 2,
    content: "แนะนำหลักสูตรใหม่ตอบโจทย์ทักษะแห่งอนาคต",
  },
  {
    id: 3,
    content: "นักเรียนคว้ารางวัลการแข่งขันระดับประเทศ",
  },
  {
    id: 4,
    content: "เวิร์กช็อปเสริมสร้างทักษะอาชีพสำหรับนักเรียน",
  },
  {
    id: 5,
    content: "แจ้งกำหนดการสอบปลายภาคเรียนที่ 1",
  },
];


export default function NewsCard() {
  return (
    <div className="pt-5 pb-10 px-10 bg-white rounded-2xl ">
      <h1 className="text-3xl font-Prompt py-4 text-blue-800">
        ข่าวสาร/อบรมครู
      </h1>
      <div className="grid gap-5 ">
        {data.map((d) => (
          <Link
            href={"/"}
            key={d.id}
            className="bg-blue-100 py-10 px-5 hover:bg-white/30 duration-300  rounded-lg "
          >
            <h1 className="text-blue-900 text-xl font-bold mb-3" >{d.content}</h1>
            <p className="text-base leading-relaxed text-gray-700 indent-8 mb-4">
             โรงเรียนบริหารธุรกิจจัดกิจกรรมวันวิทยาศาสตร์ ประจำปี 2568 เมื่อวันที่ 18 สิงหาคมที่ผ่านมา โดยมีกิจกรรมมากมายให้นักเรียนได้เข้าร่วม เช่น การประกวดโครงงานวิทยาศาสตร์ การแข่งขันตอบปัญหา และการจัดนิทรรศการจากชมรมวิทยาศาสตร์ของแต่ละระดับชั้น ซึ่งได้รับความสนใจจากนักเรียนและครูเป็นจำนวนมาก กิจกรรมนี้มีวัตถุประสงค์เพื่อส่งเสริมความคิดสร้างสรรค์ และกระตุ้นให้นักเรียนเห็นความสำคัญของวิทยาศาสตร์ในชีวิตประจำวัน...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
