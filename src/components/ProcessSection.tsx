"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, MonitorSmartphone, BarChart3, Rocket } from "lucide-react";

const topSteps = [
  {
    icon: Lightbulb,
    title: "Research",
    desc: "Understanding brand goals, audience, and project needs.",
  },
  {
    icon: PenTool,
    title: "Planning",
    desc: "Creating a clear strategy for design, content, and growth.",
  },
  {
    icon: MonitorSmartphone,
    title: "Execution",
    desc: "Building websites, campaigns, and content professionally.",
  },
  {
    icon: BarChart3,
    title: "Optimization",
    desc: "Improving performance, engagement, and conversions.",
  },
  {
    icon: Rocket,
    title: "Growth",
    desc: "Scaling results with consistency and data-driven updates.",
  },
];

const timeline = [
  {
    year: "Step 01",
    title: "Requirements",
    desc: "Business goals, audience, and expectations are identified clearly.",
  },
  {
    year: "Step 02",
    title: "Strategy",
    desc: "A proper roadmap is built for branding, content, and execution.",
  },
  {
    year: "Step 03",
    title: "Development",
    desc: "Website design, campaigns, and creative assets are produced.",
  },
  {
    year: "Step 04",
    title: "Launch",
    desc: "The project goes live with full professional presentation.",
  },
  {
    year: "Step 05",
    title: "Results",
    desc: "Tracking, improvements, and growth-focused optimization continue.",
  },
];

const bottomPhases = [
  {
    label: "01",
    title: "Discovery",
    text: "Understanding project direction and business requirements.",
  },
  {
    label: "02",
    title: "Design",
    text: "Creating premium visuals, structure, and digital identity.",
  },
  {
    label: "03",
    title: "Build",
    text: "Developing pages, content, and growth-focused assets.",
  },
  {
    label: "04",
    title: "Deliver",
    text: "Final launch, support, and refinement for stronger results.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
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
            My Process
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            How I <span className="text-yellow-400">Work</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            A structured workflow designed to deliver quality, consistency, and
            business-focused digital results.
          </p>
        </motion.div>

        {/* TOP HEX / PROCESS BLOCKS */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {topSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative overflow-hidden rounded-[26px] border border-yellow-500/15 bg-white/[0.02] p-5 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_35%)]" />
                </div>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TIMELINE STRIP */}
        <div className="mt-20 overflow-hidden rounded-[30px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300" />
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-500">
              Workflow Timeline
            </p>
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500" />
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-yellow-500/20 via-yellow-400/60 to-yellow-500/20" />

            <div className="grid grid-cols-5 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pt-14"
                >
                  <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-yellow-500/25 bg-black text-sm font-semibold text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.18)]">
                    {index + 1}
                  </div>

                  <div className="rounded-[22px] border border-yellow-500/15 bg-black/40 p-4 text-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-yellow-500">
                      {item.year}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* mobile timeline */}
          <div className="space-y-4 md:hidden">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-[22px] border border-yellow-500/15 bg-black/40 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-500/25 bg-black text-sm font-semibold text-yellow-400">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-yellow-500">
                    {item.year}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM PHASES */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/40" />
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-500">
              Delivery Phases
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/40" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {bottomPhases.map((phase, index) => (
              <motion.div
                key={phase.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[26px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl"
              >
                <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-yellow-500/15 to-transparent" />

                <div className="relative z-10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/25 bg-yellow-500/10 text-sm font-semibold text-yellow-400">
                    {phase.label}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {phase.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}