"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const reviewImages = [
  "/testimonials/review-1.png",
  "/testimonials/review-2.png",
  "/testimonials/review-3.png",
  "/testimonials/review-4.png",
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Client <span className="text-yellow-400">Feedback & Reviews</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            Real client feedback through video testimonials and Fiverr reviews.
          </p>
        </motion.div>

        {/* videos */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {[1, 2].map((num, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-hidden rounded-[30px] border border-yellow-500/15 bg-white/[0.02] p-4 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[24px] bg-black">
                <video
                  controls
                  className="h-full w-full rounded-[24px]"
                  preload="metadata"
                >
                  <source
                    src={num === 1 ? "/v1.mp4" : "/v2.mp4"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4 px-2 pb-2">
                <h3 className="text-lg font-semibold text-white">
                  Video Testimonial {num}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Client feedback highlighting quality, communication, and results.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* review screenshots */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-center gap-2 text-yellow-400">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <span className="ml-2 text-sm uppercase tracking-[0.2em] text-yellow-300">
              Fiverr Reviews
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {reviewImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-[26px] border border-yellow-500/15 bg-white/[0.02] p-3 transition hover:-translate-y-1 hover:border-yellow-400/30"
              >
                <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-black">
                  <Image
                    src={image}
                    alt={`Review ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* bottom text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Trusted by clients for professional work, clear communication, and strong results.
          </p>
        </div>
      </div>
    </section>
  );
}