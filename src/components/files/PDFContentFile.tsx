"use client";
interface Props {
  url: string;
}

export default function PDFContentFile({ url }: Props) {
  return (
    <div className="w-full h-[80vh]">
      <iframe
        src={url}
        width="100%"
        height="100%"
        className="rounded-xl border"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}
