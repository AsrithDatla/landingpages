"use client";

import { ReactNode } from "react";
interface RichTextProps {
  children: ReactNode;
  className?: string;
}
export function RichText({
  children,
  className = ""
}: RichTextProps) {
  return <div className={`prose prose-lg max-w-none ${className}`} data-unique-id="c5f2a4ca-dbf0-4160-b2fb-effe1da9f73b" data-file-name="components/rich-text.tsx" data-dynamic-text="true">
      {children}
    </div>;
}