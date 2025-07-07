export default function SkeletonContent() {
  return (
    <div className="w-full max-w-[1000px] mx-auto space-y-4">
      <div className="animate-pulse bg-gray-300 h-56 rounded-md" />
      <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded" />
    </div>
  );
}
