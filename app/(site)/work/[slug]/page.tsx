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
            <span>cd .. /work</span>
          </Link>

          {/* Quick links to live demo & repo */}
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

        {/* Case Study Headline Header */}
        <div className="max-w-4xl space-y-6 pb-12 border-b border-[#1e2433]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Case Study // 0{study.order || 1}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            {study.summary}
          </p>
        </div>

        {/* Optional Cover Image */}
        {coverUrl && (
          <div className="my-10 rounded-2xl overflow-hidden border border-[#1e2433] bg-[#0d1017]">
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

        {/* Core Case Study Content Sections: Problem -> Approach -> Result */}
        <div className="max-w-3xl py-12 space-y-16">
          {/* SECTION 1: Problem */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                01. The Problem
              </h2>
            </div>
            <div className="pl-0 sm:pl-9">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed whitespace-pre-line font-normal">
                {study.problem}
              </p>
            </div>
          </section>

          {/* SECTION 2: Approach */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Lightbulb className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                02. The Approach &amp; Architecture
              </h2>
            </div>
            <div className="pl-0 sm:pl-9">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed whitespace-pre-line font-normal">
                {study.approach}
              </p>
            </div>
          </section>

          {/* SECTION 3: Result */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                03. The Result &amp; Business Impact
              </h2>
            </div>
            <div className="pl-0 sm:pl-9">
              <div className="p-6 rounded-xl border border-emerald-500/20 bg-[#0d141e]/50">
                <p className="text-base sm:text-lg text-emerald-300/90 leading-relaxed whitespace-pre-line font-normal">
                  {study.result}
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: Tech Stack Listed Briefly at the End (not the headline) */}
          <section className="pt-10 border-t border-[#1e2433] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Technology Stack Used
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
            <span>Have a similar project? Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
