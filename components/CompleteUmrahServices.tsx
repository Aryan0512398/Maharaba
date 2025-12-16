"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import TravelServiceCard from "./TravelServiceCard";
import Image from "next/image";

export default function CompleteUmrahServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-14 py-24 max-w-[99vw] relative">
      <div className="mx-auto relative">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[100px] w-[600px] -translate-x-1/3 rounded-full blur-[102.5px] opacity-70"
          style={{
            background:
              "linear-gradient(90deg, #FFD700 0%, #FF6439 50%, #FFFFFF 73.08%, #00D4FE 100%)",
          }}
        />

        {/* Header */}
        <div className="mb-8 relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <div className=" flex items-center gap-1 border-2 px-4 bg-[#F1F5F9] rounded-2xl border-[#CAD5E2] w-fit p-1 ">
                <Image
                  src="/image15.png"
                  alt="Travel Services"
                  width={14}
                  height={14}
                />

                <span className="inline-block rounded-full py-1 text-xs font-medium text-[#061C3D]">
                  TRAVEL SERVICES
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-2 font-jejumyeongjo text-3xl md:text-5xl text-[#061C3D]">
                Complete Umrah Travel Services
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
            {/* Descriptive Paragraph (Left side) */}
            <p className="mt-3 max-w-2xl sm:text-xs md:text-xl text-[#717782]">
              Make your pilgrimage seamless with our comprehensive travel
              services. From accommodation to guided tours, we’ve got everything
              covered
            </p>

            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={() => scroll("left")}
                className="flex sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-600"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-[#0c2a33] text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar relative z-10"
        >
          <TravelServiceCard
            image="/image4.png"
            title="Makkah Hotel Booking"
            price="₹1,999"
            rating="8.0"
            reviews="435"
          />
          <TravelServiceCard
            image="/image4.png"
            title="Makkah Hotel Booking"
            price="₹1,999"
            rating="8.0"
            reviews="435"
          />
          <TravelServiceCard
            image="/image4.png"
            title="Makkah Hotel Booking"
            price="₹1,999"
            rating="8.0"
            reviews="435"
          />
          <TravelServiceCard
            image="/image4.png"
            title="Makkah Hotel Booking"
            price="₹1,999"
            rating="8.0"
            reviews="435"
          />
          <TravelServiceCard
            image="/image4.png"
            title="Makkah Hotel Booking"
            price="₹1,999"
            rating="8.0"
            reviews="435"
          />
          <TravelServiceCard
            image="/image4.png"
            title="Makkah Hotel Booking"
            price="₹1,999"
            rating="8.0"
            reviews="435"
          />
        </div>
      </div>
    </section>
  );
}
