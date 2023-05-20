import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center relative">
      <div
        className="inline-block h-24 w-24 animate-spin rounded-full bg-l-yellow/60 border-[6px] border-solid border-y-red border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_4s_linear_infinite]"
        role="status"
      ></div>
      <Image
        className="absolute rounded-full"
        src="/image/sunny.jpg"
        alt="Loading"
        width={80}
        height={80}
      />
    </div>
  );
}
