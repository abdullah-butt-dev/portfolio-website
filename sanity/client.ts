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
  plainSummary: string;
  problem: string;
  problemTechnical?: string;
  approach: string;
  approachTechnical?: string;
  result: string;
  resultTechnical?: string;
  techStack: string[];
  coverImage?: any;
  order?: number;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  plainSummary: string;
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
    title: "Perfect Traders: Point of Sale and Inventory Management System",
    slug: { current: "pos-shop" },
    summary:
      "A fast, dependable point-of-sale system built for wholesale and retail counter operations. It tracks inventory automatically, manages customer credit, and creates instant printed receipts.",
    plainSummary:
      "Perfect Traders needed a reliable way to ring up sales and manage wholesale inventory without relying on paper ledgers. I built a custom point-of-sale system that runs in any web browser, updates stock counts as items are sold, and tracks customer credit automatically. Today, the store uses this platform daily to process customer orders and issue instant receipts without bookkeeping errors.",
    problem:
      "The business was managing customer sales, incoming supplier deliveries, and customer credit using physical paper notebooks. Cashiers frequently spent several minutes per order manually calculating partial payments and outstanding balances for regular customers. This created long lines at the checkout counter, discrepancies between recorded stock and actual shelf inventory, and hours of frustrating reconciliation work at the close of business every day.",
    problemTechnical:
      "Technical context: Paper ledgers and disconnected spreadsheets lacked atomic transaction guarantees, causing ledger drift between cash drawer totals, customer receivables, and inventory counts.",
    approach:
      "I built a clean, browser-based counter application connected to a secure database that handles all calculations automatically:\n\n• Automatic Stock Adjustment: The moment a sale is completed, inventory numbers update immediately so cashiers always know what is on hand and never oversell.\n• Customer Credit and Supplier Balances: The system records whether a sale was paid in full, taken on credit, or partially paid with cash. It recalculates remaining balances instantly without manual math.\n• Instant Browser Receipts: Invoices and receipts generate right inside the cashier's web browser, allowing staff to print or download receipts in seconds without paying recurring cloud file-storage fees.",
    approachTechnical:
      "Technical implementation: Built with Next.js 14 App Router, Supabase, and PostgreSQL. Critical transactional logic was moved directly into PostgreSQL functions and triggers (pos_adjust_inventory, pos_recalc_sale, pos_recalc_purchase) to enforce single-source-of-truth calculations. Client-side PDF synthesis was implemented using jsPDF to eliminate cloud storage costs.",
    result:
      "The system is deployed and in active daily use for commercial wholesale and retail counter operations. Cashiers can ring up sales and hand customers print-ready receipts in seconds. Manual arithmetic errors have been eliminated, and the business owner has a clear, real-time overview of daily revenue, customer credit owed, and active inventory levels from any device.",
    resultTechnical:
      "Technical outcome: Production deployment on Vercel with zero database desync issues. Free-tier cloud architecture maintained by eliminating server-side binary storage.",
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
    videoUrl: "/pos-real-demo.mp4",
    order: 1,
  },
];

export const fallbackPosts: Post[] = [
  {
    _id: "post-pos-database-triggers",
    title:
      "Why We Moved Inventory and Balance Calculations Directly into the Database",
    slug: { current: "postgres-triggers-inventory-integrity" },
    plainSummary:
      "Plain-language summary: In a busy retail store, letting a website screen calculate order totals and stock can cause mistakes when multiple cashiers sell items at the same time. This article explains how moving that math directly into the database guarantees accurate numbers every time.",
    excerpt:
      "In a busy retail store, letting a website screen calculate order totals and stock can cause mistakes when multiple cashiers sell items at the same time. Here is why we made the database handle calculations directly.",
    publishedAt: "2026-09-05T10:00:00.000Z",
    readingTime: "5 min read",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "When building the Perfect Traders point-of-sale system for retail and wholesale counter operations, the most critical decision was where to calculate money totals and inventory numbers.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Problem with Doing Math in the Web Browser",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "In many simple websites, when a customer buys an item, the web page itself calculates the total, sends an update to change the stock, and figures out the customer's remaining balance. In a real shop with fast-paced counter sales or multiple open registers, this easily leads to mistakes. If the internet drops for two seconds, or two cashiers sell the last bag of rice at the exact same moment, the numbers in the system no longer match what is on the shelf.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Letting the Database Guard the Numbers",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "For the POS Shop, we moved all balance math and stock deductions directly into the database system (using PostgreSQL triggers in Supabase). When an order is entered, the database itself recalculates the cash collected, updates remaining customer credit, and deducts the inventory items in a single, protected step. Even if a cashier's browser window closes abruptly, the recorded numbers remain completely accurate.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        children: [
          {
            _type: "span",
            text: "If a business system cannot guarantee that stock counts and cash balances match reality, fancy screen animations will not help. The database must remain the single source of truth.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Instant Receipts without Monthly Storage Bills",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Another practical choice was how to handle customer receipts. Instead of creating PDF files on a remote server and storing thousands of invoice files on expensive cloud storage, we programmed the web browser to build and format the receipt on demand using jsPDF. The receipt prints immediately at the counter, and the business pays zero monthly file-storage fees.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Custom software for local businesses works best when it is straightforward, durable, and inexpensive to run. Putting the core rules into the database and keeping the interface fast gave this store a dependable register that runs all day without hiccups.",
          },
        ],
      },
    ],
  },
];

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
      plainSummary,
      problem,
      problemTechnical,
      approach,
      approachTechnical,
      result,
      resultTechnical,
      techStack,
      coverImage,
      order,
      liveUrl,
      githubUrl,
      videoUrl
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
      plainSummary,
      problem,
      problemTechnical,
      approach,
      approachTechnical,
      result,
      resultTechnical,
      techStack,
      coverImage,
      order,
      liveUrl,
      githubUrl,
      videoUrl
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
      plainSummary,
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
      plainSummary,
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
