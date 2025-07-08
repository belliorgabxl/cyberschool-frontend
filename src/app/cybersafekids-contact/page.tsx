"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  MessageCircleMore,
  Instagram,
} from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <div
      className="py-4 px-6 md:px-20 bg-blue-100 h-full pb-20"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "linear-gradient(#d7d7d7 1px, transparent 1px), linear-gradient(90deg, #d7d7d7 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full flex justify-center mb-5">
        <div className="bg-white px-8 py-3 rounded-2xl shadow text-blue-900 text-3xl font-bold">
          ข้อมูลการติดต่อ
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white max-w-3xl mx-auto rounded-xl shadow-md p-8 space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-blue-800 mt-1" />
          <div>
            <p className="font-semibold text-gray-700">ที่อยู่:</p>
            <p>123 หมู่ 5 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-blue-800 mt-1" />
          <div>
            <p className="font-semibold text-gray-700">เบอร์โทร:</p>
            <p>091-864-9154</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-blue-800 mt-1" />
          <div>
            <p className="font-semibold text-gray-700">อีเมล:</p>
            <p>patara1919@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Facebook className="w-6 h-6 text-blue-800 mt-1" />
          <div>
            <p className="font-semibold text-gray-700">Facebook:</p>
            <a
              href="https://www.facebook.com/misschool33e"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIS-School Software for school kids
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MessageCircleMore className="w-8 h-8 text-white bg-green-500 px-1 py-1 rounded-full" />
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-gray-700">LINE:</p>
            <p>gabell19</p>
          </div>
          <Instagram className="ml-10 w-8 h-8 text-white bg-gradient-to-br from-orange-300 via-pink-500 to-purple-600 px-1 py-1 rounded-lg" />
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-gray-700">Instagrams: </p>
            <p>gabxl_npk</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0760985162907!2d99.96414897509507!3d8.420637796720616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3053011504b00001%3A0x2da58306a4bc8a6!2sMIS%20School!5e0!3m2!1sth!2sth!4v1720341767089!5m2!1sth!2sth"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
