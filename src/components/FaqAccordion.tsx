import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[#E9EFF0] border-t border-b border-[#E9EFF0]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full min-h-[56px] py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
            >
              <span className="font-display text-base sm:text-lg font-semibold text-[#142A3C] group-hover:text-[#147C75] transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#718A95] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#147C75]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="pb-6 pr-8 text-sm sm:text-base text-[#27353D] leading-relaxed"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
