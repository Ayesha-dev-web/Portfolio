"use client";

import { motion } from "framer-motion";
import { Briefcase, MonitorSmartphone, Users } from "lucide-react";

const experiences = [
  {
    icon: Users,
    role: "HR + Social Media Executive",
    company: "AT Visas",
    period: "Current",
    points: [
      "Managing HR support, recruitment coordination, and internal communication.",
      "Handling social media platforms, content strategy, and audience engagement.",
      "Supporting branding, visibility, and lead generation campaigns.",
    ],
  },
  {
    icon: MonitorSmartphone,
    role: "Website Developer & Client Coordinator",
    company: "F16 Media",
    period: "Professional Experience",
    points: [
      "Designed and developed business websites with modern and responsive layouts.",
      "Managed client communication, requirements gathering, and project delivery.",
      "Ensured brand-focused presentation and user-friendly digital experiences.",
    ],
  },
  {
    icon: Briefcase,
    role: "HR Manager",
    company: "Jobs Mediator",
    period: "Professional Experience",
    points: [
      "Handled hiring support, candidate screening, and recruitment workflows.",
      "Managed onboarding communication and maintained organized HR documentation.",
      "Coordinated staffing requirements and improved recruitment handling.",
    ],
  },
];

export default function ExperienceSection() {
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
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Professional <span className="text-yellow-400">Experience</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            A strong background in HR, website development, client coordination,
            and digital growth-focused roles.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/20 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-0 top-7 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/25 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="group relative overflow-hidden rounded-[30px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)] md:p-8">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_35%)]" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm font-medium uppercase tracking-[0.22em] text-yellow-500">
                            {item.company}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">
                            {item.role}
                          </h3>
                        </div>

                        <span className="inline-flex w-fit rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
                          {item.period}
                        </span>
                      </div>

                      <div className="mt-6 space-y-3">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 text-sm leading-7 text-gray-300 md:text-base"
                          >
                            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
                            <p>{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}