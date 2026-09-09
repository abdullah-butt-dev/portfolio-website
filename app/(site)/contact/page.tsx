"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Container from "@/components/Container";
import Card from "@/components/Card";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[#1e2433] bg-[#090b10]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Get in Touch
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Let&apos;s Build Software for Your Business
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed font-normal">
              Whether you need a custom Point of Sale, an inventory dashboard, or a modern full-stack web application, reach out directly. I respond promptly to all project inquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Contact Links & Availability Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-100 font-mono flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Direct Channels
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Send a message directly via email or connect on LinkedIn and GitHub.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:contact@abdullahbuttdev.me"
                  className="group flex items-center justify-between p-4 rounded-xl border border-[#1e2433] bg-[#0c0f17] hover:border-emerald-500/40 hover:bg-[#101420] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">Email</div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-300 transition-colors break-all">
                        contact@abdullahbuttdev.me
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href="https://linkedin.com/in/abdullahbuttdev"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-[#1e2433] bg-[#0c0f17] hover:border-emerald-500/40 hover:bg-[#101420] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#141924] text-slate-300 border border-[#1e2535]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">LinkedIn</div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
                        linkedin.com/in/abdullahbuttdev
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/abdullah-butt-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-[#1e2433] bg-[#0c0f17] hover:border-emerald-500/40 hover:bg-[#101420] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#141924] text-slate-300 border border-[#1e2535]">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500">GitHub</div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
                        github.com/abdullah-butt-dev
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>

              {/* Status indicator box */}
              <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: AVAILABLE FOR WORK
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Open for contract projects, local business software development, custom internal dashboards, and full-stack web applications.
                </p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 border-[#1e2433] bg-[#0c0f17]">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 font-mono">
                      Message Received
                    </h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. I review project inquiries regularly and will respond to your email promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-4 px-4 py-2 rounded-lg border border-[#1e2433] text-xs font-mono text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-1">
                        Send a Project Inquiry
                      </h3>
                      <p className="text-xs text-slate-400">
                        Fill out the form below or write directly to <span className="text-emerald-400 font-mono">contact@abdullahbuttdev.me</span>.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-lg bg-[#08090d] border border-[#1e2433] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm font-mono transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@business.com"
                          className="w-full px-4 py-3 rounded-lg bg-[#08090d] border border-[#1e2433] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm font-mono transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Project Type / Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Point of sale / Inventory / Custom web app"
                        className="w-full px-4 py-3 rounded-lg bg-[#08090d] border border-[#1e2433] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm font-mono transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your business, the problem you're looking to solve, and any timing requirements..."
                        className="w-full px-4 py-3 rounded-lg bg-[#08090d] border border-[#1e2433] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm font-mono transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
