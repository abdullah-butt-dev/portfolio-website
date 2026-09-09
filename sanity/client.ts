import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  isSanityConfigured,
} from "./env";

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  coverImage?: any;
  order?: number;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body: any;
  publishedAt: string;
  coverImage?: any;
  readingTime?: string;
}

export const client = createClient({
  projectId: projectId || "demo-project",
  dataset: dataset || "production",
  apiVersion,
  useCdn,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return null;
  return builder.image(source);
}

// Fallback curated content: ONLY real project (POS Shop) and real build-log post
export const fallbackCaseStudies: CaseStudy[] = [
  {
    _id: "case-study-pos-shop",
    title: "Perfect Traders — Point of Sale & Inventory Management System",
    slug: { current: "pos-shop" },
    summary:
      "A fast, responsive Point of Sale and inventory platform tailored for commercial wholesale and retail counter operations with automated receivables, payables, and on-demand PDF receipts.",
    problem:
      "A commercial wholesale and retail counter operation struggled with manual paper ledgers and disconnected spreadsheets. Cashiers had difficulty calculating split customer payments, tracking partial disbursements to suppliers, and maintaining accurate real-time inventory counts. Manual reconciliation led to frequent discrepancy errors between cash drawer counts and recorded customer credit, while generating physical invoices caused counter bottlenecks during peak transaction hours.",
    approach:
      "Engineered a dedicated Point of Sale application using Next.js 14 App Router, Supabase (PostgreSQL 15+), and Tailwind CSS. To guarantee absolute financial and inventory integrity, calculation logic was pushed directly into the database layer using PostgreSQL stored procedures and triggers:\n\n• Atomic Inventory Synchronization: Database triggers automatically adjust stock counts and log audit movements upon purchase and sale completions.\n• Automated Balance Calculations: Database procedures (pos_recalc_sale and pos_recalc_purchase) compute line totals, cash paid, amounts due, and statuses (paid, partial, credit) without relying on client-side state.\n• Client-Side PDF Generation: Integrated jsPDF to synthesize formatted, print-ready customer receipts directly in the cashier's browser, eliminating storage bucket bloat and avoiding recurring cloud file storage costs.\n• Dual-Direction Ledgering: Built dedicated customer receivables and supplier payables workflows to track partial payments, prevent overpayment, and log cash inflows/outflows accurately.",
    result:
      "Successfully deployed the platform to production on Vercel for live business operations. The system eliminated manual calculation errors by enforcing single-source-of-truth balances at the PostgreSQL level. Cashiers can complete sales and issue instantaneous PDF receipts in seconds, while business owners maintain real-time visibility over total revenue, receivables, payables, and stock levels through the live dashboard.",
    techStack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "jsPDF",
      "Radix UI",
    ],
    liveUrl: "https://perfecttraders.vercel.app/",
    githubUrl: "https://github.com/abdullah-butt-dev/pos-shop",
    order: 1,
  },
];

export const fallbackPosts: Post[] = [
  {
    _id: "post-pos-database-triggers",
    title:
      "Why We Pushed Inventory & Payment Balances to PostgreSQL Triggers in POS Shop",
    slug: { current: "postgres-triggers-inventory-integrity" },
    excerpt:
      "A build-log on why computing financial totals and inventory movements in application code causes race conditions in retail operations, and how PostgreSQL triggers solved it in POS Shop.",
    publishedAt: "2026-09-05T10:00:00.000Z",
    readingTime: "5 min read",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "When building Perfect Traders—a Point of Sale system for wholesale and retail counter operations—one of the earliest architectural decisions was where to calculate financial balances and update stock quantities.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Danger of Application-Layer Calculations in Retail",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "In many web tutorials, when an order is placed, the frontend or API route calculates the line item totals, deducts stock with a separate UPDATE query, and computes the customer's remaining balance. In a real shop with fast-paced counter sales or multiple tabs open, this approach is fragile. Network dropouts, concurrent sales of the same limited inventory, or partial updates can leave the database in an inconsistent state.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Enforcing Integrity with Database Procedures",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "For POS Shop, we moved this responsibility directly into PostgreSQL using Supabase stored procedures and triggers (pos_adjust_inventory, pos_recalc_sale, and pos_recalc_purchase). When a sale record is inserted or modified, PostgreSQL recalculates the exact amount paid, balance due, and updates stock atomically within the same transaction.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        children: [
          {
            _type: "span",
            text: "If a system's financial records or stock counts can disagree with reality, no amount of UI polish will save the user experience. The database must remain the single source of truth.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Client-Side PDF Synthesis",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Another key choice was handling receipts. Instead of generating PDFs on a server or saving binary files into a cloud storage bucket, we implemented client-side receipt generation with jsPDF. The browser renders the print-ready invoice on the fly from the validated sale data. This ensures instant customer receipts without consuming cloud storage quotas or paying unnecessary file-hosting fees.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Designing custom software for local businesses requires prioritizing reliability and low operational overhead. Pushing transactional rules to PostgreSQL and avoiding unnecessary third-party services delivered a fast, zero-fuss counter experience.",
          },
        ],
      },
    ],
  },
];

// Query Sanity or fallback
export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!isSanityConfigured) {
    return fallbackCaseStudies;
  }
  try {
    const query = `*[_type == "caseStudy"] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      summary,
      problem,
      approach,
      result,
      techStack,
      coverImage,
      order
    }`;
    const data = await client.fetch<CaseStudy[]>(query);
    if (!data || data.length === 0) return fallbackCaseStudies;
    return data;
  } catch (error) {
    console.warn(
      "Error fetching from Sanity, falling back to mock case studies:",
      error,
    );
    return fallbackCaseStudies;
  }
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  if (!isSanityConfigured) {
    const found = fallbackCaseStudies.find(
      (item) => item.slug.current === slug,
    );
    return found || null;
  }
  try {
    const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      summary,
      problem,
      approach,
      result,
      techStack,
      coverImage,
      order
    }`;
    const data = await client.fetch<CaseStudy | null>(query, { slug });
    if (!data) {
      return (
        fallbackCaseStudies.find((item) => item.slug.current === slug) || null
      );
    }
    return data;
  } catch (error) {
    console.warn(
      "Error fetching case study from Sanity, using fallback:",
      error,
    );
    return (
      fallbackCaseStudies.find((item) => item.slug.current === slug) || null
    );
  }
}

export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) {
    return fallbackPosts;
  }
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      coverImage
    }`;
    const data = await client.fetch<Post[]>(query);
    if (!data || data.length === 0) return fallbackPosts;
    return data;
  } catch (error) {
    console.warn(
      "Error fetching posts from Sanity, falling back to mock posts:",
      error,
    );
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) {
    const found = fallbackPosts.find((item) => item.slug.current === slug);
    return found || null;
  }
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      coverImage
    }`;
    const data = await client.fetch<Post | null>(query, { slug });
    if (!data) {
      return fallbackPosts.find((item) => item.slug.current === slug) || null;
    }
    return data;
  } catch (error) {
    console.warn("Error fetching post from Sanity, using fallback:", error);
    return fallbackPosts.find((item) => item.slug.current === slug) || null;
  }
}
