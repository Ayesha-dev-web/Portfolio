"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-yellow-500">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Professional <span className="text-yellow-400">Digital Expert</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            I am a Social Media Manager, Digital Marketing Manager, Website Developer,
            and HR Professional with over 3 years of experience helping brands grow online.
            I specialize in building digital presence, generating leads, and delivering
            results-driven strategies for businesses.
          </p>

          <p className="mt-4 text-gray-400 leading-7">
            From creating professional websites to managing social media and running
            high-converting Meta campaigns, I focus on quality, performance, and growth.
            I have also worked with international clients and handled complete digital
            solutions from strategy to execution.
          </p>

          {/* small highlights */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="border border-yellow-500/20 px-4 py-2 rounded-full text-sm">
              3+ Years Experience
            </span>
            <span className="border border-yellow-500/20 px-4 py-2 rounded-full text-sm">
              Fiverr Level 2 Seller
            </span>
            <span className="border border-yellow-500/20 px-4 py-2 rounded-full text-sm">
              International Clients
            </span>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="grid gap-6"
        >
          {/* Card 1 */}
          <div className="rounded-[28px] border border-yellow-500/20 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                <User />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="mt-4 text-gray-300">
              A multi-skilled professional combining marketing, design, and HR expertise.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] border border-yellow-500/20 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                <Briefcase />
              </div>
              <h3 className="text-xl font-semibold">What I Do</h3>
            </div>
            <p className="mt-4 text-gray-300">
              Digital marketing, website development, social media management, and lead generation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[28px] border border-yellow-500/20 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                <Globe />
              </div>
              <h3 className="text-xl font-semibold">My Focus</h3>
            </div>
            <p className="mt-4 text-gray-300">
              Helping businesses grow through strategy, creativity, and performance-driven results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}