import React from "react";
import Link from "next/link";
import { Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

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
              Full-Stack Developer building modern web applications and custom software for local businesses. Based on Next.js, React, PostgreSQL, and Supabase.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/abdullah-butt-dev"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/abdullahbuttdev"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-[#1e2433] bg-[#0d1017] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@abdullahbuttdev.me"
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
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-emerald-400 transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Build Logs &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              Get in Touch
            </div>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300 font-mono text-xs">
                <a
                  href="mailto:contact@abdullahbuttdev.me"
                  className="hover:text-emerald-400 transition-colors break-all"
                >
                  contact@abdullahbuttdev.me
                </a>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                Available for contract web projects and custom business systems.
              </li>
              <li>
                <Link
                  href="/studio"
                  className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 mt-2"
                >
                  Sanity Studio (CMS) &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Abdullah. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for local business &amp; web projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
