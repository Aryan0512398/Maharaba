"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function GuideCard({ image, title, description }: Props) {
  return (
    <div className="min-w-[360px] min-h-44 max-w-[440px] rounded-2xl border bg-[#FEFEFE] p-4 shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="sm:text-base md:text-3xl font-medium text-[#0c2a33]">
          {title}
        </h3>
        <p className="mt-1 text-xs md:text-2xl text-[#42526B]">{description}</p>

        <div className="mt-6  cursor-pointer pt-3 text-sm flex items-center gap-2 md:text-3xl font-medium text-[#023F3A] hover:gap-2 transition-all">
          <p>Read More </p>
          <ArrowRight
            className="text-[#0F172B] h-5 w-5 md:h-8  md:w-8"
            size={18}
          />
        </div>
      </div>
    </div>
  );
}
