"use client";

import PackageCard from "./PackageCard";

const packages = [
  {
    image: "/image5.png",
    title: "Deluxe Umrah Package",
    days: "7 Days",
    hotels: "5 Star Hotels",
    price: "₹1,20,000",
    tag: "Premium",
    tagColor: "bg-emerald-700",
  },
  {
    image: "/image12.png",
    title: "Budget Umrah Package",
    days: "10 Days",
    hotels: "3 Star Hotels",
    price: "₹65,000",
    tag: "Standard",
    tagColor: "bg-amber-500",
  },
  {
    image: "/image16.png",
    title: "Family Umrah Package",
    days: "14 Days",
    hotels: "4 Star Hotels",
    price: "₹95,000",
    tag: "Family",
    tagColor: "bg-[#9C3B20]",
  },
];

export default function FeaturedPackages() {
  return (
    <section className="overflow-hidden px-14 py-24 max-w-[99vw] bg-[#F4F4F4]">
      <div className="mx-auto ">
        <h2 className="mb-10 font-jejumyeongjo text-3xl md:text-6xl text-[#061C3D]">
          Featured Packages
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-4 no-scrollbar">
        {[...packages].map((pkg, i) => (
          <PackageCard key={i} {...pkg} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="rounded-lg border border-[#023F3A]  px-6 py-2 md:text-2xl font-medium text-sm text-[#023F3A] hover:bg-[#0c2a33] cursor-pointer hover:text-white transition">
          View all
        </button>
      </div>
    </section>
  );
}
