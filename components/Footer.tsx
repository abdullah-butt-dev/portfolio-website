// "use client";

import React from "react";
import Link from "next/link";
import { Terminal, Mail } from "lucide-react";

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1e2433] bg-[#07080b] py-14 md:py-20 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-[#1e2433]/70">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-slate-200">
              <span className="flex items-center justify-center w-6 h-6 rounded border border-[#1e2433] bg-[#0d1017] text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
              </span>
              <span className="font-semibold text-slate-100">Abdullah</span>
              <span className="text-emerald-400 font-bold">$</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software engineer focused on high-throughput backend architecture, resilient distributed systems, and clean minimal web engineering.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="GitHub Profile"
              >
                {/* <Github className="w-4 h-4" /> */}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="LinkedIn Profile"
              >
                {/* <Linkedin className="w-4 h-4" /> */}
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="X / Twitter Profile"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@abdullah.dev"
                className="p-2 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="hover:text-emerald-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About & Timeline
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-emerald-400 transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Architecture / CMS */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Platform
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/studio" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  Sanity Studio (CMS)
                </Link>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS, Sanity v3.
              </li>
              <li className="text-xs text-slate-500">
                Deployment: Vercel Edge Network
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Abdullah. Built with zero clutter.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
