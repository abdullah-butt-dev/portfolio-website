import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn, isSanityConfigured } from "./env";

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

// Fallback curated content for immediate review before Sanity project credentials are populated
export const fallbackCaseStudies: CaseStudy[] = [
  {
    _id: "case-study-1",
    title: "High-Throughput Financial Event Processing Engine",
    slug: { current: "high-throughput-event-engine" },
    summary:
      "Engineered an event-driven telemetry and transaction stream processing pipeline capable of handling 85,000+ events/sec with sub-5ms p99 latency.",
    problem:
      "The legacy batch processing pipeline suffered from severe 45-minute processing delays during volatile market trading hours, cascading failure states in downstream reporting replicas, and unsustainable database connection exhaustion that violated client SLA guarantees.",
    approach:
      "Architected a distributed decoupled pipeline utilizing partitioned Kafka log streams, Rust-based deserialization and validation workers, and an in-memory transactional cache layer backed by RocksDB. Replaced heavyweight relational locks with optimistic concurrency and vectorized write batches to an append-only time-series store.",
    result:
      "Reduced p99 processing latency from 45 minutes to 4.2 milliseconds. Slashed infrastructure compute overhead by 62% while scaling throughput capacity 12x under peak stress workloads with zero data loss or out-of-sequence anomalies.",
    techStack: ["Rust", "Apache Kafka", "TypeScript", "ClickHouse", "Docker", "Prometheus"],
    order: 1,
  },
  {
    _id: "case-study-2",
    title: "Zero-Trust Infrastructure Orchestration Platform",
    slug: { current: "zero-trust-orchestration-platform" },
    summary:
      "Designed an automated identity-aware secrets propagation and service-to-service cryptographic mesh across multi-region Kubernetes clusters.",
    problem:
      "Development teams were relying on static API keys embedded in environment variables across 40+ microservices, exposing critical infrastructure to accidental token leaks, manual quarterly rotation toil, and audit compliance vulnerabilities.",
    approach:
      "Implemented a dynamic ephemeral credential broker using HashiCorp Vault, SPIFFE/SPIRE workload attestation, and automated mTLS wire encryption. Authored custom Kubernetes admission webhooks to inject time-bound certificates directly into memory-backed tmpfs mounts transparently to application code.",
    result:
      "Completely eliminated 100% of persistent secrets and static API tokens across production environments. Automated compliance attestation reports saved an estimated 180 engineering hours quarterly during SOC 2 Type II audit cycles.",
    techStack: ["Go", "Kubernetes", "HashiCorp Vault", "SPIFFE/SPIRE", "Terraform", "AWS"],
    order: 2,
  },
  {
    _id: "case-study-3",
    title: "Distributed Edge CDN & Real-Time Cache Revalidation Engine",
    slug: { current: "distributed-edge-cdn-engine" },
    summary:
      "Constructed a globally distributed edge caching middleware that invalidates and purges dynamic e-commerce catalog states within 35ms worldwide.",
    problem:
      "Global users outside North America were experiencing high TTFB (>780ms) for catalog updates, while aggressive origin caching caused stale inventory displays that led to out-of-stock checkout cart abandonment.",
    approach:
      "Constructed edge compute routines deployed across 300+ edge PoPs with automated surrogate key tagging and stale-while-revalidate execution. Combined edge key-value state checks with real-time WebSocket delta invalidation broadcasts dispatched upon catalog mutations.",
    result:
      "Lowered global median TTFB from 780ms to 48ms. Achieved a 94.8% edge cache hit ratio, shielding origin database clusters from 3.2M unnecessary queries daily during viral flash sale traffic spikes.",
    techStack: ["TypeScript", "Next.js", "Cloudflare Workers", "Redis", "GraphQL", "Tailwind CSS"],
    order: 3,
  },
];

