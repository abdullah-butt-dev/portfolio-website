import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, ExternalLink } from "lucide-react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getCaseStudies } from "@/sanity/client";

export const metadata = {
  title: "Work and Case Studies | Abdullah: Full-Stack Developer",
  description:
    "Real-world full-stack web applications, point of sale software, and business management systems built with Next.js, React, PostgreSQL, and Supabase.",
};

export const revalidate = 60;

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div>
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Delivered Work and Case Studies
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Selected Projects and Software Builds
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              A detailed review of practical web applications and custom
              software built to solve actual business problems. Each case study
              outlines what the business needed, the approach taken, and the
              operational results.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies List */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs._id}
                className="h-full flex flex-col justify-between"
              >
                <Card className="h-full flex flex-col justify-between hover:border-emerald-500/50 p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span className="text-emerald-400 font-semibold">
                        0{cs.order || idx + 1}: CASE STUDY
                      </span>
                      {cs.liveUrl && (
                        <a
                          href={cs.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                          title="View Live Demo"
                        >
                          <span className="text-[11px]">Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-100 leading-snug">
                      <Link
                        href={`/work/${cs.slug.current}`}
                        className="hover:text-emerald-300 transition-colors"
                      >
                        {cs.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {cs.plainSummary || cs.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#1e2433] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#141824] border border-[#1e2433] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href={`/work/${cs.slug.current}`}
                        className="inline-flex items-center text-xs font-mono text-emerald-400 hover:text-emerald-300 group"
                      >
                        <span>Read full case study</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {cs.liveUrl && (
                        <a
                          href={cs.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
                        >
                          <span>Open App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center py-20 border border-dashed border-[#1e2433] rounded-2xl">
              <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">No case studies found in Sanity.</p>
            </div>
          )}
        </Container>
      </div>

      {/* Bottom Info Note */}
      <section className="py-14 border-t border-[#1e2433] bg-[#07080b]">
        <Container>
          <div className="p-6 rounded-xl border border-[#1e2433] bg-[#0b0d13] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                Case studies and articles can be edited via Sanity Studio at{" "}
                <Link
                  href="/studio"
                  className="text-emerald-400 underline underline-offset-2"
                >
                  /studio
                </Link>
                .
              </span>
            </div>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Discuss a custom project for your store or company &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
