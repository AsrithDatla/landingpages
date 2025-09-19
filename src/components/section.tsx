"use client";

import { ReactNode } from "react";
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted";
}
export function Section({
  children,
  className = "",
  id,
  background = "white"
}: SectionProps) {
  const bgClass = background === "muted" ? "bg-muted/30" : "bg-white";
  return <section id={id} className={`py-20 px-8 ${bgClass} ${className}`} data-unique-id="f6ac1a5a-a6d7-4280-9081-06d8ff26338c" data-file-name="components/section.tsx">
      <div className="max-w-6xl mx-auto" data-unique-id="e2484272-f68b-4d3a-8c93-05833f296e68" data-file-name="components/section.tsx" data-dynamic-text="true">
        {children}
      </div>
    </section>;
}