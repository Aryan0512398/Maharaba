"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Umrah Packages", href: "/umrahpackage" },
  { label: "Hajj Packages", href: "/hajj-packages" },
  { label: "Hotel", href: "/hotels" },
  { label: "Transport", href: "/transport" },
  { label: "Ziarath", href: "/ziarath" },
  { label: "Guide", href: "/guide" },
  { label: "Visa", href: "/visa" },
  { label: "Group Flight", href: "/group-flight" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-1/2 z-50 w-full max-w-[99vw] -translate-x-1/2 px-6 hidden lg:block">
        <div className="mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/image8.png"
              alt="Marhaba Haji Logo"
              width={58}
              height={58}
              className="h-32 w-32 object-contain"
              priority
            />
          </Link>

          {/* MENU */}
          <nav className="flex h-12 items-center rounded-full bg-white/15 px-5 backdrop-blur-xl">
            <ul className="flex h-full items-center text-base text-white">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href} className="h-full flex items-center">
                    <Link
                      href={href}
                      className={`flex h-full items-center rounded-full px-5 transition
                        ${
                          isActive
                            ? "bg-white text-[#0c2a33]"
                            : "text-white opacity-90 hover:opacity-100"
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full border border-white/30 px-5 py-2 text-white hover:bg-white/10"
            >
              Signup
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/30 px-5 py-2 text-white hover:bg-white/20"
            >
              Login
            </Link>
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/20"
            >
              <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      </header>

      <header className="absolute top-0 left-0 z-50 w-full px-4 py-4 flex items-center justify-between lg:hidden">
        <button onClick={() => setOpen(true)}>
          <Menu className="text-white" size={28} />
        </button>
        <Link href="/">
          <Image
            src="/image8.png"
            alt="Logo"
            className="h-16 w-16 object-contain"
            width={48}
            height={48}
          />
        </Link>
      </header>

      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed left-0 top-0 z-50 h-full w-[280px] bg-[#020617] p-6">
            <div className="mb-6 flex items-center justify-between">
              <Image
                src="/image8.png"
                alt="Logo"
                className="h-16 w-16"
                width={48}
                height={48}
              />
              <button onClick={() => setOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-2 text-sm transition
                      ${
                        isActive
                          ? "bg-white text-[#0c2a33]"
                          : "text-white opacity-90 hover:bg-white/10"
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 flex gap-3">
              <Link
                href="/signup"
                className="flex-1 rounded-lg border border-white/20 py-2 text-center text-white"
              >
                Signup
              </Link>
              <Link
                href="/login"
                className="flex-1 rounded-lg border border-white/20 py-2 text-center text-white"
              >
                Login
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
