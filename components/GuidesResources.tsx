"use client";

import GuideCard from "./GuideCard";

export default function GuidesResources() {
  return (
    <section className="px-14 py-24 bg-[#F4F4F4] max-w-[99vw]">
      <div className="mx-auto ">
        {/* Heading */}
        <h2 className="mb-8 font-jejumyeongjo text-3xl md:text-6xl text-[#061C3D]">
          Guides & Resources
        </h2>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          <GuideCard
            image="/image3.png"
            title="Umrah Rituals Guide"
            description="Step-by-step guide for performing Umrah correctly"
          />
          <GuideCard
            image="/image3.png"
            title="Packing Essentials"
            description="What to bring for a comfortable pilgrimage"
          />
          <GuideCard
            image="/image3.png"
            title="Packing Essentials"
            description="What to bring for a comfortable pilgrimage"
          />
          <GuideCard
            image="/image3.png"
            title="Packing Essentials"
            description="What to bring for a comfortable pilgrimage"
          />
          <GuideCard
            image="/image3.png"
            title="Packing Essentials"
            description="What to bring for a comfortable pilgrimage"
          />
          <GuideCard
            image="/image3.png"
            title="Packing Essentials"
            description="What to bring for a comfortable pilgrimage"
          />
          <GuideCard
            image="/image3.png"
            title="Packing Essentials"
            description="What to bring for a comfortable pilgrimage"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-lg border border-[#023F3A]  px-6 py-2 md:text-2xl font-medium text-sm text-[#023F3A] hover:bg-[#0c2a33] cursor-pointer hover:text-white transition">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
