import Navbar from "../../components/NavBar";

const projects = [
  "fsginstitute.com",
  "atvisas.com",
  "digitalajk.com",
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="px-6 pt-32 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold md:text-6xl">
            My <span className="text-yellow-400">Portfolio</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            A collection of websites and digital work built with a modern and professional approach.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-3xl border border-yellow-500/20 bg-white/[0.02] p-6 shadow-[0_0_25px_rgba(212,175,55,0.06)]"
              >
                <div className="mb-4 h-48 rounded-2xl border border-yellow-500/20 bg-black/40" />
                <h3 className="text-xl font-semibold text-yellow-400">{project}</h3>
                <p className="mt-3 leading-7 text-gray-300">
                  Premium website design with strong layout, branding, and business-focused structure.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}