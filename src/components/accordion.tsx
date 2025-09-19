"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
interface AccordionItem {
  title: string;
  content?: string;
}
interface AccordionProps {
  items: AccordionItem[];
}
export function Accordion({
  items
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <div className="space-y-2" data-unique-id="3ccfe2f8-43a1-4ce9-96ca-ac14d7451b7d" data-file-name="components/accordion.tsx" data-dynamic-text="true">
      {items.map((item, index) => <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden" data-unique-id="903df180-315e-4051-b82e-aed5d5e3f822" data-file-name="components/accordion.tsx" data-dynamic-text="true">
          <button onClick={() => toggleItem(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200" data-unique-id="506f3d11-2389-4fe0-9d44-dbbbef981be9" data-file-name="components/accordion.tsx">
            <span className="text-lg font-medium text-gray-900" data-unique-id="8fd722ea-098d-4097-a64f-7138dfd204d7" data-file-name="components/accordion.tsx" data-dynamic-text="true">
              {item.title}
            </span>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} data-unique-id="d482bba0-5f81-41b6-9dc6-a3eb3aba25db" data-file-name="components/accordion.tsx" data-dynamic-text="true" />
          </button>
          {openIndex === index && item.content && <div className="px-6 pb-6" data-unique-id="e8448bf3-f283-45f9-9fad-077cff2b729a" data-file-name="components/accordion.tsx">
              <p className="text-gray-600 leading-relaxed" data-unique-id="2baa2674-b77b-4d59-884e-04b22910df07" data-file-name="components/accordion.tsx" data-dynamic-text="true">{item.content}</p>
            </div>}
        </div>)}
    </div>;
}