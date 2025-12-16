"use client";

import { Calendar, Wallet, Building2, CreditCard } from "lucide-react";

export default function StepsSection() {
  return (
    <section className="px-6 md:px-10 py-24 max-w-[99vw]">
      <div
        className="
          mx-auto
          relative
          max-w-8xl
          rounded-[40px]
          bg-[#f6f4ef]
          px-6 py-10
          md:px-12 md:py-14
        "
      >
        {/* Gradient glow */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[120px] w-[600px] -translate-x-1/3 rounded-full blur-[110px] opacity-70"
          style={{
            background:
              "linear-gradient(90deg, #FFD700 0%, #FF6439 50%, #FFFFFF 73.08%, #00D4FE 100%)",
          }}
        />

        {/* Heading */}
        <h2 className="relative font-jejumyeongjo text-3xl md:text-6xl text-[#061C3D]">
          Plan Your Umrah & Hajj the Smart Way
        </h2>

        {/* Subtitle */}
        <p className="relative mt-4 max-w-3xl text-xs md:text-2xl text-[#717782]">
          Visa, Hotels, Flights, Ziyarats – All in One Islamic Travel App
        </p>

        {/* Steps */}
        <div
          className="
            relative
            mt-12
            grid
            grid-cols-2
            gap-6
            md:grid-cols-4
          "
        >
          {/* Step 1 */}
          <div className="rounded-2xl border border-[#EAEAEA] md:rounded-4xl bg-[#FFFFFF] p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-[#f3f1e6] text-[#0c2a33]">
              <Calendar size={20} className="lg:size-10" />
            </div>
            <h3 className="font-jejumyeongjo text-2xl md:text-5xl text-[#023F3A]">
              Step 1
            </h3>
            <p className="mt-2 text-xs md:text-2xl text-[#000F24]">
              Choose Dates
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-[#EAEAEA] md:rounded-4xl bg-[#FFFFFF] p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-[#f3f1e6] text-[#0c2a33]">
              <Wallet size={20} />
            </div>
            <h3 className="font-jejumyeongjo text-2xl md:text-5xl text-[#023F3A]">
              Step 2
            </h3>
            <p className="mt-2 text-xs md:text-2xl text-[#000F24]">
              Add Visa, Flights, Hotels
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-[#EAEAEA] md:rounded-4xl bg-[#FFFFFF] p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-[#f3f1e6] text-[#0c2a33]">
              <Building2 size={20} className="lg:size-10" />
            </div>
            <h3 className="font-jejumyeongjo text-2xl md:text-5xl text-[#023F3A]">
              Step 3
            </h3>
            <p className="mt-2 text-xs md:text-2xl text-[#000F24]">
              Add Ziyarats & Transport
            </p>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl border border-[#EAEAEA] md:rounded-4xl bg-[#FFFFFF] p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-[#f3f1e6] text-[#0c2a33]">
              <CreditCard size={20} className="lg:size-10" />
            </div>
            <h3 className="font-jejumyeongjo text-2xl md:text-5xl text-[#023F3A]">
              Step 4
            </h3>
            <p className="mt-2 text-xs md:text-2xl text-[#000F24]">
              Checkout & Pay
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative mt-12">
          <button className="w-full rounded-full bg-[#023F3A] py-5 text-xs cursor-pointer md:text-2xl font-medium text-[#FFFFFF] hover:bg-[#043f38] transition">
            Start Building Your Umrah Package
          </button>
        </div>
      </div>
    </section>
  );
}
