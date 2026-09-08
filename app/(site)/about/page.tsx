import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Briefcase, Award, Code2, Server } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "About | Abdullah — Systems & Full-Stack Engineer",
  description: "Bio, architectural philosophy, career journey, and engineering background.",
};

const experiences = [
  {
    period: "2024 — Present",
    role: "Staff Infrastructure & Distributed Systems Engineer",
    company: "Distributed Cloud Systems",
    summary:
      "Leading the design and operational scalability of a global event ingestion mesh. Architecting low-latency stream processing pipelines and zero-trust credential distribution across multi-region Kubernetes deployments.",
    highlights: [
      "Scaled event telemetry pipeline from 10k to 85k+ events/sec with sub-5ms p99 latency.",
      "Replaced static production secrets with dynamic SPIFFE/SPIRE cryptographic workload attestation.",
      "Mentored senior engineering staff and authored architectural RFCs for service decoupling.",
    ],
    stack: ["Rust", "Go", "Kafka", "Kubernetes", "ClickHouse", "Terraform"],
  },
  {
    period: "2022 — 2024",
    role: "Senior Full-Stack & Platform Engineer",
    company: "Nexus Technologies",
    summary:
      "Spearheaded core backend API services and developer platform tooling. Built distributed caching middleware and high-performance web applications using Next.js and TypeScript.",
    highlights: [
      "Constructed edge cache invalidation layer cutting global median TTFB by 93%.",
      "Standardized microservice observability via OpenTelemetry, Grafana, and Prometheus.",
      "Delivered real-time collaborative web interfaces supporting concurrent multi-user editing.",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "Redis", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    period: "2020 — 2022",
    role: "Backend Software Engineer",
    company: "Vanguard Software Labs",
    summary:
      "Built resilient REST and gRPC microservices for financial reconciliation and batch ledger processing. Optimized database queries and automated CI/CD pipeline deployments.",
    highlights: [
      "Refactored relational locking mechanics to optimistic concurrency, eliminating deadlocks.",
      "Reduced database query execution costs by 48% through index tuning and partition schemes.",
    ],
    stack: ["Go", "Python", "PostgreSQL", "Redis", "AWS", "Linux"],
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Intro Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Bio &amp; Philosophy
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Systems engineer who values simplicity, predictability, and mechanical sympathy.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              I have spent the past decade building and optimizing software systems. My core engineering philosophy is straightforward: the most resilient system is not the one with the most complex architecture, but the one whose failure modes are predictable, observable, and easy to reason about.
            </p>
          </div>
        </Container>
      </section>

      {/* Engineering Philosophy Cards */}
      <Section
        badge="Operating Principles"
        title="How I Approach Engineering"
        subtitle="Foundational principles that govern every architecture decision and line of code."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Predictable Failure Modes
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every distributed service will eventually fail or degrade. I design systems with clear circuit breakers, graceful degradation pathways, backpressure signals, and explicit boundary timeouts.
            </p>
          </Card>

          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Mechanical Sympathy
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Understanding the underlying hardware, kernel namespaces, memory allocation patterns, and network socket semantics enables high performance without unnecessary abstraction layers.
            </p>
          </Card>

          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Deep Observability
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Software you cannot inspect in production is software you cannot trust. Structured telemetry, distributed traces, and tail latency histograms are first-class engineering requirements.
            </p>
          </Card>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section
        badge="Career Progression"
        title="Work Experience & Impact"
        subtitle="Chronological timeline of engineering roles, technical responsibilities, and system outcomes."
        className="border-t border-[#1e2433]/70 bg-[#08090d]"
      >
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 sm:pl-8 border-l-2 border-[#1e2433] hover:border-emerald-500/60 transition-colors group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[#1e2433] bg-[#08090d] group-hover:border-emerald-400 group-hover:bg-emerald-400/20 transition-all" />

              <Card className="group-hover:border-emerald-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-emerald-400">
                      {exp.company}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded text-xs font-mono bg-[#141924] border border-[#1e2433] text-slate-300 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                <div className="space-y-2 mb-5">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-400">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold mt-0.5">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1e2433] flex flex-wrap gap-1.5">
                  {exp.stack.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#10141f] border border-[#1e2433] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Strip */}
      <section className="py-16 border-t border-[#1e2433] bg-[#0a0d14]">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">
                Interested in working together or discussing an architecture problem?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore the technical case studies or reach out directly.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e2433] bg-[#0e121b] text-slate-200 text-sm hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

