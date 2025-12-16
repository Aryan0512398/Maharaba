"use client";

import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000F24] md:bg-white px-6 pb-6">
      <div className="mx-auto md:max-w-[99vw] rounded-b-4xl bg-[#000F24] px-10 py-14 text-[#989898]">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/image8.png"
                alt="Logo"
                width={58}
                height={58}
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-semibold font-display text-white leading-none">
                Marhaba Haji
              </span>
            </div>

            <p className="text-sm font-medium leading-relaxed text-[#989898]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-sm md:text-base font-semibold text-white">
              Quick links
            </h4>
            <ul className="space-y-3 text-sm text-[#989898] hover:cursor-pointer">
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
            </ul>
          </div>

          {/* VISA INFO */}
          <div>
            <h4 className="mb-4  text-sm md:text-base font-semibold text-white">
              Visa Information
            </h4>
            <ul className="space-y-3 text-sm text-[#989898] hover:cursor-pointer">
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="mb-4  text-sm md:text-base font-semibold text-white">
              Support & Legal
            </h4>
            <ul className="space-y-3 text-sm text-[#989898] hover:cursor-pointer">
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between  ">
          {/* BADGES */}
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-2 rounded-full border border-[#B2B2B2] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              SSL Secure
            </span>
            <span className="flex items-center gap-2 rounded-full border border-[#B2B2B2] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Secure Payments
            </span>
            <span className="flex items-center gap-2 rounded-full border border-[#B2B2B2] px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Global Networks
            </span>
          </div>
          {/* SOCIAL */}
          <div className="flex gap-4 text-white hover:cursor-pointer ">
            <Facebook size={16} />
            <Instagram size={16} />
            <Twitter size={16} />
            <Youtube size={16} />
            <Linkedin size={16} />
          </div>
        </div>
        {/* DIVIDER */}
        <div className="my-10 h-px bg-[#B2B2B2]" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="text-center text-xs text-[#989898] md:text-center">
            © 2024 Marhaba Haji Umrah Visa Services. All rights reserved <br />
            Licensed travel agency with official authorization for visa
            processing
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#989898]">
          ⚡ Powered by SuperCX Technologies
        </div>
      </div>
    </footer>
  );
}
