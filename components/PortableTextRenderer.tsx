import React from "react";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/client";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const url = urlFor(value)?.width(1200).url();
      if (!url) return null;
      return (
        <div className="my-8 rounded-xl overflow-hidden border border-[#1e2433] bg-[#0c0e14]">
          <Image
            src={url}
            alt={value.alt || "Article illustration"}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <p className="p-3 text-xs font-mono text-center text-slate-500 border-t border-[#1e2433]">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold tracking-tight text-slate-100 mt-10 mb-4 border-b border-[#1e2433] pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-slate-100 mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-slate-200 mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 my-6 italic text-slate-300 bg-emerald-500/5 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-300 pl-2">
        {children}
      </ol>
    ),
  },
  marks: {
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded text-xs font-mono bg-[#141924] border border-[#1e2535] text-emerald-300">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? "noreferrer" : undefined}
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={portableTextComponents} />;
}

