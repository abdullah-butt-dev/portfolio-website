import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getPosts } from "@/sanity/client";

export const metadata = {
  title: "Engineering Blog & Build Logs | Abdullah",
  description:
    "Practical notes and architectural build logs from developing web applications, point of sale software, and database systems.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Build Logs &amp; Technical Notes
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Engineering Notes from Real Builds
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              Firsthand build logs and technical decisions from developing
              production web apps and business software. Grounded in real code
              and practical lessons.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Articles List */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <Card className="p-6 sm:p-8 hover:border-emerald-500/40">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400/80" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </time>
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime || "5 min read"}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="pt-3 flex items-center text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
                      <span>Read build log</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}

            {posts.length === 0 && (
              <div className="text-center py-20 border border-dashed border-[#1e2433] rounded-2xl">
                <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">No blog posts found in Sanity.</p>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
