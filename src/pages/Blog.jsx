const posts = [
    {
      title: "Building a Tactical Board from Scratch",
      excerpt:
        "A deep dive into how I built a football tactics engine using canvas, object models, and interaction systems.",
      date: "April 2026",
      readTime: "6 min read",
      tag: "Engineering",
    },
    {
      title: "Designing Smooth Drag & Drop Interactions",
      excerpt:
        "Handling player movement, hover states, and selection logic without breaking performance.",
      date: "March 2026",
      readTime: "5 min read",
      tag: "UI/UX",
    },
    {
      title: "Undo/Redo in Canvas Apps (The Right Way)",
      excerpt:
        "Why snapshot-based undo systems matter and how to structure them properly.",
      date: "March 2026",
      readTime: "7 min read",
      tag: "Architecture",
    },
    {
      title: "From Idea to Product: Plum Tactical Board",
      excerpt:
        "The journey of building a real football analysis tool from concept to working product.",
      date: "February 2026",
      readTime: "4 min read",
      tag: "Product",
    },
  ];
  
  export default function Blog() {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* HERO */}
        <section className="px-6 md:px-10 py-20 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 gold-shimmer">
            Blog & Insights
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Thoughts on engineering, system design, and building real-world
            products — especially in sports tech.
          </p>
        </section>
  
        {/* FEATURED POST */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto mb-16">
          <div className="group relative rounded-2xl border border-white/10 bg-gray-900/70 p-8 overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(34,211,238,0.08)]">
            
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/10 to-transparent transition" />
  
            <span className="text-xs text-cyan-400">Featured</span>
  
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              {posts[0].title}
            </h2>
  
            <p className="mt-3 text-gray-400 max-w-2xl">
              {posts[0].excerpt}
            </p>
  
            <div className="mt-4 text-xs text-gray-500 flex gap-4">
              <span>{posts[0].date}</span>
              <span>{posts[0].readTime}</span>
            </div>
          </div>
        </section>
  
        {/* BLOG GRID */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, i) => (
              <div
                key={i}
                className="
                  group relative rounded-2xl border border-white/10
                  bg-gray-900/70 p-6 overflow-hidden
                  transition duration-300
                  hover:-translate-y-1 hover:border-cyan-500/30
                  hover:shadow-[0_20px_40px_rgba(34,211,238,0.08)]
                "
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/10 to-transparent transition" />
  
                {/* Tag */}
                <span className="text-xs text-cyan-400">
                  {post.tag}
                </span>
  
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                  {post.title}
                </h3>
  
                <p className="mt-2 text-sm text-gray-400">
                  {post.excerpt}
                </p>
  
                <div className="mt-4 text-xs text-gray-500 flex gap-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA */}
        <section className="px-6 md:px-10 py-16 border-t border-white/10 text-center">
          <h3 className="text-2xl font-semibold">
            More insights coming soon
          </h3>
          <p className="mt-2 text-gray-400">
            Follow along as I document building real systems and products.
          </p>
        </section>
      </div>
    );
  }