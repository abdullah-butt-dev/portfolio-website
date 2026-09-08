import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Container from "@/components/Container";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import { getPostBySlug, getPosts, urlFor } from "@/sanity/client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({
    slug: p.slug.current,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | Engineering Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const coverUrl = post.coverImage ? urlFor(post.coverImage)?.width(1400).url() : null;

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>cd .. /blog</span>
          </Link>
        </div>

        {/* Clean Reading Article Container */}
        <article className="max-w-3xl mx-auto">
          {/* Header Metadata */}
          <header className="space-y-6 pb-10 border-b border-[#1e2433]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime || "6 min read"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.2]">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal italic">
              {post.excerpt}
            </p>
          </header>

          {/* Optional Cover Image */}
          {coverUrl && (
            <div className="my-10 rounded-2xl overflow-hidden border border-[#1e2433] bg-[#0d1017]">
              <Image
                src={coverUrl}
                alt={post.coverImage?.alt || post.title}
                width={1400}
                height={700}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Body Content - Relaxed line height and reading width */}
          <div className="py-10 text-slate-300 leading-relaxed font-normal text-base sm:text-lg">
            <PortableTextRenderer value={post.body} />
          </div>

          {/* Post Footer */}
          <footer className="pt-10 mt-10 border-t border-[#1e2433] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all engineering articles</span>
            </Link>
            <div className="flex items-center gap-2 text-slate-500">
              <span>Published via Sanity CMS</span>
            </div>
          </footer>
        </article>
      </Container>
    </div>
  );
}

