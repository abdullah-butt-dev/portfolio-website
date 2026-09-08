import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`relative rounded-xl border border-[#1e2433] bg-[#0c0e14]/90 p-6 md:p-8 backdrop-blur-sm ${
        hoverEffect
          ? "transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#0f121a] hover:shadow-[0_0_25px_rgba(16,185,129,0.06)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