export const fallbackPosts: Post[] = [
  {
    _id: "post-1",
    title: "Understanding Ephemeral Workload Identity in Modern Clusters",
    slug: { current: "understanding-ephemeral-workload-identity" },
    excerpt:
      "Why long-lived API tokens and static service keys are obsolete, and how cryptographic workload attestation provides zero-trust security without engineering friction.",
    publishedAt: "2026-08-20T10:00:00.000Z",
    readingTime: "6 min read",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Securing microservice communications has historically revolved around static API keys, shared secrets, or long-lived service account tokens injected into environment variables. This pattern, while simple to deploy initially, creates systemic security debt as organizations scale.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Fatal Flaws of Static Secrets",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Static credentials inevitably leak—into debug logs, Git commit histories, crash dumps, or memory snapshots. Furthermore, the operational overhead of rotating active keys across hundreds of running container pods often leads teams to postpone rotations indefinitely.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Workload Attestation via Cryptographic Proof",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Instead of asking 'What secret does this process possess?', modern zero-trust systems ask 'What proof can this process provide about who it actually is?'. By interrogating the Linux kernel namespaces, cgroups, and pod metadata through standard attestation agents (such as SPIRE), we can issue cryptographically signed, short-lived X.509 SVID certificates valid for only minutes at a time.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        children: [
          {
            _type: "span",
            text: "The best secret is the one that never exists on persistent disk and expires before an attacker can even capture it.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "By establishing identity at the platform level, developers no longer need to wire credentials into config maps or environment variables. Identity becomes an intrinsic property of the running workload.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-2",
    title: "Designing Predictable Systems: Tail Latency and Concurrency Limits",
    slug: { current: "tail-latency-and-concurrency-limits" },
    excerpt:
      "A deep dive into why microservices degrade under load, how queue buildup magnifies tail latency, and how adaptive concurrency limits preserve system stability.",
    publishedAt: "2026-07-14T09:30:00.000Z",
    readingTime: "8 min read",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "When testing distributed services, engineers frequently celebrate average or median latency metrics. Yet in microservice topologies where a single user action touches dozens of downstream dependencies, the p99 or p99.9 tail latency is what truly governs user experience.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Queueing Trap",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Most systems degrade because of uncontrolled inbound queues. When concurrency spikes past optimal processing bounds, CPU cache thrashing, context switching, and garbage collection pauses turn manageable traffic into cascading timeout disasters.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Little's Law and Adaptive Limits",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Applying TCP Vegas congestion avoidance algorithms at the application RPC layer allows services to dynamically discover their capacity envelope in real time. Rejecting excess load early with 429 / 503 preserves healthy throughput for all inflight requests.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-3",
    title: "Mental Models for Schema Evolution in Event-Driven Architecture",
    slug: { current: "schema-evolution-in-event-driven-architecture" },
    excerpt:
      "Strategies for preventing breaking changes across asynchronous distributed producers and consumers without coordination friction.",
    publishedAt: "2026-06-02T14:15:00.000Z",
    readingTime: "5 min read",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "In distributed event architectures, events are immutable contracts stored permanently in commit logs. Once an event is published to a production stream, you cannot simply refactor fields as you would within a monolithic codebase.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Full Compatibility Guarantees",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "By enforcing bidirectional compatibility via Protobuf or Avro schema registries, both older consumer versions and newer deployed consumers can safely process stream variations without runtime de-serialization panics.",
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
    console.warn("Error fetching from Sanity, falling back to mock case studies:", error);
    return fallbackCaseStudies;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  if (!isSanityConfigured) {
    const found = fallbackCaseStudies.find((item) => item.slug.current === slug);
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
      return fallbackCaseStudies.find((item) => item.slug.current === slug) || null;
    }
    return data;
  } catch (error) {
    console.warn("Error fetching case study from Sanity, using fallback:", error);
    return fallbackCaseStudies.find((item) => item.slug.current === slug) || null;
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
    console.warn("Error fetching posts from Sanity, falling back to mock posts:", error);
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

