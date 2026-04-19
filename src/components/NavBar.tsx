"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">

        {/* LOGO + TEXT */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-yellow-500/25 bg-black/60 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
            <Image
              src="/logo1.png"
              alt="Logo"
              fill
              className="object-contain p-2"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white leading-tight">
              HAFSA BNT HRB
            </h2>
            <p className="text-xs tracking-[0.2em] text-yellow-400 uppercase">
              Portfolio
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
          <Link href="/testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>

          {/* CV BUTTON */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-2 text-xs font-semibold text-black shadow-[0_10px_25px_rgba(212,175,55,0.25)] hover:-translate-y-0.5 transition"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#050505] border-t border-yellow-500/10 px-6 py-6 space-y-5 text-gray-300">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Services
          </Link>
          <Link href="/portfolio" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Portfolio
          </Link>
          <Link href="/testimonials" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Testimonials
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-yellow-400">
            Contact
          </Link>

          {/* CV BUTTON MOBILE */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-2 text-sm font-semibold text-black"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}