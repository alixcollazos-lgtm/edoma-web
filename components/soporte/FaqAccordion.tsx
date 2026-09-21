"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { FAQS } from "@/lib/constants";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-line rounded-[1.75rem] border border-brand-line bg-white">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-[0.98rem] font-medium text-brand-ink">
                {faq.question}
              </span>

              <span
                className={`h-4 w-4 flex-shrink-0 text-brand-support transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <Icons.chevronDown />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-[0.95rem] leading-relaxed text-brand-ink/65">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}