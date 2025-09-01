"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import LongLine from "./longline";

const FAQ = () => {
  const t = useTranslations();
  const faqData = t.raw("FAQProduct");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="mb-28">
        <div className="text-start md:mb-10 mt-10 mb-5">
          <h1 className="inline-block bg-[#FFEFF0] text-[#ED3237] font-sf-pro-rounded text-[13px] font-medium leading-[100%] px-4 py-1 rounded-full">
            Гол найрлага
          </h1>
        </div>
        <h2 className="md:mb-10 lg:mb-10 text-xl sm:text-xl md:text-2xl font-sf-pro-rounded text-black">
          Түгээмэл асуулт хариултууд
        </h2>

        {faqData.map((item: any, idx: number) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border-b border-gray-300 mb-4 cursor-none"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex justify-between items-center w-full py-3 bg-white cursor-none border-none"
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 12H6"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-96 py-2" : "max-h-0"
                }`}
              >
                {isOpen && <p className="text-gray-700">{item.answer}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <LongLine />
    </>
  );
};

export default FAQ;
