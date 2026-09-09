import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Laptop, Database } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "About | Abdullah: Full-Stack Developer",
  description:
    "Background, practical philosophy, and technical experience of Abdullah, a full-stack developer building web apps and business software.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Intro Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              About Abdullah
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Building practical web applications and software that solve real
              business bottlenecks.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              I am a full-stack developer specializing in Next.js, React,
              PostgreSQL, and Supabase. I focus on crafting reliable software
              for local businesses, retail stores, and growing teams who need
              customized internal tools, point of sale software, or fast
              customer-facing web applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Background & Approach */}
      <Section
        badge="Approach and Values"
        title="Software Built for Everyday Reliability"
        subtitle="How I approach building web applications and business tooling from the ground up."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Rock-Solid Data Accuracy
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Business software fails when financial balances or stock counts
              drift out of sync. I enforce transaction rules, balances, and
              inventory movements directly at the database level so numbers
              always match reality.
            </p>
          </Card>

          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Intuitive and Fast Screens
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether it is a cashier processing twenty counter orders an hour
              or a business owner reviewing receivables on a smartphone, screens
              must be clear, responsive, and straightforward to navigate.
            </p>
          </Card>

          <Card>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Zero Unnecessary Expenses
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I avoid heavy, overcomplicated frameworks or costly subscription
              dependencies when clean code can achieve the same goal faster and
              for free, such as client-side PDF receipt generation without cloud
              file storage costs.
            </p>
          </Card>
        </div>
      </Section>

      {/* Experience & Practical Journey */}
      <Section
        badge="Experience"
        title="Experience and Delivered Projects"
        subtitle="Practical development experience building production systems and collaborating on software projects."
        className="border-t border-[#1e2433]/70 bg-[#08090d]"
      >
        <div className="max-w-3xl space-y-8">
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  Full-Stack Developer and Software Contractor
                </h3>
                <div className="text-sm text-emerald-400 font-mono">
                  Independent / Local Business Client Work
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-[#141924] border border-[#1e2433] text-slate-300 self-start sm:self-auto">
                2024 to Present
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Architecting and delivering customized business management
              software, point-of-sale registers, and responsive web applications
              for retail and commercial wholesale operations.
            </p>

            <ul className="space-y-2 text-sm text-slate-400 pt-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-0.5">
                  &bull;
                </span>
                <span>
                  Delivered <strong>Perfect Traders POS</strong>: Next.js and
                  Supabase platform with automated receivables, payables, stock
                  management, and client-side PDF receipts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-0.5">
                  &bull;
                </span>
                <span>
                  Configured transactional database triggers in PostgreSQL to
                  guarantee atomic inventory movements and balance
                  recalculations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-0.5">
                  &bull;
                </span>
                <span>
                  Built fast, mobile-friendly user interfaces optimized for
                  rapid page loads and straightforward checkout flows.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#1e2433] flex flex-wrap gap-1.5">
              {[
                "Next.js",
                "React",
                "PostgreSQL",
                "Supabase",
                "Tailwind CSS",
                "TypeScript",
                "Node.js",
              ].map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#10141f] border border-[#1e2433] text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          {/* Brief mention of FlyRank internship */}
          <div className="p-5 rounded-xl border border-[#1e2433] bg-[#0c0f17] text-xs font-mono text-slate-400 space-y-1">
            <div className="text-slate-300 font-semibold">
              Additional Experience
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Participated in the FlyRank remote software engineering internship
              program, gaining hands-on exposure to collaborative Git workflows,
              modern web toolchains, and agile development cycles.
            </p>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-[#1e2433] bg-[#0a0d14]">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">
                Have an idea or custom software project for your business?
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore the POS Shop case study or reach out directly to discuss
                your goals.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/work/pos-shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
              >
                View POS Shop Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1e2433] bg-[#0e121b] text-slate-200 text-sm hover:text-white transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
