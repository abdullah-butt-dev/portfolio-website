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
      icon: Store,
      title: "Point of Sale and Inventory Registers",
      description:
        "Run your counter checkout without delays. Ring up orders quickly, track product stock counts automatically, and monitor customer credit balances with zero arithmetic mistakes.",
      outcomes: [
        "Faster counter checkout for retail and wholesale",
        "Stock counts that adjust automatically on every sale",
        "Customer credit and supplier balances tracked in one place",
      ],
    },
    {
      icon: Globe,
      title: "Custom Web Applications and Client Portals",
      description:
        "Give your staff and clients a fast, modern online portal. Clean screens designed for computers and phones that make it easy to place orders, view invoices, or update records.",
      outcomes: [
        "Works smoothly on desktop computers, tablets, and phones",
        "Simple interfaces that new employees can learn in minutes",
        "Secure account logins for staff and wholesale customers",
      ],
    },
    {
      icon: Database,
      title: "Automated Billing and Record Keeping",
      description:
        "Eliminate lost receipts and repetitive paperwork. Store your transaction history in a secure digital system and generate print-ready customer invoices on demand.",
      outcomes: [
        "Instant PDF customer receipts printed right from the browser",
        "Zero expensive monthly cloud storage bills for invoice files",
        "Clear financial records showing revenue and cash collections",
      ],
    },
  ];

  const coreSkills = [
    {
      name: "Next.js",
      role: "Application Framework",
      benefit: "Fast-loading website pages and reliable online performance.",
    },
    {
      name: "React",
      role: "User Interface Design",
      benefit:
        "Interactive, clean screens that update instantly without reloading.",
    },
    {
      name: "PostgreSQL",
      role: "Secure Database",
      benefit:
        "Guarantees your inventory numbers and financial ledgers never drift.",
    },
    {
      name: "Supabase",
      role: "Data and Account Hosting",
      benefit: "Secure staff authentication and automated database management.",
    },
    {
      name: "Tailwind CSS",
      role: "Mobile-First Styling",
      benefit: "Polished, clean layouts that look sharp on any screen size.",
    },
    {
      name: "Node.js and Express",
      role: "Server Logic",
      benefit:
        "Connects your website screens to payment tools and business databases.",
    },
    {
      name: "Git and GitHub",
      role: "Code Management",
      benefit:
        "Version tracking and safe updates with zero downtime for your store.",
    },
    {
      name: "Client PDF Tools",
      role: "Document Generation",
      benefit:
        "Creates printable receipts in the cashier browser without extra fees.",
    },
  ];

  return (
    <div className="space-y-4">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#1e2433]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e243315_1px,transparent_1px),linear-gradient(to_bottom,#1e243315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline and Plain-Language Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Abdullah: Full-Stack Developer
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.12] font-sans">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  custom software and web applications
                </span>{" "}
                for local businesses.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
                I help store owners and growing companies replace messy
                paperwork and confusing spreadsheets with simple, dependable
                software designed specifically for how they work.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/work/pos-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
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

              {/* Value proposition points */}
              <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Tested in Daily Production
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Accurate Financial Numbers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Straightforward to Learn
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

      {/* 2. SERVICES SECTION: Outcomes first */}
      <Section
        id="services"
        badge="Services"
        title="What I Build for Businesses"
        subtitle="Practical software solutions created to save hours of manual toil, eliminate calculation errors, and give you complete control over your daily operations."
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
                    How it helps your business
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.outcomes.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
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

      {/* 3. FEATURED PROJECT: POS Shop Only */}
      {featuredProject && (
        <Section
          id="featured-work"
          badge="Featured Project: Case Study"
          title="Perfect Traders: Point of Sale System"
          subtitle="A custom web application built for a wholesale and retail store to replace physical paper ledgers with automated inventory and balances."
          className="border-t border-[#1e2433]/70 bg-[#08090d]"
        >
          <div className="rounded-2xl border border-[#1e2433] bg-[#0c0f17] p-6 sm:p-10 lg:p-12 hover:border-emerald-500/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main project overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    In Daily Production Use
                  </span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-slate-400">
                    Retail and Wholesale Counter System
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
                  {featuredProject.title}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed">
                  {featuredProject.plainSummary}
                </p>

                {/* Key real problems and solutions */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    What this software solves:
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>
                        <strong>
                          Tracks customer credit and supplier bills
                          automatically:
                        </strong>{" "}
                        Records whether a sale was paid with cash, taken on
                        credit, or partially paid, keeping exact records without
                        ledger math.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>
                        <strong>Stock numbers update with every sale:</strong>{" "}
                        The database updates inventory counts immediately as
                        items are rung up, preventing overselling.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>
                        <strong>Instant printable receipts:</strong> Customer
                        receipts generate right inside the browser, saving the
                        shop from paying monthly cloud file-storage fees.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="pt-4 border-t border-[#1e2433] space-y-2">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Core Technologies Used:
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
                      <span>View Live Demo</span>
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
                      <span>GitHub Code</span>
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
                    Store Operations Summary
                  </span>
                  <span>POS Shop</span>
                </div>

                <div className="space-y-3 text-slate-300">
                  <div className="p-3 rounded bg-[#101420] border border-[#1e2433]">
                    <div className="text-emerald-400 font-semibold mb-1">
                      Store Dashboard
                    </div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Shows daily revenue, estimated profit, cash in the drawer,
                      and total customer credit owed at a glance.
                    </div>
                  </div>
                  <div className="p-3 rounded bg-[#101420] border border-[#1e2433]">
                    <div className="text-emerald-400 font-semibold mb-1">
                      Cashier Register
                    </div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Instant item lookup, live stock counters, split cash and
                      credit payments, and instant printed receipts.
                    </div>
                  </div>
                  <div className="p-3 rounded bg-[#101420] border border-[#1e2433]">
                    <div className="text-emerald-400 font-semibold mb-1">
                      Customer and Supplier Ledgers
                    </div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Tracks who owes money to the shop and what bills the shop
                      owes to suppliers, preventing overpayment.
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500">
                  Built to solve everyday retail and wholesale counter friction.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>View all projects and case studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Section>
      )}

      {/* 4. SKILLS SECTION: Plain language summary line first */}
      <Section
        id="skills"
        badge="Skills and Tools"
        title="Technologies and Capabilities"
        subtitle="I build complete web applications: from the clean design your customers see on screen, to the secure data systems running behind the scenes."
        className="border-t border-[#1e2433]/70 bg-[#0a0c12]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreSkills.map((skill, idx) => (
            <Card
              key={idx}
              className="p-5 hover:border-emerald-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-emerald-400 mb-1">
                  {skill.role}
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-1">
                  {skill.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.benefit}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>View full skills breakdown and business capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* 5. CONTACT CTA BANNER */}
      <section className="py-20 border-t border-[#1e2433] bg-[#07080b]">
        <Container>
          <div className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-[#0e1420] to-[#0a0d14] p-8 sm:p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Let us discuss your project
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Have a manual process or custom tool you need built?
              </h2>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                Whether you need a custom store register, inventory tracker,
                customer portal, or website, feel free to reach out. I can help
                you map out the requirements and build a dependable solution.
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
