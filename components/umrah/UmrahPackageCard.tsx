"use client";

import Image from "next/image";
import { Check, Users, User, ArrowRight, Star, StarIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  includes: string[];
  price: string;
  duration: string;
  type: string;
  buttonText: string;
  badge?: string;
  keyBenefits?: string[];
}

export default function UmrahPackageCard({
  title,
  description,
  image,
  includes,
  price,
  duration,
  type,
  buttonText,
  badge,
  keyBenefits = [],
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="relative flex flex-col rounded-3xl border bg-white p-6 shadow-sm text-[#023F3A]"
    >
      {/* Top Right Icon */}
      <div className="absolute right-5 top-5 rounded-full bg-[#023F3A] p-2">
        {badge ? (
          <Users className="text-white" size={18} />
        ) : (
          <User className="text-white" size={18} />
        )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-[#42526B]">{description}</p>

      {/* Image */}
      <div className="relative mt-5 h-64 overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" />

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0c2a33] shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Includes */}
      <h4 className="mt-6 text-sm font-semibold">Package Includes:</h4>
      <ul className="mt-3 space-y-2 text-sm">
        {includes.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check size={14} className="text-[#023F3A]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="bg-[#E9EFF5] mt-4 rounded-xl">
        {/* PRICE BOX */}
        <div className="m-2 rounded-xl  bg-white p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#023F3A]">
              Starting from {price}
            </p>
            <p className="text-xs text-gray-500">per person</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold">{duration}</p>
            <p className="text-xs text-gray-500">{type}</p>
          </div>
        </div>

        {/* KEY BENEFITS */}
        {keyBenefits.length > 0 && (
          <div className="p-4">
            <p className="text-xs font-semibold text-[#000F24] mb-2">
              Key Benefits:
            </p>
            <div className=" flex flex-wrap gap-x-2 gap-y-2">
              {keyBenefits.map((benefit, i) => (
                <span
                  key={i}
                  className="rounded-full w-fit bg-white px-3 py-1 text-xs shadow text-[#023F3A]"
                >
                  <div className="flex items-center justify-center gap-3">
                    <StarIcon
                      fill="#023F3A"
                      className="text-xs w-4 h-4 text-[#023F3A]"
                    />{" "}
                    {benefit}
                  </div>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <button className="mt-6 flex items-center  gap-2 rounded-full w-fit justify-center p-4 bg-[#023F3A] py-3 hover:cursor-pointer text-base font-bold text-white hover:bg-[#0a2229]">
        {buttonText}
      </button>
    </motion.div>
  );
}
