import Navbar from "../../components/NavBar";
import ProcessSection from "@/components/ProcessSection";
import Rescult from "../../components/Result";
import Footer from "../../components/Footer";
import {
  Megaphone,
  Globe,
  MonitorSmartphone,
  Image as ImageIcon,
  Video,
  PenSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const overviewCards = [
  {
    icon: Megaphone,
    title: "Meta Lead Generation",
    desc: "Targeted campaigns that bring quality leads and real business growth.",
  },
  {
    icon: Globe,
    title: "Social Media Management",
    desc: "Content, engagement, and strategy to grow your online presence.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    desc: "Modern, responsive, and conversion-focused websites for brands.",
  },
];

const detailedServices = [
  {
    icon: Megaphone,
    title: "Meta Lead Generation",
    intro:
      "I help businesses generate high-quality leads through targeted Meta advertising strategies designed for performance and growth.",
    includes: [
      "Campaign Setup & Strategy",
      "Audience Research & Targeting",
      "Ad Creative Direction",
      "A/B Testing",
      "Lead Funnel Optimization",
      "Performance Reporting",
    ],
    results: [
      "Lower Cost Per Lead",
      "Better Quality Inquiries",
      "Scalable Campaign Structure",
    ],
  },
  {
    icon: Globe,
    title: "Social Media Management",
    intro:
      "I build brand presence through consistent posting, professional page management, and audience-focused growth strategies.",
    includes: [
      "Content Planning",
      "Post Design & Scheduling",
      "Page Optimization",
      "Audience Engagement",
      "Hashtag & Growth Strategy",
      "Insights & Analytics Review",
    ],
    results: [
      "Stronger Brand Visibility",
      "Better Engagement",
      "Consistent Online Presence",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    intro:
      "I create fast, premium, and responsive websites that help businesses look professional and convert visitors into clients.",
    includes: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Responsive Design",
      "Clean UI/UX Layout",
      "Basic SEO Structure",
    ],
    results: [
      "Professional Online Presence",
      "Improved User Experience",
      "Stronger Conversion Potential",
    ],
  },
  {
    icon: ImageIcon,
    title: "Graphic Designing",
    intro:
      "Creative visuals that make your brand stand out and communicate professionally across digital platforms.",
    includes: [
      "Social Media Post Design",
      "Ad Creatives",
      "Banner Design",
      "Logo Design",
      "Branding Elements",
    ],
    results: [
      "Eye-Catching Visual Identity",
      "Better Brand Recall",
      "Professional Presentation",
    ],
  },
  {
    icon: Video,
    title: "Video Editing",
    intro:
      "Professional video editing for reels, ads, promos, and branded content that improves reach and engagement.",
    includes: [
      "Reels & Shorts Editing",
      "Promotional Videos",
      "Ad Video Edits",
      "Transitions & Motion Effects",
      "Text & Caption Styling",
    ],
    results: [
      "Higher Content Engagement",
      "Better Viewer Retention",
      "More Professional Content Output",
    ],
  },
  {
    icon: PenSquare,
    title: "Content Writing",
    intro:
      "Clear, engaging, and conversion-focused content tailored for websites, ads, and social media communication.",
    includes: [
      "Website Content",
      "Ad Copywriting",
      "Social Media Captions",
      "Brand Messaging",
      "Promotional Copy",
    ],
    results: [
      "Clearer Communication",
      "Improved Brand Voice",
      "Stronger Conversion Messaging",
    ],
  },
];

const whyChoose = [
  "Multi-skill professional combining marketing, tech, and branding",
  "3+ years of practical experience",
  "Fiverr Level 2 Seller",
  "Strong communication and client handling",
  "Experience with international clients and business-focused delivery",
  "Results-driven approach across lead generation, websites, and content",
];

export default function ServicesPage() {
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
                Services
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Transform Your Business With{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Premium Digital Services
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                I provide high-converting digital solutions including lead
                generation, website development, social media growth, content,
                and creative services that help businesses stand out and achieve
                real results.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
                >
                  Get Started
                </a>

                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
                >
                  View Portfolio
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2">
                  3+ Years Experience
                </span>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2">
                  Fiverr Level 2 Seller
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-yellow-500/20 bg-white/[0.02] p-6 shadow-[0_0_35px_rgba(212,175,55,0.08)] backdrop-blur-xl">
                <div className="grid gap-5">
                  {overviewCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="rounded-[24px] border border-yellow-500/15 bg-black/40 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                            <Icon size={22} strokeWidth={1.8} />
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-gray-300">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW CARDS */}
      <section className="relative py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {overviewCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-[28px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {card.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-yellow-400">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ProcessSection/>

      {/* DETAILED SERVICES */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500/35 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
              Detailed Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Everything You Need For{" "}
              <span className="text-yellow-400">Digital Growth</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
              Each service is structured to improve visibility, branding,
              performance, and results for your business.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {detailedServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-[32px] border border-yellow-500/15 bg-white/[0.02] p-6 shadow-[0_0_30px_rgba(212,175,55,0.06)] backdrop-blur-xl md:p-8"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.2fr,0.9fr,0.9fr]">
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400">
                          <Icon size={24} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-2xl font-semibold text-white md:text-3xl">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-5 text-sm leading-8 text-gray-300 md:text-base">
                        {service.intro}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-yellow-500/15 bg-black/35 p-5">
                      <h4 className="text-lg font-semibold text-yellow-400">
                        Services Include
                      </h4>
                      <div className="mt-4 space-y-3">
                        {service.includes.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="mt-1 shrink-0 text-yellow-400"
                            />
                            <p className="text-sm leading-7 text-gray-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-yellow-500/15 bg-black/35 p-5">
                      <h4 className="text-lg font-semibold text-yellow-400">
                        Results
                      </h4>
                      <div className="mt-4 space-y-3">
                        {service.results.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="mt-1 shrink-0 text-yellow-400"
                            />
                            <p className="text-sm leading-7 text-gray-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[34px] border border-yellow-500/15 bg-white/[0.02] p-8 shadow-[0_0_30px_rgba(212,175,55,0.06)] backdrop-blur-xl md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-yellow-500">
                Why Choose Me
              </p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                A Professional Partner For{" "}
                <span className="text-yellow-400">Your Business Growth</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-yellow-500/15 bg-black/35 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-yellow-400"
                    />
                    <p className="text-sm leading-7 text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Rescult />

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
              Ready to Grow Your{" "}
              <span className="text-yellow-400">Business?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Let’s build strong digital systems that improve visibility,
              generate leads, and create professional online presence for your
              business.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition hover:-translate-y-1"
              >
                Hire Me
              </a>

              <a
                href="https://wa.me/923175108000?text=Hi%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:text-yellow-300"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}