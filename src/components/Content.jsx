export default function Content() {
    return (
      <section id="content" className="py-24 px-6 md:px-10 max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 gold-shimmer">
          Tech Content & Learning
        </h2>
  
        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-lg md:text-xl">
          I create <span className="text-white font-semibold">educational tech content </span> 
          with a mix of humor and real-world engineering examples. My goal is to help 
          beginners and intermediate developers grasp complex concepts such as 
          <span className="text-cyan-400 font-medium"> Docker, Kubernetes, APIs,</span> 
          and <span className="text-cyan-400 font-medium">system design</span> in a practical, 
          engaging way.
        </p>
  
        {/* Optional CTA */}
        <p className="mt-6 text-gray-500">
          Follow along on my blog, YouTube, or GitHub to see how these concepts come alive in code.
        </p>
      </section>
    );
  }
  