"use client"
import React from "react";

interface Props {
  header: string;
}

export default function Headers({ header }: Props) {
  return (
    <div className="px-10 text-center bg-white rounded-2xl py-5">
      <h1 className="text-4xl text-blue-900 font-extrabold">{header}</h1>
    </div>
  );
}
