"use client";

import { Circle, Earth } from "lucide-react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" pt-4 p-2 ">
      <div className="relative h-[70vh] md:h-[75vh] mt-4  overflow-hidden rounded-2xl sm:rounded-bl-none max-w-[99vw] ">
        <Image
          src="/image11.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.75))]" />

        <Navbar />

        {/* Content */}
        <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 text-center text-white">
          {/* Badges */}
          <div className="mb-6 flex gap-3">
            <span className="rounded-full bg-[#FFF7E4] border border-[#EEE7D5] px-4 py-1 text-xs font-semibold text-[#061C3D]">
              99% VISA APPROVAL RATE
            </span>
            <span className="rounded-full bg-[#FFF7E4] border border-[#EEE7D5] px-4 py-1 text-xs font-semibold text-[#061C3D]">
              2–4 DAYS PROCESSING
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-jejumyeongjo text-3xl leading-tight md:text-6xl text-white">
            Apply for your Umrah Visa <br /> Online
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-xs text-[#ECECEC] md:text-xl">
            Start your sacred journey to Mecca and Medina. Fast, Secure and
            hassle-free Umrah visa processing with guaranteed approval and
            expert support
          </p>

          {/* CTA Card */}
          <div className="mt-4   w-full max-w-4xl translate-y-6 rounded-2xl border border-[#CAD5E2] bg-white p-5 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* LEFT: Price + Pills */}
              <div className="flex flex-col items-center gap-3 md:items-start">
                {/* Price */}
                <div className="text-center md:text-left">
                  <p className="text-base md:text-2xl font-medium text-[#023F3A]">
                    Starting from
                  </p>
                  <p className="text-lg font-semibold text-black">
                    ₹ 1{" "}
                    <span className="text-xs text-[#061C3D] font-normal">
                      PER PERSON – ALL INCLUSIVE
                    </span>
                  </p>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  <span className="rounded-full bg-[#2B7FFF1A] border items-center justify-center border-[#2B7FFF1A] px-3 py-1 text-[10px] font-medium text-[#2B7FFF]">
                    <Circle className="w-2 h-2 mr-1 inline-block"></Circle>{" "}
                    Secure SSL
                  </span>
                  <span className="rounded-full bg-[#2B7FFF1A] border border-[#2B7FFF1A] px-3 py-1 text-[10px] font-medium text-[#2B7FFF]">
                    <Circle className="w-2 h-2 mr-1 inline-block"></Circle> No
                    Hidden Fees
                  </span>
                  <span className="rounded-full bg-[#2B7FFF1A] border border-[#2B7FFF1A] px-3 py-1 text-[10px] font-medium text-[#2B7FFF]">
                    <Circle className="w-2 h-2 mr-1 inline-block"></Circle>{" "}
                    Money Back
                  </span>
                </div>
              </div>

              {/* RIGHT: Buttons */}
              <div className="hidden md:block">
                <select
                  className="
            rounded-xl
            border
            border-[#CAD5E2]
            bg-[#F1F5F980]
            px-4
            py-3
            text-sm
            text-[#5E5C68]
            outline-none
            focus:border-[#023F3A]
          "
                >
                  <option> Your Nationality</option>
                  <option>Indian</option>
                  <option>Pakistani</option>
                  <option>Bangladeshi</option>
                  <option>Indonesian</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex w-full justify-center gap-3 md:w-auto">
                <button className="w-fit rounded-4xl bg-[#023F3A] px-3 py-3 text-xs md:text-base font-semibold text-white md:w-auto">
                  Apply Now → ₹1
                </button>

                <button className="hidden rounded-4xl border border-[#023F3A] px-3 py-3 text-base font-semibold text-emerald-700 md:inline-flex">
                  Chat On WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
