"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-yellow-700/20 bg-black/80 backdrop-blur-xl"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border border-yellow-500/30 bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.20)]">
            <Image
              src="/logo.png"
              alt="Portfolio Logo"
              fill
              className="object-contain p-2"
              sizes="80px"
              priority
            />
          </div>

          <div className="hidden sm:block">
            
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-yellow-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="rounded-full border border-yellow-500/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
          >
            Download CV
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.22)] transition hover:-translate-y-0.5"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/25 bg-black/60 text-yellow-400 transition hover:border-yellow-400/50 hover:bg-yellow-500/10 lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-[2px] w-5 bg-current transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] border-t border-yellow-700/20 bg-black/95"
            : "max-h-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-yellow-500/10 hover:text-yellow-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href="/cv.pdf"
              download
              onClick={closeMenu}
              className="rounded-full border border-yellow-500/30 px-5 py-3 text-center text-sm font-medium text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
            >
              Download CV
            </a>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-3 text-center text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.22)] transition hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}