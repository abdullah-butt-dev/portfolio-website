import React from "react";
import Link from "next/link";
import {
  Terminal,
  Cpu,
  Database,
  Cloud,
  Layers,
  ShieldCheck,
  Zap,
  GitBranch,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Skills & Technical Stack | Abdullah",
  description:
    "Comprehensive overview of technical capabilities grouped by architecture, backend, frontend, infrastructure, and observability.",
};

const skillCategories = [
  {
    name: "Distributed Systems & Backend",
    icon: ServerIcon,
    description:
      "Core technologies used to architect resilient, high-concurrency services, event brokers, and data pipelines.",
    skills: [
      { name: "Rust", level: "Production", context: "Async runtimes (Tokio), low-latency processing, network protocols" },
      { name: "Go (Golang)", level: "Production", context: "Microservices, gRPC services, concurrent CLI utilities" },
      { name: "Node.js / Bun", level: "Production", context: "TypeScript backends, fast runtime tooling, event loops" },
      { name: "Apache Kafka", level: "Advanced", context: "Partition topologies, stream processing, consumer rebalancing" },
      { name: "gRPC & Protocol Buffers", level: "Advanced", context: "Strict binary contracts, bidirectional streaming" },
      { name: "REST & WebSockets", level: "Advanced", context: "Real-time bi-directional transport, OpenAPI schemas" },
    ],
  },
  {
    name: "Databases & Storage Engines",
    icon: Database,
    description:
      "Storage selection, schema evolution, query optimization, and caching strategies.",
    skills: [
      { name: "PostgreSQL", level: "Production", context: "Complex indexing, connection pooling (PgBouncer), partitioning" },
      { name: "Redis & KeyDB", level: "Production", context: "Distributed locks (Redlock), Pub/Sub, sorted sets, caching" },
      { name: "ClickHouse", level: "Advanced", context: "Columnar time-series analytics, vectorized query execution" },
      { name: "RocksDB", level: "Advanced", context: "Embedded key-value storage for stateful stream workers" },
      { name: "Sanity CMS", level: "Production", context: "Structured content modeling, GROQ queries, headless publishing" },
    ],
  },
  {
    name: "DevOps, Cloud & Zero-Trust Security",
    icon: Cloud,
    description:
      "Containerization, orchestration, continuous delivery, and cryptographic workload attestation.",
    skills: [
      { name: "Kubernetes & Helm", level: "Production", context: "Custom CRDs, admission webhooks, horizontal pod autoscalers" },
      { name: "Docker & containerd", level: "Production", context: "Multi-stage scratch builds, cgroup security isolation" },
      { name: "HashiCorp Vault", level: "Advanced", context: "Dynamic credentials, automated PKI certificate rotation" },
      { name: "SPIFFE / SPIRE", level: "Advanced", context: "Workload attestation, mTLS mesh identities without static tokens" },
      { name: "Terraform & OpenTofu", level: "Production", context: "Declarative infrastructure-as-code across AWS & Cloudflare" },
      { name: "CI/CD (GitHub Actions)", level: "Production", context: "Hermetic build pipelines, linting gates, automated smoke tests" },
    ],
  },
  {
    name: "Frontend & Full-Stack Architecture",
    icon: Layers,
    description:
      "High-contrast, accessible, performant user interfaces built with modern edge web primitives.",
    skills: [
      { name: "Next.js (App Router)", level: "Production", context: "React Server Components, streaming SSR, route handlers" },
      { name: "TypeScript", level: "Production", context: "Strict typing, generic abstractions, type-safe API clients" },
      { name: "React 19", level: "Production", context: "Server actions, concurrent rendering, hooks architecture" },
      { name: "Tailwind CSS", level: "Production", context: "Utility-first CSS, custom design systems, responsive dark themes" },
      { name: "Performance & Web Vitals", level: "Advanced", context: "Sub-50ms TTFB, zero CLS, minimal bundle sizes" },
    ],
  },
  {
    name: "Observability & SRE",
    icon: Zap,
    description:
      "Keeping systems healthy, debuggable, and measurable under high operational stress.",
    skills: [
      { name: "Prometheus & Grafana", level: "Production", context: "Custom metric exporters, alerting rules, SLO dashboards" },
      { name: "OpenTelemetry", level: "Advanced", context: "Distributed trace propagation across RPC boundaries" },
      { name: "Structured Logging", level: "Production", context: "Zero-allocation JSON loggers with trace correlation IDs" },
    ],
  },
];

function ServerIcon(props: any) {
  return <Cpu {...props} />;
}

export default function SkillsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Technical Competencies
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Skills Matrix &amp; Technology Stack
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              A detailed breakdown of technical domains, toolchains, and protocols I work with in production. Every item reflects hands-on production deployment experience rather than superficial tutorial knowledge.
            </p>
          </div>
        </Container>
      </section>

      {/* Categorized Skills Section */}
      <div className="py-16 md:py-24 space-y-16">
        <Container>
          <div className="space-y-16">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1e2433] gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
                          {category.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 self-start sm:self-auto">
                      {category.skills.length} core tools
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <Card
                        key={sIdx}
                        className="p-5 flex flex-col justify-between hover:border-emerald-500/40"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-mono font-semibold text-slate-200 text-sm">
                              {skill.name}
                            </h3>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#161c28] border border-[#1e2535] text-emerald-400">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {skill.context}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-[#1e2433] bg-[#07080b]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-slate-100">
                Want to see these skills applied to real problems?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Read how these technologies are composed to build scalable architectures.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shrink-0"
            >
              Explore Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

