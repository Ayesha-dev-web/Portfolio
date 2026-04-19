import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  Send,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "hafsabintehrb@gmail.com",
    href: "mailto:hafsabintehrb@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 317 5108000",
    href: "tel:+923175108000",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Islamabad, Pakistan",
    href: "#",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "Available for freelance projects",
    href: "#",
  },
];

export default function ContactPage() {
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
                Contact
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Let’s Create Something{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Powerful Together
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                Whether you need lead generation, website development, social
                media management, branding support, or digital strategy, I’m
                here to help your business grow with a premium and
                results-focused approach.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
                >
                  WhatsApp Me
                </a>

                <a
                  href="mailto:hafsabintehrb@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const isLink = card.href !== "#";

                return isLink ? (
                  <a
                    key={card.title}
                    href={card.href}
                    className="rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {card.value}
                    </p>
                  </a>
                ) : (
                  <div
                    key={card.title}
                    className="rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {card.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500/35 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            {/* FORM */}
            <div className="rounded-[34px] border border-yellow-500/15 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.06)] backdrop-blur-xl md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
                Send a Message
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Let’s Discuss Your Project
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">
                Share your requirements and I’ll get back to you with the best
                way to move forward.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-yellow-500/15 bg-black/40 px-5 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-400/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-yellow-500/15 bg-black/40 px-5 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-400/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-2xl border border-yellow-500/15 bg-black/40 px-5 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-400/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project"
                    className="w-full rounded-2xl border border-yellow-500/15 bg-black/40 px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-yellow-400/40"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            {/* SIDE INFO */}
            <div className="space-y-6">
              <div className="rounded-[30px] border border-yellow-500/15 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.06)] backdrop-blur-xl">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
                  Quick Contact
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Reach Out Directly
                </h3>

                <div className="mt-6 space-y-5">
                  <a
                    href="mailto:hafsabintehrb@gmail.com"
                    className="flex items-start gap-4 rounded-2xl border border-yellow-500/15 bg-black/35 p-4 transition hover:border-yellow-400/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="mt-1 text-sm text-white md:text-base">
                        hafsabintehrb@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+923175108000"
                    className="flex items-start gap-4 rounded-2xl border border-yellow-500/15 bg-black/35 p-4 transition hover:border-yellow-400/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="mt-1 text-sm text-white md:text-base">
                        +92 317 5108000
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 rounded-2xl border border-yellow-500/15 bg-black/35 p-4 transition hover:border-yellow-400/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="mt-1 text-sm text-white md:text-base">
                        Chat directly for quick response
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-[30px] border border-yellow-500/15 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.06)] backdrop-blur-xl">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
                  Why Contact Me
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Quick communication and professional response",
                    "Premium digital support for brands and businesses",
                    "Lead generation, websites, and social media expertise",
                    "Freelance-friendly and project-focused workflow",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
                      <p className="text-sm leading-7 text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
              Ready to Start Your{" "}
              <span className="text-yellow-400">Next Project?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Let’s build strong digital presence, generate better results, and
              create something professional for your brand.
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
                href="mailto:hafsabintehrb@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}