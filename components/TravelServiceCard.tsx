"use client";

import Image from "next/image";
import { CookingPotIcon, Star, ThumbsUp, Utensils } from "lucide-react";

interface Props {
  image: string;
  title: string;
  price: string;
  rating: string;
  reviews: string;
}

export default function TravelServiceCard({
  image,
  title,
  price,
  rating,
  reviews,
}: Props) {
  return (
    <div className="min-w-[300px] max-w-[384px] max-h-[489px] rounded-4xl bg-white shadow-sm">
      <div className="relative h-[180px] w-auto overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 text-xs text-[#344054]">
          <span className="hidden md:block rounded bg-[#5EA5F5] px-2 py-0.5 text-white">
            {rating}
          </span>
          <h3 className="text-base inline-block md:hidden font-semibold text-[#0c2a33]">
            {title}
          </h3>
          <div className="opacity-0 md:opacity-100 flex flex-col gap-1">
            <span className="font-semibold text-sm">Very good</span>
            <span className="text-[#77878F]"> {reviews} reviews</span>
          </div>
          <div className="flex flex-col right-0 ml-auto items-end">
            <p className="ml-auto text-xs font-medium text-[#98A2B3]">From </p>
            <span className="text-sm md:text-base font-semibold text-[#344054]">
              {price}/day
            </span>
          </div>
        </div>

        <h3 className="hidden md:block md:text-lg font-semibold text-[#0c2a33]">
          {title}
        </h3>
        <p className="hidden md:block mt-1 text-sm text-[#42526B]">
          Premium hotel near Masjid al-Haram with best rates
        </p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#475156]">
          <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
            <CookingPotIcon fill="#023F3A" size={12} /> Breakfast Included
          </span>
          <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
            <Utensils fill="#023F3A" size={12} /> Kitchen
          </span>
          <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
            <Star fill="#023F3A" size={12} /> 5 star accommodation
          </span>
        </div>

        <button className="mt-4 w-fit rounded-xl cursor-pointer bg-[#023F3A] px-5 py-2 text-base font-bold text-white">
          Book Now
        </button>
      </div>
    </div>
  );
}
