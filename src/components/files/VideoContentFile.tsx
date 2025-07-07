"use client"
interface Props {
  url: string;
}

export default function VideoContentFile({ url }: Props) {
  return (
    <video controls className="w-full rounded-md shadow">
      <source src={url} type="video/mp4" />
      เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
    </video>
  );
}
