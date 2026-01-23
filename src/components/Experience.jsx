export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 gold-shimmer">
          Experience
        </h2>

        {/* Experience Item */}
        <div className="relative rounded-2xl border border-white/10 bg-gray-900/70 p-6 md:p-8 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
          {/* Timeline animated dot */}
          <span className="absolute -left-3 top-8 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.15)] animate-scan-diagonal" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Backend Developer
              </h3>
              <p className="text-sm text-cyan-400">Phreetech</p>
            </div>

            <span className="text-xs text-gray-400">2023 — Present</span>
          </div>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
            Built and scaled production backend systems with a strong focus on
            performance, security, and reliability.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              • Designed REST & event-driven APIs consumed by mobile and web
              clients
            </li>
            <li>
              • Optimized MongoDB queries and indexes, reducing response times
            </li>
            <li>
              • Implemented secure payment integrations and transaction
              workflows
            </li>
            <li>
              • Collaborated with frontend and product teams to ship features
              fast
            </li>
          </ul>
        </div>
      </div>

      {/* Add custom animation in JSX style */}
      <style jsx>{`
        @keyframes scan-diagonal {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(8px, 8px); /* down-right */
          }
          50% {
            transform: translate(0, 16px); /* straight down */
          }
          75% {
            transform: translate(-8px, 8px); /* up-left */
          }
          100% {
            transform: translate(0, 0); /* back to start */
          }
        }

        .animate-scan-diagonal {
          animation: scan-diagonal 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
