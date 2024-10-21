import Image from "next/image";

interface BottomSectionProps {
  image: string;
  title: string;
}

export default function BottomSection({ image, title }: BottomSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-800">
      <div className="w-full h-[180px] relative overflow-hidden">
        <div className="absolute top-2 left-2 bg-gray-900/80 px-2 py-1 z-20 rounded text-xs text-white flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          Your News
        </div>
        <Image
          src={image || "/api/placeholder/400/250"}
          alt={title}
          className="object-cover"
          fill
          unoptimized
          loading="lazy"
        />
      </div>
    </div>
  );
}
