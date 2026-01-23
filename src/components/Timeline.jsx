import { motion } from "framer-motion";

const experiences = [
  {
    role: "Backend Developer",
    company: "Phreetech",
    year: "2023 - Present",
    desc: "Built scalable APIs, payments, and optimized DB queries."
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-10 bg-gray-900">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">Experience</h2>
      {experiences.map(exp => (
        <motion.div
          key={exp.role}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-800 p-6 rounded-xl mb-6"
        >
          <h3>{exp.role} – {exp.company}</h3>
          <p className="text-gray-400">{exp.year}</p>
          <p className="mt-2">{exp.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
