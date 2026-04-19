"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

type PortfolioItem = {
  title: string;
  image: string;
  subtitle?: string;
  link?: string;
};

const categories = ["Logos", "Leads", "Websites", "Social Media"] as const;
type Category = (typeof categories)[number];

const portfolioData: Record<Category, PortfolioItem[]> = {
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

  "Social Media": [
    { title: "English In 24 Hours", image: "/s1.png" },
    { title: "Stellar Migration", image: "/s2.png" },
    { title: "Restaurant Page", image: "/s3.png" },
    { title: "Christos Greek Cypriot Restaurant", image: "/s4.png" },
  ],
};

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<Category>("Websites");

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
            My Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Featured <span className="text-yellow-400">Creative & Digital Work</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            A collection of logo design, lead generation campaigns, website development,
            and social media management work presented in one place.
          </p>
        </motion.div>

        {/* tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
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

        {/* grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          >
            {portfolioData[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${item.title}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-[30px] border border-yellow-500/15 bg-white/[0.02] shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
  src={item.image}
  alt={item.title}
  fill
  className={`transition duration-500 ${
    activeTab === "Social Media"
      ? "object-contain p-4"
      : "object-cover group-hover:scale-105"
  }`}
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>

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
                      Visit Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-6 py-3 text-sm font-medium text-yellow-300 transition hover:border-yellow-400/40 hover:bg-yellow-500/15"
          >
            Download CV <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}