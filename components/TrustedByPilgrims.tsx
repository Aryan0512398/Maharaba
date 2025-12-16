"use client";

import { Award, Building2, BadgeCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function TrustedByPilgrims() {
  return (
    <section className="px-14 py-24 max-w-[99vw]">
      <div className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block rounded-full bg-[#F1F5F9] border border-[#CAD5E2] px-4 py-1 text-xs font-medium text-[#061C3D]">
            LICENSED & CERTIFIED
          </span>

          <h2 className="mt-4 max-w-lg font-jejumyeongjo sm:text-3xl md:text-5xl  text-[#061C3D]">
            Trusted by Pilgrims worldwide
          </h2>

          <p className="mt-4 max-w-2xl text-sm md:text-xl text-[#717782]">
            We are officially licensed and certified by leading authorities to
            provide you with safe, secure and reliable Umrah service
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#F1F5F9] border border-[#CAD5E2] px-4 py-1 text-xs text-[#061C3D]">
              SSL Secure
            </span>
            <span className="rounded-full bg-[#F1F5F9] border border-[#CAD5E2] px-4 py-1 text-xs text-[#061C3D]">
              Secure Payments
            </span>
            <span className="rounded-full bg-[#F1F5F9] border border-[#CAD5E2] px-4 py-1 text-xs text-[#061C3D]">
              Global Networks
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <TrustCard
            className="-mt-6"
            bg="bg-[#CEE6EA]"
            icon={
              <Image
                src="/image32.png"
                alt="IATA Certified"
                width={20}
                height={20}
                className="object-contain h-6 w-6"
              />
            }
            title="IATA Certified"
            desc="International Air Transport Association"
          />

          <TrustCard
            className="mt-4"
            bg="bg-[#B4C4E4]"
            icon={
              <Image
                src="/image33.png"
                alt="image33"
                width={20}
                height={20}
                className="object-contain h-6 w-6"
              />
            }
            title="Ministry Approved"
            desc="Indian Ministry of Minority Affairs"
          />

          <TrustCard
            className="-mt-2"
            bg="bg-[#E5B755]"
            icon={
              <Image
                src="/image34.png"
                alt="image34"
                width={20}
                height={20}
                className="object-contain h-6 w-6"
              />
            }
            title="Saudi Umrah Visa Licensed"
            desc="Ministry of Hajj and Umrah"
          />

          <TrustCard
            className="mt-6"
            bg="bg-[#79918F]"
            icon={
              <Image
                src="/image35.png"
                alt="image35"
                width={20}
                height={20}
                className="object-contain h-6 w-6"
              />
            }
            title="Karnataka Tourism Certified"
            desc="State Government Approved"
            dark
          />
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  bg,
  icon,
  title,
  desc,
  dark = false,
  className = "",
}: {
  bg: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`
        ${bg}
        ${className}
        w-full
        rounded-4xl
        p-6
      `}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
        {icon}
      </div>

      <h4
        className={`text-sm md:text-lg font-semibold ${
          dark ? "text-white" : "text-[#0c2a33]"
        }`}
      >
        {title}
      </h4>

      <p
        className={`mt-1 text-xs md:text-sm leading-relaxed ${
          dark ? "text-[#F1F5F9]" : "text-[#42526B]"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

