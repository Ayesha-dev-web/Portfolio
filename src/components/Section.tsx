"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  BadgeCheck,
  Megaphone,
  Globe,
  Share2,
} from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "3+ Years Experience",
    desc: "Strong experience across digital marketing, client handling, and business growth.",
  },
  {
    icon: BadgeCheck,
    title: "Level 2 Seller",
    desc: "Trusted Fiverr profile focused on quality delivery and client satisfaction.",
  },
  {
    icon: Megaphone,
    title: "Meta Leads Expert",
    desc: "Lead generation campaigns designed to attract quality inquiries and conversions.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive, and conversion-focused websites for brands and businesses.",
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    desc: "Content strategy, branding, posting, and audience engagement across platforms.",
  },
];

export default function HighlightsSection() {
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
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
            Professional Highlights
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Why Brands <span className="text-yellow-400">Work With Me</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            A quick overview of the strengths, expertise, and value I bring to
            digital projects, websites, and growth-focused campaigns.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group relative overflow-hidden rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_35%)]" />
                </div>

                <div className="relative z-10">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}