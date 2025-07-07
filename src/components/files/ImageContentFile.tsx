"use client";
interface Props {
  url: string;
}

export default function ImageContentFile({ url }: Props) {
  return <img src={url} alt="Content" className="w-full rounded-md shadow" />;
}
