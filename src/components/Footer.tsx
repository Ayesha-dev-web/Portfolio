"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Download, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Meta Leads Generation",
  "Website Development",
  "Social Media Management",
  "Graphic Designing",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/15 bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-yellow-500/25 bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-2"
                  sizes="64px"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-500/80">
                  Professional
                </p>
                <h3 className="text-lg font-semibold text-white">Portfolio</h3>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Building brands through digital marketing, websites, lead generation,
              and social media management with a premium and results-driven approach.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:text-yellow-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400">Contact</h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 text-yellow-400" size={18} />
                <a
                  href="mailto:hafsabintehrb@gmail.com"
                  className="text-sm text-gray-300 hover:text-yellow-300"
                >
                  hafsabintehrb@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 text-yellow-400" size={18} />
                <a
                  href="tel:+923175108000"
                  className="text-sm text-gray-300 hover:text-yellow-300"
                >
                  +92 317 5108000
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300 transition hover:border-yellow-400/40 hover:bg-yellow-500/15"
              >
                <Download size={16} />
                Download CV
              </a>

              <a
                href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.22)] transition hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-yellow-500/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed with a premium black & gold style.
          </p>
        </div>
      </div>
    </footer>
  );
}