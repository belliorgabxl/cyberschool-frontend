"use client";
interface Props {
  url: string;
}

export default function PDFContentFile({ url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-10 py-2 text-lg bg-blue-500 hover:bg-blue-400 text-white  rounded-3xl"
    >
      เปิดเอกสารคำถาม
    </a>
  );
}
