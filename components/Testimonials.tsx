"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#000F24] px-14 py-24 text-white">
      <div className="mx-auto max-w-[99vw]">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start">
          <h2 className="font-jejumyeongjo text-4xl md:text-5xl">
            What client says
          </h2>

          <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mt-3">
            {/* Description Text */}
            <div className="w-fit text-xs md:text-xl text-[#F5F6F7] max-w-fit">
              In a laoreet purus. Integer turpis quam, laoreet id orci
              nec,ultrices lacinia nunc. Aliquam erat volutpat.
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={() => scroll("left")}
                className="flex sm:h-8 sm:w-8 md:h-10 md:w-10 items-center cursor-pointer justify-center rounded-lg bg-white text-black"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex sm:h-8 sm:w-8 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-lg bg-white text-black"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar"
        >
          <TestimonialCard
            name="Annette Black"
            role="Chief Chairman"
            company="Netflix"
            companyColor="text-[#FF8800]"
            avatar="/image1.png"
            bgColor="bg-[#FFF9EE]"
            message="Golio is one of the BEST web designers I've ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent, skills, great customer service, work ethic, and attention to detail."
          />

          <TestimonialCard
            name="Annette Black"
            role="Chief Chairman"
            company="Google"
            companyColor="text-[#7534FF]"
            avatar="/image1.png"
            bgColor="bg-[#ecf8ee]"
            message="This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!"
          />

          <TestimonialCard
            name="Annette Black"
            role="CEO"
            company="YouTube"
            companyColor="text-red-500"
            avatar="/image1.png"
            bgColor="bg-white"
            message="Working with Golio was a great experience, understanding person, fast response time, does his work with honesty, experienced, a problem solver. Gives it all. I highly recommend him for providing beyond high quality service."
          />
          <TestimonialCard
            name="Annette Black"
            role="CEO"
            company="YouTube"
            companyColor="text-red-500"
            avatar="/image1.png"
            bgColor="bg-white"
            message="Working with Golio was a great experience, understanding person, fast response time, does his work with honesty, experienced, a problem solver. Gives it all. I highly recommend him for providing beyond high quality service."
          />
        </div>
      </div>
    </section>
  );
}
