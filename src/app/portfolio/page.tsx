"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/NavBar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Image as ImageIcon,
  Megaphone,
  Share2,
} from "lucide-react";

type PortfolioItem = {
  title: string;
  image: string;
  subtitle?: string;
  link?: string;
};

const categories = ["Websites", "Leads", "Logos", "Social Media"] as const;
type Category = (typeof categories)[number];

const portfolioData: Record<Category, PortfolioItem[]> = {
  Websites: [
    { title: "AAA Home Pro", subtitle: "10,000+ leads generated", image: "/web1.png" },
    { title: "DFW Dust Buster", subtitle: "100+ leads generated", image: "/web2.png" },
    { title: "Duct Bee Clean", subtitle: "20,000+ leads generated", image: "/web3.png" },
    { title: "President Air Comfort", subtitle: "100+ leads generated", image: "/web4.png" },
    { title: "American Air Comfort", subtitle: "100+ leads generated", image: "/web5.png" },
    { title: "Green Home Care", subtitle: "100+ leads generated", image: "/web6.png" },
    { title: "Tripple Air LLC", subtitle: "4,000+ leads generated", image: "/web7.png" },
    { title: "Calwest Garage Door", subtitle: "100+ leads generated", image: "/web8.png" },
    { title: "Atvisas", subtitle: "100+ leads generated", image: "/web9.png" },
    { title: "Fsginstitute", subtitle: "100+ leads generated", image: "/web10.png" },
    { title: "Digitalajk", subtitle: "100+ leads generated", image: "/web11.png" },
  ],
Leads: [
    { title: "55 Leads", subtitle: "$2.98 each", image: "/11.png" },
    { title: "21 Leads", subtitle: "$5.03 each", image: "/22.png" },
    { title: "43 Leads", subtitle: "$6.84 each", image: "/lead3.png" },
    { title: "96 Leads", subtitle: "$2.90 each", image: "/lead4.png" },
    { title: "269 Leads", subtitle: "$7.03 each", image: "/lead5.png" },
    { title: "96 Leads", subtitle: "$10.51 each", image: "/lead6.png" },
    { title: "252 Leads", subtitle: "$12.73 each", image: "/lead7.png" },
    { title: "649 Leads", subtitle: "$11.55 each", image: "/lead8.png" },
    { title: "402 Leads", subtitle: "$6.88 each", image: "/lead9.png" },
  ],
    Logos: [
    { title: "The Gilded Fork", image: "/gilded_fork.png" },
    { title: "Aspire Academy", image: "/aspire_academy.png" },
    { title: "Grillora", image: "/grillora.png" },
    { title: "Elonia", image: "/elonia.png" },
    { title: "Lunora", image: "/lunora.png" },
    { title: "Corex", image: "/corex.png" },
    { title: "BitBloom", image: "/bitbloom.png" },
    { title: "BeatBloom / Chicora", image: "/chicora.png" },
  ],
   "Social Media": [
    { title: "English In 24 Hours", image: "/s1.png" },
    { title: "Stellar Migration", image: "/s2.png" },
    { title: "Restaurant Page", image: "/s3.png" },
    { title: "Christos Greek Cypriot Restaurant", image: "/s4.png" },
  ],

};

const highlights = [
  {
    icon: Globe,
    title: "Website Projects",
    desc: "Professional and responsive websites built for branding and business growth.",
  },
  {
    icon: Megaphone,
    title: "Lead Campaigns",
    desc: "Meta lead generation campaigns focused on quality results and lower CPL.",
  },
  {
    icon: ImageIcon,
    title: "Logo Designs",
    desc: "Brand identities designed to create strong visual impact and recognition.",
  },
  {
    icon: Share2,
    title: "Social Media Work",
    desc: "Managed digital pages with content, growth strategy, and audience engagement.",
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<Category>("Websites");

  return (
    <main className="bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="absolute top-24 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/35 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
                Portfolio
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                A Showcase Of My{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Creative & Digital Work
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                Explore my selected work across website development, lead
                generation campaigns, logo design, and social media management —
                all created with a premium, results-focused approach.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
                >
                  Hire Me
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="relative py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "border-yellow-400 bg-yellow-500/10 text-yellow-300 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
                      : "border-yellow-500/20 bg-white/[0.02] text-gray-300 hover:border-yellow-400/40 hover:text-yellow-300"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
              {portfolioData[activeTab].map((item, index) => (
                <motion.div
                  key={`${activeTab}-${item.title}-${index}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`group overflow-hidden rounded-[30px] border border-yellow-500/15 bg-white/[0.02] shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)] ${
                    activeTab === "Social Media"
                      ? "sm:col-span-2 xl:col-span-3"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-full bg-black ${
                      activeTab === "Social Media"
                        ? "h-[420px] md:h-[560px]"
                        : activeTab === "Logos"
                        ? "h-72"
                        : "h-64"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`transition duration-500 ${
                        activeTab === "Social Media"
                          ? "object-contain p-4"
                          : activeTab === "Logos"
                          ? "object-contain p-6"
                          : "object-cover group-hover:scale-105"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-2 text-sm leading-7 text-gray-300">
                        {item.subtitle}
                      </p>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-400 hover:underline"
                      >
                        Visit Website <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
          <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <div className="rounded-[34px] border border-yellow-500/15 bg-white/[0.02] p-8 shadow-[0_0_35px_rgba(212,175,55,0.08)] backdrop-blur-xl md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
              Let’s Work Together
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Want Similar{" "}
              <span className="text-yellow-400">Results For Your Brand?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Let’s create a strong digital presence through premium design,
              lead generation, websites, and social media strategies tailored
              for your business.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
              >
                Hire Me
              </a>

              <a
                href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}