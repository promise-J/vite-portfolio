import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I’m{" "}
        <span className="relative inline-block text-cyan-400">
          Promise Johnson
          {/* <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-cyan-400/40" /> */}
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mt-6 max-w-2xl text-base md:text-lg text-gray-400"
      >
        Full-stack Engineer • Backend Engineer • AI Engineer
        <br className="hidden sm:block" />
        Building scalable systems and teaching developers through code & humor.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400 hover:scale-[1.02]"
        >
          View Projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/70 px-6 py-3 font-medium text-cyan-400 transition hover:bg-cyan-500/10 hover:scale-[1.02] gold-shimmer"
        >
          Hire Me
        </a>
      </motion.div>
    </section>
  );
}
