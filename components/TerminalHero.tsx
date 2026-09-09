"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, FileCode, HardDrive } from "lucide-react";

const codeSnippets = {
  profile: `// developer.config.ts
// About Abdullah: Full-Stack Developer for local businesses

export const developer = {
  name: "Abdullah",
  role: "Full-Stack Developer",
  focus: "Building web apps & custom software that help local businesses run smoother",
  location: "Available Remote / Worldwide",
  toolsIUse: [
    "Next.js (fast website engine)",
    "React (clean user screens)",
    "PostgreSQL (secure business database)",
    "Supabase (accounts & data storage)",
    "Tailwind CSS (mobile-friendly styling)"
  ],
  activeProject: {
    name: "Perfect Traders POS",
    purpose: "Digital register & automated inventory for wholesale store",
    status: "in_daily_use_by_store_staff"
  }
};`,
  terminal: `$ check-status
{
  "developer": "Abdullah",
  "role": "Full-Stack Developer",
  "current_status": "open_for_new_business_projects",
  "what_i_solve": [
    "Replacing confusing spreadsheets with simple software",
    "Point-of-sale registers and live inventory tracking",
    "Fast, mobile-friendly websites that attract customers"
  ],
  "contact": "contact@abdullahbuttdev.me"
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
          {/* Terminal control dots */}
          <span className="w-3 h-3 rounded-full bg-[#ef4444]/70 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]/70 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10b981]/70 inline-block" />
          <span className="ml-3 text-[11px] text-slate-500 hidden sm:inline flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-slate-500" />
            developer overview
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
            <span>overview.ts</span>
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
            <span>status.sh</span>
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors"
          title="Copy snippet"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Code Display Area with Syntax Highlights */}
      <div className="p-4 sm:p-6 overflow-x-auto bg-[#090b10] text-slate-300 leading-relaxed font-mono">
        {activeTab === "profile" ? (
          <div className="space-y-1">
            <div className="text-slate-500 italic">// developer.config.ts</div>
            <div className="text-slate-500 italic">
              // What I build and tools I use
            </div>
            <div>
              <span className="text-purple-400">export const</span>{" "}
              <span className="text-yellow-300">developer</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-slate-400">name:</span>{" "}
              <span className="text-emerald-400">&quot;Abdullah&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">role:</span>{" "}
              <span className="text-emerald-400">
                &quot;Full-Stack Developer&quot;
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">mission:</span>{" "}
              <span className="text-emerald-300">
                &quot;Building custom web apps &amp; tools for local
                businesses&quot;
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">toolsIUse:</span> [
              <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
              <span className="text-cyan-300">&quot;React&quot;</span>,{" "}
              <span className="text-cyan-300">
                &quot;PostgreSQL database&quot;
              </span>
              , <span className="text-cyan-300">&quot;Supabase&quot;</span>
              ],
            </div>
            <div className="pl-4">
              <span className="text-slate-400">featuredSystem:</span> &#123;
            </div>
            <div className="pl-8 text-slate-400">
              name:{" "}
              <span className="text-emerald-400">
                &quot;Perfect Traders POS&quot;
              </span>
              ,
            </div>
            <div className="pl-8 text-slate-400">
              purpose:{" "}
              <span className="text-slate-300">
                &quot;Store register &amp; automated inventory&quot;
              </span>
              ,
            </div>
            <div className="pl-8 text-slate-400">
              status:{" "}
              <span className="text-emerald-400">
                &quot;in_daily_production_use&quot;
              </span>
            </div>
            <div className="pl-4">&#125;</div>
            <div>&#125;;</div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <span>$</span>
              <span className="text-slate-200">check-status</span>
            </div>
            <div className="text-slate-400 mt-2">&#123;</div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;developer&quot;</span>:{" "}
              <span className="text-emerald-400">&quot;Abdullah&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;role&quot;</span>:{" "}
              <span className="text-emerald-400">
                &quot;Full-Stack Developer&quot;
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;status&quot;</span>:{" "}
              <span className="text-emerald-400">
                &quot;ready_for_new_projects&quot;
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;services&quot;</span>: [
            </div>
            <div className="pl-8 text-slate-400">
              &quot;Point-of-sale registers and inventory tools&quot;,
            </div>
            <div className="pl-8 text-slate-400">
              &quot;Automated billing and customer credit ledgers&quot;,
            </div>
            <div className="pl-8 text-slate-400">
              &quot;Fast web applications for business operations&quot;
            </div>
            <div className="pl-4">],</div>
            <div className="pl-4">
              <span className="text-cyan-300">&quot;contact&quot;</span>:{" "}
              <span className="text-emerald-400">
                &quot;contact@abdullahbuttdev.me&quot;
              </span>
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
          <span>STATUS: READY FOR NEW PROJECTS</span>
        </div>
        <span className="font-mono text-slate-500">
          Plain Language &bull; Real Systems
        </span>
      </div>
    </div>
  );
}
