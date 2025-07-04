"use client";

import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    content: "ข่าวสาร 1 ",
  },
  {
    id: 2,
    content: "ข่าวสาร 2 ",
  },
  {
    id: 3,
    content: "ข่าวสาร 3 ",
  },
  {
    id: 4,
    content: "ข่าวสาร 4 ",
  },
  {
    id: 5,
    content: "ข่าวสาร 5 ",
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
            <h1 className="text-blue-900 font-bold">{d.content}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              totam dolore enim sit repellendus, veniam nulla possimus odio
              dicta. Eos ratione illo quod, culpa in eum ad minima minus ducimus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              natus, aperiam nesciunt excepturi saepe quo. Minus, neque?
              Voluptates necessitatibus soluta architecto! Doloremque neque,
              iusto voluptates delectus adipisci qui expedita numquam!...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
