"use client";

import Image from "next/image";

type SpecialOfferCardProps = {
  image: string;
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
};

export default function SpecialOfferCard({
  image,
  title,
  description,
  oldPrice,
  newPrice,
}: SpecialOfferCardProps) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl bg-white shadow-sm">
      {/* Image */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-3xl">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="px-4 pb-5 pt-4">
        <h3 className="text-lg font-semibold text-[#0c2a33]">{title}</h3>

        <p className="mt-1 text-sm text-gray-600">{description}</p>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">
                {oldPrice}
              </span>
              <span className="text-lg font-semibold text-[#0c2a33]">
                {newPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 w-full rounded-xl cursor-pointer bg-[#064e45] py-2.5 text-sm font-semibold text-white hover:bg-[#043f38] transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
