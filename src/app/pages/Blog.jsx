const posts = [
    {
      title: "How I Designed a Payment Ledger",
      slug: "payment-ledger-design",
      date: "2025-12-20"
    },
    {
      title: "Docker for Backend Engineers",
      slug: "docker-backend",
      date: "2025-11-10"
    }
  ];
  
  export default function Blog() {
    return (
      <div className="max-w-4xl mx-auto py-24 px-10">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        {posts.map(post => (
          <div key={post.slug} className="mb-6">
            <h2 className="text-xl text-cyan-400">{post.title}</h2>
            <p className="text-gray-400">{post.date}</p>
          </div>
        ))}
      </div>
    );
  }
  