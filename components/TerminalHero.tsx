"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, FileCode, HardDrive } from "lucide-react";

const codeSnippets = {
  profile: `// engineer.config.ts
export const engineer = {
  name: "Abdullah",
  title: "Systems & Full-Stack Engineer",
  focus: ["Distributed Architectures", "High-Throughput APIs", "Clean Frontends"],
  status: "available_for_new_roles",
  currentLocation: "Global / Remote",
  metrics: {
    peakThroughput: "85,000 req/sec",
    p99Latency: "< 5ms",
    availability: "99.99%"
  },
  stack: ["TypeScript", "Rust", "Go", "Next.js", "Kubernetes", "Sanity"]
};`,
  terminal: `$ curl -s https://api.abdullah.dev/v1/health | jq .
{
  "status": "healthy",
  "uptime": "99.99%",
  "active_services": [
    "distributed-event-engine",
    "zero-trust-mesh",
    "edge-cdn-middleware"
  ],
  "latency_p99": "4.2ms",
  "cms": "Sanity Headless CMS"
}`,
};

export default function TerminalHero() {
  const [activeTab, setActiveTab] = useState<"profile" | "terminal">("profile");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-[#1e2433] bg-[#0b0d13] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Window Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e2433] bg-[#08090d]">
        <div className="flex items-center gap-2">
          {/* Terminal control buttons */}
          <span className="w-3 h-3 rounded-full bg-[#ef4444]/70 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]/70 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10b981]/70 inline-block" />
          <span className="ml-3 text-[11px] text-slate-500 hidden sm:inline flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-slate-500" />
            zsh — 80x24
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-[#0e121a] p-1 rounded-lg border border-[#1e2433]">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
              activeTab === "profile"
                ? "bg-[#182030] text-emerald-400 font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileCode className="w-3 h-3" />
            <span>engineer.ts</span>
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
              activeTab === "terminal"
                ? "bg-[#182030] text-emerald-400 font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <HardDrive className="w-3 h-3" />
            <span>health.sh</span>
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Display Area with Syntax Highlights */}
      <div className="p-4 sm:p-6 overflow-x-auto bg-[#090b10] text-slate-300 leading-relaxed font-mono">
        {activeTab === "profile" ? (
          <div className="space-y-1">
            <div className="text-slate-500 italic">// engineer.config.ts</div>
            <div>
              <span className="text-purple-400">export const</span>{" "}
              <span className="text-yellow-300">engineer</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-slate-400">name:</span>{" "}
              <span className="text-emerald-400">&quot;Abdullah&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">role:</span>{" "}
              <span className="text-emerald-400">&quot;Systems &amp; Full-Stack Engineer&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">focus:</span> [
              <span className="text-emerald-300">&quot;Distributed Systems&quot;</span>,{" "}
              <span className="text-emerald-300">&quot;High-Throughput APIs&quot;</span>,{" "}
              <span className="text-emerald-300">&quot;Resilient Cloud&quot;</span>
              ],
            </div>
            <div className="pl-4">
              <span className="text-slate-400">status:</span>{" "}
              <span className="text-emerald-400">&quot;available_for_new_roles&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">metrics:</span> &#123;
            </div>
            <div className="pl-8 text-slate-400">
              peakThroughput: <span className="text-cyan-300">&quot;85k req/s&quot;</span>,
            </div>
            <div className="pl-8 text-slate-400">
              p99Latency: <span className="text-cyan-300">&quot;&lt; 5ms&quot;</span>,
            </div>
            <div className="pl-8 text-slate-400">
              availability: <span className="text-cyan-300">&quot;99.99%&quot;</span>
            </div>
            <div className="pl-4">&#125;,</div>
            <div className="pl-4">
              <span className="text-slate-400">stack:</span> [
              <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;TypeScript&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Sanity&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Rust&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Kubernetes&quot;</span>
              ]
            </div>
            <div>&#125;;</div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>$</span>
              <span className="text-slate-200">curl -s https://api.abdullah.dev/v1/health | jq .</span>
            </div>
            <div className="text-slate-400 mt-2">&#123;</div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;status&quot;</span>:{" "}
              <span className="text-emerald-400">&quot;healthy&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;uptime&quot;</span>:{" "}
              <span className="text-emerald-400">&quot;99.99%&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;active_services&quot;</span>: [
            </div>
            <div className="pl-8 text-slate-400">
              &quot;distributed-event-engine&quot;,
            </div>
            <div className="pl-8 text-slate-400">
              &quot;zero-trust-mesh&quot;,
            </div>
            <div className="pl-8 text-slate-400">
              &quot;edge-cdn-middleware&quot;
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;latency_p99&quot;</span>:{" "}
              <span className="text-emerald-400">&quot;4.2ms&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;cms&quot;</span>:{" "}
              <span className="text-emerald-400">&quot;Sanity Headless CMS&quot;</span>
            </div>
            <div className="text-slate-400">&#125;</div>
            <div className="flex items-center gap-2 text-emerald-400 pt-3">
              <span>$</span>
              <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status line */}
      <div className="px-4 py-2 border-t border-[#1e2433] bg-[#07080b] flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>CONNECTED &bull; UTF-8</span>
        </div>
        <span className="font-mono text-slate-500">LF &bull; TypeScript / JSON</span>
      </div>
    </div>
  );
}

