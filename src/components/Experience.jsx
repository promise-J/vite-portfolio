export default function Experience() {
  const experiences = [
    {
      role: "Chief Technology Officer (CTO)",
      company: "Appser",
      period: "Jan 2026 — Present",
      description:
        "Driving the technical vision and execution of a multi-vendor food and gas delivery platform, focused on scalability, reliability, and real-time operations.",
      points: [
        "Architected and led development of a multi-vendor platform connecting food and gas suppliers with customers in real-time",
        "Designed a scalable backend (Node.js, MongoDB) supporting vendor onboarding, order processing, and dispatch workflows",
        "Implemented real-time order tracking and status updates using WebSockets, improving delivery transparency and user trust",
        "Optimized database queries and caching strategies, significantly reducing API latency under peak load",
        "Built a modular payment system integrating Paystack, ensuring secure and seamless transactions",
        "Led and mentored a growing engineering team, establishing coding standards, PR workflows, and system design practices",
        "Collaborated with product and operations teams to refine logistics flow, reducing failed deliveries and improving fulfillment efficiency",
      ],
    },
    {
      role: "Lead Engineer",
      company: "Igorithm",
      period: "March 2025 — Dec 2025",
      description:
        "Building and launching production-grade applications, experimenting with scalable architectures, and solving real-world problems across fintech, logistics, and real-time systems.",
      points: [
        "Developed and deployed multiple full-stack applications including ride-hailing systems, survey platforms, and real-time chat apps",
        "Designed event-driven architectures and microservices for scalability and maintainability",
        "Implemented secure authentication systems using JWT and role-based access control (RBAC)",
        "Integrated third-party services (payments, cloud storage, APIs) to enable production-ready features",
        "Optimized backend performance through indexing, query tuning, and efficient data modeling",
        "Continuously explored new technologies including Go and system design patterns to improve backend performance and scalability",
      ],
    },
    {
      role: "Full-Stack Software Engineer",
      company: "Phreetech (Remote)",
      period: "June 2023 — Jan 2025",
      description:
        "Leading development of scalable full-stack systems powering thousands of daily transactions.",
      points: [
        "Led development of an analytics dashboard (Node.js + React) tracking 10k+ daily transactions, reducing manual reporting by 70%",
        "Engineered modular RESTful APIs with <300ms response time across services",
        "Built cron-based data sync tools across multiple platforms",
        "Improved PR workflow using Git & Bitbucket, reducing review cycle time by 50%",
      ],
    },
    {
      role: "Software Engineer / Technical Trainer",
      company: "LmTechub (On-site)",
      period: "Feb 2023 — June 2023",
      description:
        "Trained and mentored aspiring developers while building real-world applications.",
      points: [
        "Designed curriculum training 30+ interns in HTML, CSS, Git, JavaScript, and APIs",
        "Built GraphQL-based Student Management App for modern API teaching",
        "Mentored 10+ junior developers through code reviews and agile practices",
        "Implemented real-time feedback systems using Socket.IO",
      ],
    },
    {
      role: "Full-Stack Software Engineer",
      company: "Varsell Nig (Remote)",
      period: "Oct 2022 — Jan 2023",
      description:
        "Built backend systems for supply chain solutions used by SMEs.",
      points: [
        "Architected backend system with JWT authentication for 5+ SMEs",
        "Implemented role-based access control (RBAC)",
        "Documented APIs using Swagger for seamless onboarding",
        "Accelerated feature delivery by 25% through weekly demos",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Solution Academy",
      period: "Nov 2021 — Aug 2022",
      description:
        "Developed and improved education-based platforms and systems.",
      points: [
        "Built student performance tracker using Node.js, React, MongoDB",
        "Implemented OTP-based multi-factor authentication",
        "Redesigned core platform UI/UX",
        "Integrated Cloudinary & Mailgun, improving media speed by 33%",
      ],
    },
    {
      role: "Full-Stack Intern",
      company: "Microverse (Remote)",
      period: "Jan 2021 — Oct 2021",
      description:
        "Collaborated globally to build production-ready applications.",
      points: [
        "Worked with engineers across 5+ countries using GitHub, Slack, Zoom",
        "Built apps with Rails, React, PostgreSQL using TDD",
        "Implemented CI/CD pipelines with GitHub Actions & Heroku (60% faster deploys)",
        "Completed 20+ full-stack projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 gold-shimmer">
          Experience
        </h2>

        <div className="relative border-l border-white/10 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              <span className="absolute -left-1.75 top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.15)] group-hover:scale-125 transition" />

              <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-6 md:p-8 hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-cyan-400">{exp.company}</p>
                  </div>

                  <span className="text-xs text-gray-400">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-3 text-gray-400 text-sm max-w-3xl">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}