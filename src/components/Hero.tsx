"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-20 text-white md:pt-36 md:pb-28">
      {/* background blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
      </div>

      {/* animated svg lines */}
      <motion.svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-50 760C160 660 260 720 460 620C660 520 810 650 1000 520C1180 400 1290 430 1490 300"
          stroke="url(#goldLine1)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M980 120C1090 140 1200 180 1280 260C1350 335 1390 390 1460 470"
          stroke="url(#goldLine2)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 180H1440"
          stroke="url(#goldLine3)"
          strokeWidth="1"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
        <defs>
          <linearGradient id="goldLine1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(251,191,36,0)" />
            <stop offset="45%" stopColor="rgba(251,191,36,0.9)" />
            <stop offset="100%" stopColor="rgba(251,191,36,0)" />
          </linearGradient>
          <linearGradient id="goldLine2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(251,191,36,0)" />
            <stop offset="50%" stopColor="rgba(245,158,11,0.9)" />
            <stop offset="100%" stopColor="rgba(251,191,36,0)" />
          </linearGradient>
          <linearGradient id="goldLine3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(251,191,36,0)" />
            <stop offset="50%" stopColor="rgba(251,191,36,0.6)" />
            <stop offset="100%" stopColor="rgba(251,191,36,0)" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-2">
        {/* LEFT */}
        <div className="z-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-yellow-500"
          >
            3+ Years Experience • Fiverr Level 2 Seller
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl"
          >
            I Build{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Systems That Generate Clients
            </span>{" "}
            — Not Just Websites
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg"
          >
            Social Media Manager, Digital Marketing Manager, Website Developer,
            and HR Professional helping brands grow through websites, Meta lead
            generation, content strategy, branding, and social media management.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition duration-300 hover:-translate-y-1"
            >
              View Portfolio
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              "Meta Leads Generation",
              "Website Development",
              "Social Media Management",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-2xl"
        >
          {/* floating glow */}
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[40px] bg-yellow-500/10 blur-3xl"
          />

          <div className="relative rounded-[34px] border border-yellow-500/20 bg-gradient-to-br from-[#17110a]/95 via-[#0d0a07]/95 to-black/95 p-4 shadow-[0_0_70px_rgba(212,175,55,0.10)] backdrop-blur-xl md:p-5">
            <div className="rounded-[28px] border border-yellow-500/15 bg-black/75 p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                 
                  <h2 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    Digital Growth Overview
                  </h2>
                </div>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0,0,0,0)",
                      "0 0 20px rgba(250,204,21,0.18)",
                      "0 0 0 rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300"
                >
                  Premium
                </motion.div>
              </div>

              {/* graph box */}
              <div className="relative overflow-hidden rounded-[24px] border border-yellow-500/15 bg-gradient-to-br from-yellow-500/10 to-transparent p-5 md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.12),transparent_35%)]" />

                <div className="relative h-52 md:h-64">
                  <div className="absolute bottom-0 left-0 flex h-full w-full items-end gap-3 md:gap-4">
                    {[24, 34, 46, 62, 78, 92].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${h}%`, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.5 + i * 0.12 }}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-yellow-700 via-yellow-500 to-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.35)]"
                      />
                    ))}
                  </div>

                  <svg
                    viewBox="0 0 500 220"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M10 190 C 80 170, 120 140, 170 132 C 230 120, 280 85, 340 70 C 390 55, 430 30, 490 18"
                      fill="none"
                      stroke="rgba(251,191,36,0.95)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.6, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                  className="rounded-[20px] border border-yellow-500/15 bg-white/[0.02] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Experience
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-yellow-400">
                    3+
                  </h3>
                  <p className="text-sm text-gray-300">Years Professional</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.25 }}
                  className="rounded-[20px] border border-yellow-500/15 bg-white/[0.02] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Seller Level
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-yellow-400">
                    Level 2
                  </h3>
                  <p className="text-sm text-gray-300">Fiverr Profile</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* floating skill card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute -bottom-8 -left-2 w-[220px] rounded-[24px] border border-yellow-500/20 bg-black/80 p-4 shadow-[0_0_30px_rgba(212,175,55,0.10)] backdrop-blur-xl sm:left-[-20px] md:w-[260px]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-500/80">
              Core Skills
            </p>
            <div className="mt-3 space-y-2 text-sm text-gray-200">
              <p>• Meta Leads Generation</p>
              <p>• Website Development</p>
              <p>• Social Media Management</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}