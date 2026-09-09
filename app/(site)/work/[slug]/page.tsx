import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Terminal,
  ArrowUpRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import Container from "@/components/Container";
import { getCaseStudyBySlug, getCaseStudies, urlFor } from "@/sanity/client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug.current,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) {
    return { title: "Case Study Not Found" };
  }
  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const coverUrl = study.coverImage
    ? urlFor(study.coverImage)?.width(1400).url()
    : null;

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Back navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>

          {/* Quick links to live demo and code */}
          <div className="flex items-center gap-3">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1e2433] bg-[#0c0e14] text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Case Study Header */}
        <div className="max-w-4xl space-y-6 pb-8 border-b border-[#1e2433]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Case Study: 0{study.order || 1}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {study.title}
          </h1>

          {/* LAYER 1: Plain-language summary at the very top (2-3 sentences max, ZERO technical jargon) */}
          <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-slate-200 text-base sm:text-lg leading-relaxed">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
              Project Overview in Plain Language
            </div>
            <p>{study.plainSummary || study.summary}</p>
          </div>
        </div>

        {/* LAYER 2: Short video clip (silent, autoplay, loop, no player controls, placed directly under summary) */}
        {/* LAYER 2: Product video clip showing the real product in action */}
        <div className="my-10 max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden border border-[#1e2433] bg-[#0b0d13] shadow-2xl">
            <video
              src={study.videoUrl || "/pos-real-demo.mp4"}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto object-cover"
            />
            <div className="px-4 py-2.5 bg-[#08090d] border-t border-[#1e2433] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Product Demo: ringing up items, selecting customer, and
                completing sale
                Live Application Walkthrough: recording supplier purchases, ringing up sales, and printing invoices
              </span>
              <span className="text-slate-500 hidden sm:inline">
                12-second silent preview
                Real production recording
              </span>
            </div>
          </div>
        </div>

        {/* Optional static cover image if present */}
        {coverUrl && (
          <div className="my-8 max-w-4xl rounded-xl overflow-hidden border border-[#1e2433] bg-[#0d1017]">
            <Image
              src={coverUrl}
              alt={study.coverImage?.alt || study.title}
              width={1400}
              height={700}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* LAYER 3: Problem -> Approach -> Result (Plain language first, technical details secondary) */}
        <div className="max-w-3xl py-8 space-y-16">
          {/* SECTION 1: The Problem */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                01. The Problem
              </h2>
            </div>
            <div className="pl-0 sm:pl-9 space-y-4">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed whitespace-pre-line font-normal">
                {study.problem}
              </p>

              {study.problemTechnical && (
                <div className="p-4 rounded-lg border border-[#1e2433] bg-[#0b0e14] text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    Technical Context
                  </div>
                  <p className="leading-relaxed text-slate-400">
                    {study.problemTechnical}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 2: The Approach */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Lightbulb className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                02. The Approach and System Design
              </h2>
            </div>
            <div className="pl-0 sm:pl-9 space-y-4">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed whitespace-pre-line font-normal">
                {study.approach}
              </p>

              {study.approachTechnical && (
                <div className="p-4 rounded-lg border border-[#1e2433] bg-[#0b0e14] text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    Technical Implementation
                  </div>
                  <p className="leading-relaxed text-slate-400">
                    {study.approachTechnical}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 3: The Result */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                03. The Result and Business Impact
              </h2>
            </div>
            <div className="pl-0 sm:pl-9 space-y-4">
              <div className="p-6 rounded-xl border border-emerald-500/20 bg-[#0d141e]/50">
                <p className="text-base sm:text-lg text-emerald-300/90 leading-relaxed whitespace-pre-line font-normal">
                  {study.result}
                </p>
              </div>

              {study.resultTechnical && (
                <div className="p-4 rounded-lg border border-[#1e2433] bg-[#0b0e14] text-xs font-mono text-slate-400 space-y-1">
                  <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    Technical Outcome
                  </div>
                  <p className="leading-relaxed text-slate-400">
                    {study.resultTechnical}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* LAYER 4: Tech Stack Listed Briefly as Tags at the End (not in prose) */}
          <section className="pt-10 border-t border-[#1e2433] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg border border-[#1e2433] bg-[#0e121a] text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 mt-12 border-t border-[#1e2433] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Discuss your business software needs</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
