import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Star, MessageCircle, BadgeCheck, Users, Video } from "lucide-react";

const reviewImages = [
  "/testimonials/review-1.png",
  "/testimonials/review-2.png",
  "/testimonials/review-3.png",
  "/testimonials/review-4.png",
];

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Professional Delivery",
    desc: "Clients value clean work, timely delivery, and reliable communication.",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    desc: "Positive feedback reflects trust, clarity, and service quality.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    desc: "Strong communication helps every project move smoothly and professionally.",
  },
];

export default function TestimonialsPage() {
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
                Testimonials
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Client{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Feedback & Reviews
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                Real feedback from clients through video testimonials and Fiverr
                review screenshots, reflecting trust, professional delivery, and
                quality results.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <span className="ml-2 text-sm uppercase tracking-[0.2em] text-yellow-300">
                  Fiverr Reviews
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
                >
                  Work With Me
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {trustPoints.map((item) => {
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

              <div className="rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                  <Video size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Video Testimonials
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Direct client experiences shared through video feedback and
                  real project satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500/35 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
              Video Testimonials
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Real <span className="text-yellow-400">Client Feedback</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
              Watch direct feedback from clients about communication, delivery,
              and overall project experience.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[1, 2].map((num) => (
              <div
                key={num}
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
                  <p className="mt-2 text-sm leading-7 text-gray-300">
                    Client feedback highlighting quality, communication, and
                    professional results.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVERR REVIEWS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
              Fiverr Reviews
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Screenshot <span className="text-yellow-400">Reviews</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
              A selection of review screenshots showing positive client
              experiences and project satisfaction.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {reviewImages.map((image, index) => (
              <div
                key={image}
                className="group overflow-hidden rounded-[26px] border border-yellow-500/15 bg-white/[0.02] p-3 shadow-[0_0_25px_rgba(212,175,55,0.06)] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]"
              >
                <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-black">
                  <Image
                    src={image}
                    alt={`Fiverr review ${index + 1}`}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 text-center shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
              <span className="text-yellow-400">Professional Delivery</span>
              <span>•</span>
              <span>Clear Communication</span>
              <span>•</span>
              <span>Client Satisfaction</span>
              <span>•</span>
              <span>Results-Driven Work</span>
            </div>
          </div>
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
              Ready For Similar{" "}
              <span className="text-yellow-400">Client Experience?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Let’s build a professional digital solution for your business with
              clear communication, quality delivery, and strong results.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
              >
                WhatsApp Me
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}