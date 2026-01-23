export const metadata = {
    title: "Promise Johnson | Senior Backend Engineer",
    description: "Backend-focused full-stack engineer specializing in Node.js, Go, MongoDB, Redis, Microservices and System Design.",
    keywords: "Backend Engineer, Node.js, MongoDB, Go, Redis, Microservices, React, Portfolio",
    openGraph: {
      title: "Promise Johnson Portfolio",
      description: "Building scalable systems & educating developers",
      url: "https://promisejohnson.dev",
      siteName: "Promise Johnson",
      images: ["/og.png"],
      type: "website",
    },
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-gray-950 text-white">{children}</body>
      </html>
    );
  }
  