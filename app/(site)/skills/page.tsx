import React from "react";
import Link from "next/link";
import {
  Layers,
  Database,
  Terminal,
  GitBranch,
  ArrowRight,
  Code2,
  Server,
  Zap,
} from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Skills & Technical Stack | Abdullah — Full-Stack Developer",
  description:
    "Core full-stack development skills: Next.js, React, PostgreSQL, Node.js, Express, Supabase, Tailwind CSS, and Git/GitHub.",
};

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Layers,
    description:
      "Building responsive, mobile-first user interfaces with modern React primitives.",
    skills: [
      {
        name: "Next.js",
        level: "Primary Framework",
        context:
          "App Router, Server Components, SSR, fast page loading and API routes",
      },
      {
        name: "React",
        level: "Core Library",
        context:
          "Component architecture, hooks, state management, client performance",
      },
      {
        name: "Tailwind CSS",
        level: "Design & Styling",
        context:
          "Utility-first design, clean dark palettes, mobile-first responsive layouts",
      },
      {
        name: "TypeScript",
        level: "Language",
        context:
          "Type-safe interfaces, API payload validation, zero runtime type errors",
      },
    ],
  },
  {
    name: "Backend & Databases",
    icon: Database,
    description:
      "Designing reliable relational schemas, transactional procedures, and REST APIs.",
    skills: [
      {
        name: "PostgreSQL",
        level: "Primary Relational DB",
        context:
          "Complex queries, stored procedures, triggers for atomic inventory and accounting",
      },
      {
        name: "Supabase",
        level: "Backend-as-a-Service",
        context:
          "Database hosting, PostgreSQL triggers, GoTrue authentication, realtime listeners",
      },
      {
        name: "Node.js",
        level: "Runtime",
        context: "Server-side logic, API endpoints, npm ecosystem",
      },
      {
        name: "Express",
        level: "Backend Framework",
        context:
          "RESTful API services, routing, and custom authentication middleware",
      },
    ],
  },
  {
    name: "Developer Tooling & Workflow",
    icon: Terminal,
    description:
      "Tools and practices ensuring clean codebases, continuous deployment, and easy content management.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Version Control",
        context:
          "Branch management, pull requests, semantic commit history, and CI workflows",
      },
      {
        name: "Sanity CMS",
        level: "Headless Content",
        context:
          "Structured content schemas, embedded Sanity Studio for client-managed blogs and case studies",
      },
      {
        name: "Vercel",
        level: "Deployment & Edge",
        context:
          "Production continuous deployment, edge network caching, custom domains",
      },
      {
        name: "jsPDF",
        level: "Client Synthesis",
        context:
          "On-the-fly PDF invoice and receipt generation without consuming cloud storage quotas",
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Technical Stack
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Skills &amp; Technology Matrix
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              A clear, practical overview of the technologies I use daily to
              build full-stack web applications and custom business software.
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
                      {category.skills.length} core competencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <Card
                        key={sIdx}
                        className="p-5 flex flex-col justify-between hover:border-emerald-500/40"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-mono font-semibold text-slate-100 text-sm">
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
                Want to see this stack in action?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Read how Next.js, PostgreSQL triggers, and Supabase power the
                POS Shop platform.
              </p>
            </div>
            <Link
              href="/work/pos-shop"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shrink-0"
            >
              View POS Shop Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
