"use client";

import Image from "next/image";

interface Props {
  name: string;
  role: string;
  company: string;
  companyColor: string;
  avatar: string;
  message: string;
  bgColor: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  companyColor,
  avatar,
  message,
  bgColor,
}: Props) {
  return (
    <div
      className={`min-w-[360px] max-w-[424px] max-h-[400px] rounded-3xl p-8 shadow-lg ${bgColor}`}
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium sm:text-xs text-base text-[#061C3D]">
            {name}
          </p>
          <p className="hidden md:block text-sm text-[#42526B]">
            {role} of{" "}
            <span className={`font-medium text-[#7534FF] `}>{company}</span>
          </p>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-[#061C3D]">“{message}”</p>

      <p className={`hidden md:block mt-6 text-lg font-bold ${companyColor}`}>
        {company}
      </p>
    </div>
  );
}
