"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact",
    href: "#page-footer",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="heading-font text-3xl text-[#3B3B3B]">
          Chakra
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[#3B3B3B] transition hover:text-[#A8B29F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Button className="rounded-full bg-[#A8B29F] px-6 hover:bg-[#96A08E]">
            Book Now
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white">
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="border-none bg-[#F7F2EC]">
              <SheetHeader>
                <SheetTitle className="heading-font text-2xl text-[#3B3B3B]">
                  Chakra Reflexology
                </SheetTitle>
              </SheetHeader>
              <div className="mt-16 flex flex-col gap-8">
                {/* NAV ITEMS */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-2xl text-[#3B3B3B]"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CTA */}
                <Button className="mt-6 rounded-full bg-[#A8B29F] py-6 text-base hover:bg-[#96A08E]">
                  Book Treatment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
