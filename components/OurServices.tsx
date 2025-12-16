"use client";

import {
  Building2,
  Plane,
  CreditCard,
  Users,
  Map,
  Bus,
  Landmark,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Umrah", icon: Landmark },
  { title: "Hajj", icon: BookOpen },
  { title: "Hotels", icon: Building2 },
  { title: "Flights", icon: Plane },
  { title: "Visa", icon: CreditCard },
  { title: "Guide", icon: Users },
  { title: "Transport", icon: Bus },
  { title: "Ziyarath", icon: Map },
];

export default function OurServices() {
  return (
    <section className="px-6 md:px-14 py-24 max-w-[99vw]">
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="font-jejumyeongjo text-3xl md:text-6xl text-[#0c2a33]">
          Our Services
        </h2>

        {/* SERVICES */}
        <div className="mt-10">
          <div className="grid grid-cols-4 gap-4 md:hidden">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col  items-center justify-center gap-2 rounded-2xl bg-[#F4F4F4] py-5 text-center"
                >
                  <Icon size={22} className="text-[#023F3A]" />
                  <p className="text-xs font-medium text-[#0F172B]">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="hidden md:flex gap-6 overflow-x-auto no-scrollbar pb-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="
                    flex
                    min-w-[220px]
                    md:min-w-[240px]
                    lg:min-w-[260px] 
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    rounded-2xl
                    bg-[#F4F4F4]
                    py-10
                    text-center
                    hover:bg-[#eeeeee]
                    transition
                  "
                >
                  <Icon size={30} className="text-[#023F3A]" />
                  <p className="text-sm md:text-2xl font-medium text-[#0F172B]">
                    {service.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
