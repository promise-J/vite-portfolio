const skills = {
  Backend: [
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Go", url: "https://go.dev/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "GraphQL", url: "https://graphql.org/" },
  ],
  Frontend: [
    { name: "React", url: "https://react.dev/" },
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "TailwindCSS", url: "https://tailwindcss.com/" },
    { name: "Chakra UI", url: "https://chakra-ui.com/" },
  ],
  Databases: [
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "Redis", url: "https://redis.io/" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "Kubernetes", url: "https://kubernetes.io/" },
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
  ],
  Architecture: [
    { name: "Microservices", url: "https://microservices.io/" },
    { name: "Event-driven", url: "https://en.wikipedia.org/wiki/Event-driven_architecture" },
    { name: "System Design", url: "https://en.wikipedia.org/wiki/Systems_design" },
    { name: "API Gateway", url: "https://microservices.io/patterns/apigateway.html" },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
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
                <li key={skill.name}>
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block cursor-pointer rounded-full
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
                    {skill.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}