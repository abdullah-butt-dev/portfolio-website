import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Globe,
  Store,
  Database,
  CheckCircle2,
  ExternalLink,
  Code2,
} from "lucide-react";
import TerminalHero from "@/components/TerminalHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { getCaseStudies } from "@/sanity/client";

export const revalidate = 60;

export default async function HomePage() {
  const caseStudies = await getCaseStudies();
  const featuredProject = caseStudies[0];

  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Applications",
      description:
        "Modern, responsive web applications built with Next.js, React, and TypeScript. Optimized for fast load times, mobile usability, and clean code that scales with your business.",
      deliverables: ["Custom Web Apps", "Client Portals", "Responsive UI/UX"],
    },
    {
      icon: Store,
      title: "Custom Business Software & POS",
      description:
        "Tailored internal tools, point of sale (POS) registers, and inventory tracking systems designed to eliminate manual spreadsheet errors and speed up daily sales operations.",
      deliverables: [
        "Point of Sale Systems",
        "Inventory Management",
        "Receivables & Credit Tracking",
      ],
    },
    {
      icon: Database,
      title: "Database Architecture & Backend Systems",
      description:
        "Secure relational databases using PostgreSQL and Supabase. Enforcing atomic data integrity at the database layer with automated PDF invoice generation and reliable APIs.",
      deliverables: [
        "PostgreSQL Schema Design",
        "Supabase Backend Integration",
        "Automated PDF Invoicing",
      ],
    },
  ];

  const coreSkills = [
    {
      name: "Next.js",
      category: "Framework",
      desc: "App Router, SSR, Server Components",
    },
    {
      name: "React",
      category: "Frontend",
      desc: "Component architecture, hooks, state",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      desc: "Triggers, stored procedures, schema design",
    },
    {
      name: "Supabase",
      category: "Backend / BaaS",
      desc: "Auth, database functions, realtime",
    },
    {
      name: "Node.js",
      category: "Runtime",
      desc: "Backend logic, server-side APIs",
    },
    {
      name: "Express",
      category: "Backend",
      desc: "RESTful API services and middleware",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      desc: "Responsive, mobile-first design systems",
    },
    {
      name: "Git / GitHub",
      category: "Tooling",
      desc: "Version control, collaboration, CI/CD",
    },
  ];

  return (
    <div className="space-y-4">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#1e2433]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e243315_1px,transparent_1px),linear-gradient(to_bottom,#1e243315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Abdullah &bull; Full-Stack Developer
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.12] font-sans">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  full-stack web apps
                </span>{" "}
                and custom software for local businesses.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
                I help local businesses and founders replace messy spreadsheets
                and manual processes with fast, reliable web applications and
                custom management tools.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/work/pos-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]"
                >
                  View Featured Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-300 font-medium text-sm hover:text-white hover:border-slate-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Trust value prop points */}
              <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Production Tested
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Clean PostgreSQL Databases
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Fast Turnaround
                </span>
              </div>
            </div>

            {/* Right Terminal Motif */}
            <div className="lg:col-span-5 w-full">
              <TerminalHero />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SERVICES SECTION — What I actually do (Before projects so visitors immediately understand the offer) */}
      <Section
        id="services"
        badge="Services &amp; Offerings"
        title="What I Build for Businesses"
        subtitle="Practical, reliable software solutions engineered to save hours of manual toil, eliminate calculation errors, and give you complete control of your operations."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col justify-between hover:border-emerald-500/40"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1e2433] space-y-2">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Common Deliverables
                  </div>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 3. FEATURED PROJECT / CASE STUDY — POS Shop Only */}
      {featuredProject && (
        <Section
          id="featured-work"
          badge="Featured Project &bull; Case Study"
          title="Perfect Traders — Point of Sale System"
          subtitle="A custom web application built for commercial wholesale and retail counter operations to replace paper ledgers with automated inventory and balances."
          className="border-t border-[#1e2433]/70 bg-[#08090d]"
        >
          <div className="rounded-2xl border border-[#1e2433] bg-[#0c0f17] p-6 sm:p-10 lg:p-12 hover:border-emerald-500/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main project overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Production Deployed
                  </span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-slate-400">
                    Point of Sale &amp; Inventory Management
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
                  {featuredProject.title}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed">
                  {featuredProject.summary}
                </p>

                {/* Key real problems & solutions */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Real System Highlights:
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>
                        <strong>Automated Receivables &amp; Payables:</strong>{" "}
                        Tracks customer credit and supplier disbursement
                        balances with split payments (paid, credit, partial).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>
                        <strong>PostgreSQL Database Triggers:</strong> Inventory
                        updates and line total calculations are enforced
                        atomically in PostgreSQL, preventing ledger drift.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>
                        <strong>Client-Side PDF Receipts:</strong> Invoices
                        generate directly in the cashier&apos;s browser using
                        jsPDF with zero cloud file-storage fees.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="pt-4 border-t border-[#1e2433] space-y-2">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#121622] border border-[#1e2433] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${featuredProject.slug.current}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#1e2433] bg-[#090b10] text-slate-300 text-sm hover:text-white hover:border-slate-600 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#1e2433] bg-[#090b10] text-slate-400 text-sm hover:text-slate-200 transition-colors"
                    >
                      <span>GitHub Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right side quick feature list card */}
              <div className="lg:col-span-5 p-6 rounded-xl border border-[#1e2433] bg-[#090b10]/90 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#1e2433] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" />
                    Feature Breakdown
                  </span>
                  <span>POS Shop</span>
                </div>

                <div className="space-y-3 text-slate-300">
                  <div className="p-2.5 rounded bg-[#101420] border border-[#1e2433]">
                    <div className="text-emerald-400 font-semibold mb-1">
                      /dashboard
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Real-time revenue, profit estimates, cash inflow/outflow,
                      and live receivables.
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-[#101420] border border-[#1e2433]">
                    <div className="text-emerald-400 font-semibold mb-1">
                      /orders (Cashier Register)
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Instant customer search, stock badges, split payments,
                      on-the-fly PDF invoice generation.
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-[#101420] border border-[#1e2433]">
                    <div className="text-emerald-400 font-semibold mb-1">
                      /receivables &amp; /payables
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Customer credit tracking, supplier debt monitoring, and
                      overpayment safeguards.
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500">
                  Built to solve everyday retail and wholesale business
                  friction.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>View all projects &amp; case studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Section>
      )}

      {/* 4. SKILLS SECTION */}
      <Section
        id="skills"
        badge="Technical Competencies"
        title="Core Skills &amp; Stack"
        subtitle="The toolchain I use daily to build full-stack web applications, secure APIs, and responsive frontends."
        className="border-t border-[#1e2433]/70 bg-[#0a0c12]"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {coreSkills.map((skill, idx) => (
            <Card key={idx} className="p-4 sm:p-5 hover:border-emerald-500/40">
              <div className="text-[11px] font-mono text-emerald-400 mb-1">
                {skill.category}
              </div>
              <h4 className="text-base font-bold text-slate-100">
                {skill.name}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {skill.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>View full skills breakdown &amp; proficiency contexts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* 5. CONTACT CTA BANNER (Immediately leads into Footer) */}
      <section className="py-20 border-t border-[#1e2433] bg-[#07080b]">
        <Container>
          <div className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-[#0e1420] to-[#0a0d14] p-8 sm:p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Let&apos;s Build Your Next Application
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Need a custom web app or business management tool?
              </h2>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                I can help you build custom inventory platforms, point-of-sale
                software, customer portals, or modern websites. Reach out
                directly and let&apos;s discuss your requirements.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:contact@abdullahbuttdev.me"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1e2433] bg-[#0c0f17] text-slate-300 font-medium text-sm hover:text-white transition-colors"
                >
                  contact@abdullahbuttdev.me
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
