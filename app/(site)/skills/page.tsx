import React from "react";
import Link from "next/link";
import { Layers, Database, Terminal, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Card from "@/components/Card";

export const metadata = {
  title: "Skills and Technical Capabilities | Abdullah: Full-Stack Developer",
  description:
    "Core full-stack development skills: Next.js, React, PostgreSQL, Node.js, Express, Supabase, Tailwind CSS, and Git/GitHub.",
};

const skillCategories = [
  {
    name: "User Interface and Frontend",
    icon: Layers,
    description:
      "Creating responsive, fast-loading screens that customers and employees find effortless to use.",
    skills: [
      {
        name: "Next.js",
        level: "Primary Application Framework",
        context:
          "Builds fast websites and web portals that load in seconds on both phones and computers.",
      },
      {
        name: "React",
        level: "Interactive Screen Library",
        context:
          "Powers live registers, shopping carts, and dynamic screens that update without page refreshes.",
      },
      {
        name: "Tailwind CSS",
        level: "Design and Mobile Layouts",
        context:
          "Ensures every page fits cleanly on smartphones, tablets, and wide counter monitors.",
      },
      {
        name: "TypeScript",
        level: "Reliable Code Logic",
        context:
          "Catches mistakes before software is published, preventing unexpected crashes during business hours.",
      },
    ],
  },
  {
    name: "Data and Business Systems",
    icon: Database,
    description:
      "Setting up secure electronic record systems, automated billing, and reliable data storage.",
    skills: [
      {
        name: "PostgreSQL",
        level: "Core Relational Database",
        context:
          "The digital filing cabinet for your sales, customer credit, and inventory. Keeps numbers accurate automatically.",
      },
      {
        name: "Supabase",
        level: "Database and User Accounts",
        context:
          "Handles staff logins, data backup, and connects your database to your web browser securely.",
      },
      {
        name: "Node.js and Express",
        level: "Backend Logic and APIs",
        context:
          "Runs calculations and connects your front-end register to inventory systems and payment gateways.",
      },
      {
        name: "Client-Side PDF Generation (jsPDF)",
        level: "Document Synthesis",
        context:
          "Prints receipts and invoices directly in the cashier browser, eliminating recurring cloud storage fees.",
      },
    ],
  },
  {
    name: "Workflow and Maintenance",
    icon: Terminal,
    description:
      "Tools and practices ensuring safe updates, version history, and client-controlled content.",
    skills: [
      {
        name: "Git and GitHub",
        level: "Version Tracking and Security",
        context:
          "Maintains a full backup of all code changes and enables safe testing before updating live store systems.",
      },
      {
        name: "Sanity CMS",
        level: "Content Management Studio",
        context:
          "Allows business owners to update case studies and announcements without needing to write code.",
      },
      {
        name: "Vercel Edge Hosting",
        level: "Global Deployment",
        context:
          "Serves web applications reliably with high uptime and rapid worldwide page speeds.",
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
              Technical Stack and Capability
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Skills and Capabilities
            </h1>

            {/* Plain-language summary line summarizing capability in business terms */}
            <p className="text-lg text-emerald-300 font-medium leading-relaxed">
              I build complete web applications: from the design you see to the
              systems running behind the scenes.
            </p>

            <p className="text-base text-slate-400 leading-relaxed font-normal">
              Below is the primary toolchain I use daily to deliver custom
              software, point-of-sale systems, and web applications for local
              businesses. Each tool is selected for stability, speed, and low
              maintenance overhead.
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
                Want to see these tools in action?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Read how Next.js, PostgreSQL, and Supabase power the Perfect
                Traders POS system.
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
