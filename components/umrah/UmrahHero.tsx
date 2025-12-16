"use client";

import { section } from "framer-motion/client";
import Image from "next/image";
import Navbar from "../Navbar";

export default function UmrahHero() {
  return (
    <section className="p-4">
      <div className="relative h-[65vh] mt-4 w-full overflow-hidden rounded-2xl max-w-[99vw] ">
        <Image
          src="/image11.jpg"
          alt="Umrah Hero"
          fill
          className="object-cover max-w-full"
          priority
        />

        <div className="absolute inset-0" />
        <Navbar />

        <div className="relative z-10 flex h-full flex-col items-center justify-center mt-4 px-6 text-center text-white">
          <h1 className="font-jejumyeongjo text-5xl md:text-7xl">
            Choose Your Umrah <br /> Package
          </h1>
          <p className="mt-8 -mb-2 max-w-2xl text-xl  text-[#ECECEC]">
            Select between our comprehensive group packages or create your own
            personalized pilgrimage experience
          </p>
        </div>
      </div>
    </section>
  );
}
