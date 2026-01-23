const skills = {
    Backend: ["Node.js", "TypeScript", "Go", "Rust", "Python", "Rails", "GraphQL"],
    Frontend: ["React", "Next.js", "TailwindCSS", "Chakra UI"],
    Databases: ["MongoDB", "PostgreSQL", "Redis"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "CI/CD"],
    Architecture: ["Microservices", "Event-driven", "System Design", "API Gateway"],
  };
  
  export default function Skills() {
    return (
      <section
        id="skills"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400 gold-shimmer">
            Skills & Expertise
          </h2>
          <p className="mt-2 max-w-2xl text-gray-400">
            A focused toolkit for building scalable, production-grade systems
            across backend, frontend, and infrastructure.
          </p>
        </div>
  
        {/* Skill Groups */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10 gold-shimmer"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {group}
              </h3>
  
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                 <li
                 key={skill}
                 className="
                   cursor-pointer rounded-full
                   border border-white/10
                   px-3 py-1 text-xs text-gray-300
                   transition
                   shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                   hover:bg-cyan-900
                   hover:shadow-[inset_0_0_0_1px_rgba(34,211,238,0.35)]
                   group-hover:border-cyan-500/30
                   group-hover:text-white
                 "
               >
                 {skill}
               </li>               
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  