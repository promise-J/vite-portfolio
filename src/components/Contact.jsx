export default function Contact() {
    return (
      <section
        id="contact"
        className="py-24 px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center relative overflow-hidden"
      >
        {/* Decorative circle animation (optional) */}
        <span className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 animate-ping"></span>
        <span className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 animate-ping delay-2000"></span>
  
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          Let’s build something <span className="text-white font-semibold">impactful</span> together.
        </p>
  
        <a
          href="mailto:chiemelapromise30@gmail.com"
          className="inline-block px-8 py-3 md:px-10 md:py-4 bg-cyan-500 hover:bg-cyan-400 transition text-white font-medium rounded-lg shadow-lg hover:shadow-cyan-500/50"
        >
          Send Email
        </a>
  
        {/* Optional social links */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/promise-J" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/promise-chiemela/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
            LinkedIn
          </a>
          <a href="https://x.com/Promise94353263" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
            Twitter
          </a>
        </div>
      </section>
    );
  }
  