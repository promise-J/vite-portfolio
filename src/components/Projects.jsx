const projects = [
  {
    title: "Sarvitt",
    desc: "Vendor–customer marketplace for buying and selling products and services.",
    live: "https://sarvitt.com/",
    github: "",
    featured: true,
  },
  {
    title: "Chuvi Laundry",
    desc: "A platform you can easily book orders for your laundries, manage your orders and where admin have specific features available to them",
    live: "https://www.chuvilaundry.com",
    github: "",
    featured: true,
  },
  {
    title: "Muta Fit",
    desc: "Fitness platform featuring workouts, diet plans, challenges, and performance tracking.",
    live: "https://muta.fit",
    github: "",
    featured: true,
  },
  // {
  //   title: "Plum Tactical Board",
  //   desc: "Interactive football tactics board with drag-and-drop players, drawing tools, and team analysis features.",
  //   live: "https://plum-tactical-board-fvzf.vercel.app/ ",
  //   github: "https://github.com/promise-J/plum-tactical-board",
  //   featured: true,
  // },
  {
    title: "P Collins World",
    desc: "Where savings, real estate and market place meet.",
    live: "https://pcollins-world.vercel.app/role-selection?mode=login",
    github: "",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 gold-shimmer">
          Projects
        </h2>
        <p className="mt-2 text-gray-400 max-w-2xl">
          A selection of production-grade systems, APIs, and platforms I’ve
          designed and built.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="
                group relative overflow-hidden rounded-2xl
                border border-white/10 bg-gray-900/70
                p-6 transition
                hover:-translate-y-1 hover:border-cyan-500/30
                hover:shadow-[0_20px_40px_rgba(34,211,238,0.08)]
                gold-shimmer
              "
          >
            {/* Glow overlay */}
            <div
              className="
                  pointer-events-none absolute inset-0 opacity-0
                  bg-linear-to-br from-cyan-500/10 via-transparent to-transparent
                  transition group-hover:opacity-100
                "
            />

            {/* Featured badge */}
            {p.featured && (
              <span className="absolute right-4 top-4 rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400 ring-1 ring-cyan-500/30">
                Featured
              </span>
            )}

            {/* Content */}
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {p.desc}
            </p>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-4">
              {p.github !== "" && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-1 rounded-lg
                    border border-white/10 px-4 py-2 text-sm
                    text-gray-300 transition
                    hover:border-cyan-500/40 hover:text-cyan-400
                  "
                >
                  GitHub
                  <span aria-hidden>↗</span>
                </a>
              )}

              {p.live !== "#" && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                      inline-flex items-center gap-1 rounded-lg
                      bg-cyan-500 px-4 py-2 text-sm font-medium
                      text-black transition hover:bg-cyan-400
                    "
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
