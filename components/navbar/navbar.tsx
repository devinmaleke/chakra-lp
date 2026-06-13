"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

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
    label: "Gallery",
    href: "#gallery",
  },
  // {
  //   label: "Pricing",
  //   href: "#pricing",
  // },
  {
    label: "FAQ",
    href: "#FAQ",
  },
  {
    label: "Contact",
    href: "#page-footer",
  },
];

const WHATSAPP_URL =
  "https://wa.me/6282177980464?text=Halo%20Chakra,%20saya%20ingin%20melakukan%20reservasi%20treatment.";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full px-4">
      <div className="mx-auto mt-4 flex h-20 max-w-7xl items-center justify-between rounded-full border border-[#C9A96E]/10 bg-[#2C2419]/90 px-6 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        {/* LOGO */}
        <button
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center"
        >
          <Image
            src="/logo-light.svg"
            alt="Chakra Reflexology"
            width={140}
            height={40}
            className="h-auto w-[120px] md:w-[140px]"
            priority
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm tracking-[0.08em] text-[#D8CCBE] transition duration-300 hover:text-[#C9A96E]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="rounded-full border border-[#C9A96E] bg-transparent px-6 text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-[#2C2419]"
          >
            Book Now
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A96E]/20 bg-[#2C2419] text-[#C9A96E]"
              >
                <Menu aria-hidden="true" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                border-l border-[#C9A96E]/10
                bg-[#2C2419]
                px-6
                [&>button]:text-[#C9A96E]
                [&>button]:opacity-100
                [&>button:hover]:text-[#F5EEE4]
              "
            >
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/logo-light.svg"
                    alt="Chakra Reflexology"
                    width={160}
                    height={50}
                    className="h-auto w-[140px]"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-20 flex flex-col gap-10">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setOpen(false);

                      setTimeout(() => {
                        scrollToSection(item.href);
                      }, 250);
                    }}
                    className="text-left text-2xl text-[#F5EEE4] transition hover:text-[#C9A96E]"
                  >
                    {item.label}
                  </button>
                ))}

                <Button
                  onClick={() => {
                    setOpen(false);

                    setTimeout(() => {
                      window.open(WHATSAPP_URL, "_blank");
                    }, 250);
                  }}
                  className="mt-10 rounded-full border border-[#C9A96E] bg-transparent py-7 text-base text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#2C2419]"
                >
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
