"use client";

import { motion } from "framer-motion";

export default function ResultsSection() {
  return (
    <section className="relative bg-[#050505] py-24 text-white overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-sm tracking-[0.28em] text-yellow-500">
            Results
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            Proven <span className="text-yellow-400">Lead Generation Results</span>
          </h2>
        </motion.div>

        {/* stats */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-yellow-500/20 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
            <p className="mt-3 text-gray-300">Leads Generated</p>
          </motion.div>

          {/* stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-yellow-500/20 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            <h3 className="text-4xl font-bold text-yellow-400">$2.9</h3>
            <p className="mt-3 text-gray-300">Cost Per Lead</p>
          </motion.div>

          {/* stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[30px] border border-yellow-500/20 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            <h3 className="text-4xl font-bold text-yellow-400">High ROI</h3>
            <p className="mt-3 text-gray-300">Campaign Performance</p>
          </motion.div>
        </div>

        {/* platforms */}
        <div className="mt-12 flex justify-center gap-6 text-gray-400 text-sm">
          <span>Meta</span>
          <span>Facebook</span>
          <span>TikTok</span>
          <span>Google</span>
        </div>
      </div>
    </section>
  );
}