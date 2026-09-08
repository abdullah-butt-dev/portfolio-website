import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { getCaseStudies } from "@/sanity/client";

export const metadata = {
  title: "Case Studies & Architectural Work | Abdullah",
  description:
    "Technical case studies detailing problem definitions, engineering approaches, measurable results, and technology stacks.",
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
              Engineering Portfolio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Production Case Studies &amp; Architecture
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              A comprehensive collection of real-world distributed systems, performance optimizations, and security platforms. Every case study follows an engineering structure: the initial problem, the architectural approach, and verified production results.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies List */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <Link
                key={cs._id}
                href={`/work/${cs.slug.current}`}
                className="group block h-full"
              >
                <Card className="h-full flex flex-col justify-between group-hover:border-emerald-500/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span className="text-emerald-400 font-semibold">
                        0{cs.order || idx + 1} // CASE STUDY
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h2 className="text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug">
                      {cs.title}
                    </h2>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#1e2433] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141824] border border-[#1e2433] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs font-mono text-emerald-400 group-hover:text-emerald-300 pt-1">
                      <span>Read full case study</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
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

      {/* Footer Info Box */}
      <section className="py-14 border-t border-[#1e2433] bg-[#07080b]">
        <Container>
          <div className="p-6 rounded-xl border border-[#1e2433] bg-[#0b0d13] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All case studies are managed via headless Sanity CMS at <Link href="/studio" className="text-emerald-400 underline underline-offset-2">/studio</Link>.</span>
            </div>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Discuss technical challenges &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

