"use client";

import { useRef } from "react";
import SpecialOfferCard from "./SpecialOfferCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SpecialOffers() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-14 py-24 max-w-[99vw]">
      <div className="mx-auto ">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-jejumyeongjo text-3xl md:text-6xl text-[#061C3D]">
            Special Offers
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={scrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0c2a33] text-white hover:bg-[#0a2229]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="mt-10 flex gap-8 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          <SpecialOfferCard
            image="/image6.png"
            title="15 Days Umrah Package"
            description="Premium hotel near Masjid al-Haram with best rates"
            oldPrice="₹1,05,000"
            newPrice="₹85,000"
          />
          <SpecialOfferCard
            image="/image6.png"
            title="15 Days Umrah Package"
            description="Premium hotel near Masjid al-Haram with best rates"
            oldPrice="₹1,05,000"
            newPrice="₹85,000"
          />
          <SpecialOfferCard
            image="/image6.png"
            title="15 Days Umrah Package"
            description="Premium hotel near Masjid al-Haram with best rates"
            oldPrice="₹1,05,000"
            newPrice="₹85,000"
          />
          <SpecialOfferCard
            image="/image6.png"
            title="15 Days Umrah Package"
            description="Premium hotel near Masjid al-Haram with best rates"
            oldPrice="₹1,05,000"
            newPrice="₹85,000"
          />
          <SpecialOfferCard
            image="/image6.png"
            title="15 Days Umrah Package"
            description="Premium hotel near Masjid al-Haram with best rates"
            oldPrice="₹1,05,000"
            newPrice="₹85,000"
          />
        </div>
      </div>
    </section>
  );
}
