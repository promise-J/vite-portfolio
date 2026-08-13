const skills = {
  "Backend Engineering": [
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Go", url: "https://go.dev/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "GraphQL", url: "https://graphql.org/" },
  ],

  "AI Engineering": [
    { name: "LLM APIs", url: "https://platform.openai.com/" },
    { name: "RAG", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" },
    { name: "AI Agents", url: "https://www.langchain.com/" },
    { name: "LangGraph", url: "https://www.langchain.com/langgraph" },
    { name: "MCP", url: "https://modelcontextprotocol.io/" },
    { name: "AI Evals", url: "https://www.langchain.com/langsmith" },
    { name: "AI Observability", url: "https://langfuse.com/" },
    { name: "Embeddings", url: "https://platform.openai.com/docs/guides/embeddings" },
  ],

  "AI Developer Tools": [
    { name: "Claude Code", url: "https://www.anthropic.com/claude-code" },
    { name: "OpenAI Codex", url: "https://openai.com/codex/" },
    { name: "Cursor", url: "https://www.cursor.com/" },
    { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
    { name: "Gemini", url: "https://gemini.google.com/" },
  ],

  Frontend: [
    { name: "React", url: "https://react.dev/" },
    { name: "Next.js", url: "https://nextjs.org/" },
    { name: "TailwindCSS", url: "https://tailwindcss.com/" },
    { name: "Chakra UI", url: "https://chakra-ui.com/" },
  ],

  "Databases & Data": [
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Redis", url: "https://redis.io/" },
    { name: "pgvector", url: "https://github.com/pgvector/pgvector" },
  ],

  "Cloud & DevOps": [
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "Kubernetes", url: "https://kubernetes.io/" },
    { name: "Terraform", url: "https://www.terraform.io/" },
    { name: "AWS EC2", url: "https://aws.amazon.com/ec2/" },
    { name: "AWS ECS", url: "https://aws.amazon.com/ecs/" },
    { name: "AWS Lambda", url: "https://aws.amazon.com/lambda/" },
    { name: "AWS S3", url: "https://aws.amazon.com/s3/" },
    { name: "AWS RDS", url: "https://aws.amazon.com/rds/" },
    { name: "AWS SQS", url: "https://aws.amazon.com/sqs/" },
    { name: "AWS CloudWatch", url: "https://aws.amazon.com/cloudwatch/" },
    { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
  ],

  Architecture: [
    { name: "Microservices", url: "https://microservices.io/" },
    { name: "Event-driven Architecture", url: "https://en.wikipedia.org/wiki/Event-driven_architecture" },
    { name: "Distributed Systems", url: "https://en.wikipedia.org/wiki/Distributed_computing" },
    { name: "System Design", url: "https://en.wikipedia.org/wiki/Systems_design" },
    { name: "API Gateway", url: "https://microservices.io/patterns/apigateway.html" },
    { name: "Message Queues", url: "https://en.wikipedia.org/wiki/Message_queue" },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 gold-shimmer">
          Skills & Expertise
        </h2>

        <p className="mt-2 max-w-3xl text-gray-400">
          Building scalable backend systems, AI-powered applications,
          distributed architectures, and cloud-native infrastructure.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="
              group rounded-2xl
              border border-white/10
              bg-white/5
              p-6
              backdrop-blur
              transition
              hover:border-cyan-500/40
              hover:bg-white/10
              gold-shimmer
            "
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
                      inline-block
                      cursor-pointer
                      rounded-full
                      border border-white/10
                      px-3 py-1
                      text-xs text-gray-300
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