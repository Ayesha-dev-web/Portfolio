"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase text-sm tracking-[0.28em] text-yellow-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            Let’s <span className="text-yellow-400">Work Together</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Ready to grow your business, generate leads, or build a professional website?  
            Let’s discuss your project.
          </p>
        </motion.div>

        {/* contact box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 rounded-[30px] border border-yellow-500/20 bg-white/[0.02] p-8 md:p-10 shadow-[0_0_35px_rgba(212,175,55,0.08)] backdrop-blur-xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* email */}
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                <Mail size={22} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-medium">
                  hafsabintehrb@gmail.com
                </p>
              </div>
            </div>

            {/* phone */}
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                <Phone size={22} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-medium">
                  +92 317 5108000
                </p>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-10 flex justify-center">
           <a
  href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
  target="_blank"
  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
>
  Message on WhatsApp <Send size={16} />
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}