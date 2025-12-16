"use client";

import Image from "next/image";
import { Calendar, Hotel } from "lucide-react";

interface Props {
  image: string;
  title: string;
  days: string;
  hotels: string;
  price: string;
  tag: string;
  tagColor: string;
}

export default function PackageCard({
  image,
  title,
  days,
  hotels,
  price,
  tag,
  tagColor,
}: Props) {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4 rounded-3xl bg-white p-4 shadow-md md:flex-row md:gap-6">
      {/* IMAGE */}
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-2xl md:h-auto md:w-[180px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 180px"
          className="object-cover"
          priority
        />
        <span
          className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-medium text-white ${tagColor}`}
        >
          {tag}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col justify-between">
        {/* TOP */}
        <div>
          <div className="flex flex-col gap-3 ">
            <h3 className="text-base font-medium text-[#000F24] md:text-2xl">
              {title}
            </h3>

            <div className="flex gap-2">
              <span className="flex items-center whitespace-nowrap gap-1 rounded-full border border-[#CAD5E2] bg-[#F8FAFC] px-2 py-1 text-xs text-[#475156]">
                <Calendar size={12} /> {days}
              </span>

              <span className="flex items-center whitespace-nowrap gap-1 rounded-full border border-[#CAD5E2] bg-[#F8FAFC] px-2 py-1 text-xs text-[#475156]">
                <Hotel size={12} /> {hotels}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#98A2B3]">From</p>
            <p className="text-lg font-semibold text-[#344054]">{price}</p>
          </div>

          <button className="rounded-xl cursor-pointer border border-[#023F3A] bg-[#023F3A] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#0a2229]">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
