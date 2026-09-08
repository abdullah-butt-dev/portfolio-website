import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Terminal, Cpu, Database, ShieldCheck, Zap } from "lucide-react";
import TerminalHero from "@/components/TerminalHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { getCaseStudies, getPosts } from "@/sanity/client";

export const revalidate = 60;

export default async function HomePage() {
  const caseStudies = await getCaseStudies();
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#1e2433]">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e243315_1px,transparent_1px),linear-gradient(to_bottom,#1e243315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Systems &bull; Backend &bull; Full-Stack
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1] font-sans">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">resilient systems</span> that scale without friction.
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl font-normal">
                I design high-throughput distributed pipelines, zero-trust infrastructure, and clean, high-performance web applications with zero unnecessary complexity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]"
                >
                  Explore Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-300 font-medium text-sm hover:text-white hover:border-slate-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Quick credibility indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1e2433]/70 font-mono text-xs">
                <div>
                  <div className="text-slate-200 font-bold text-base sm:text-lg">85k+</div>
                  <div className="text-slate-500">req/s Throughput</div>
                </div>
                <div>
                  <div className="text-slate-200 font-bold text-base sm:text-lg">&lt; 5ms</div>
                  <div className="text-slate-500">p99 Latency</div>
                </div>
                <div>
                  <div className="text-slate-200 font-bold text-base sm:text-lg">99.99%</div>
                  <div className="text-slate-500">SLA Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Terminal Motif (Strictly no profile photo) */}
            <div className="lg:col-span-5 w-full">
              <TerminalHero />
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Strip / Core Competencies */}
      <section className="py-10 border-b border-[#1e2433]/80 bg-[#0a0c12]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Core Competencies
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {[
                { name: "Distributed Systems", icon: Cpu },
                { name: "High-Throughput Pipelines", icon: Zap },
                { name: "Zero-Trust Security", icon: ShieldCheck },
                { name: "Database Engineering", icon: Database },
                { name: "Next.js & TypeScript", icon: Terminal },
              ].map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1e2433] bg-[#0e121a] text-xs font-mono text-slate-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Case Studies Section */}
      <Section
        id="case-studies"
        badge="Selected Case Studies"
        title="Production Architecture & Engineering"
        subtitle="Detailed analyses of real systems problems, engineering trade-offs, and measurable business outcomes."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCaseStudies.map((cs) => (
            <Link
              key={cs._id}
              href={`/work/${cs.slug.current}`}
              className="group block h-full"
            >
              <Card className="h-full flex flex-col justify-between group-hover:border-emerald-500/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="text-emerald-400 font-semibold">
                      0{cs.order || 1} // CASE STUDY
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1e2433] space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141824] border border-[#1e2433] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {cs.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                        +{cs.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>View all case studies &amp; architectural deep-dives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Engineering Blog Preview */}
      <Section
        id="blog-preview"
        badge="Engineering Writing"
        title="Technical Thoughts & Notes"
        subtitle="In-depth writings on systems internals, concurrency, workload identity, and distributed design patterns."
        className="border-t border-[#1e2433]/70 bg-[#08090d]/60"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group block"
            >
              <Card className="h-full flex flex-col justify-between group-hover:border-emerald-500/40">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>&bull;</span>
                    <span className="text-emerald-400/80">{post.readingTime || "5 min read"}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-4 flex items-center text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
                  <span>Read full breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>Browse all articles in the engineering archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-28 border-t border-[#1e2433] bg-[#07080b]">
        <Container>
          <div className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-[#0e1420] to-[#0a0d14] p-8 sm:p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Let&apos;s Build Together
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Have a critical system or project to architect?
              </h2>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                Whether you need advice on scaling microservices, tackling performance bottlenecks, or building a modern web product, feel free to reach out.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  Send a Message
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1e2433] bg-[#0c0f17] text-slate-300 font-medium text-sm hover:text-white transition-colors"
                >
                  Read About My Background
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

