export default function About() {
    return (
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          
          {/* Left: Title + summary */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 gold-shimmer">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a <span className="text-white font-medium">Backend Engineer</span> focused on
              building scalable, secure, and high-performance systems that power real-world products.
            </p>
          </div>
  
          {/* Right: Detail */}
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I specialize in <strong className="text-gray-300">Node.js, React, TypeScript and problem solving.</strong> I work
              extensively with <strong className="text-gray-300">MongoDB, Redis, RabbitMQ, PostgresSQL, Docker</strong>, and
              distributed microservice architectures.
            </p>
  
            <p>
              I’ve built production-grade systems including Fitness application (Muta Fit) platforms,
              payment ledgers, API gateways, and real-time chat applications —
              with a strong emphasis on system design, reliability, and performance.
            </p>
  
            <p>
              Beyond engineering, I create educational tech content that breaks down
              complex backend concepts using clarity, storytelling, and a bit of humor.
            </p>
          </div>
        </div>
      </section>
    );
  }
  