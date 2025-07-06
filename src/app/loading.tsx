import React from "react";

export default function loading() {
  return (
    <div
      className="bg-blue-100 lg:px-10 pb-20"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className=" my-10 py-10 grid place-items-center">
      <h1 className="text-7xl font-extrabold text-blue-900 animate-pulse">Loading...</h1>
      </div>
    </div>
  );
}
