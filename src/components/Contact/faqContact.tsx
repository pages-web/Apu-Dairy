"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

const FAQContact = () => {
  const t = useTranslations("FAQ");
  const faqs = t.raw("faqs"); // JSON array шууд татаж авна

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-28">
      <h2 className="text-[32px] font-medium leading-none text-black font-sf-pro-rounded mb-10">
        {t("FAQTitle")}
      </h2>

      {faqs.map((item: { question: string; answer: string }, idx: number) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            style={{ marginBottom: 10, borderBottom: "1px solid gray" }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                display: "flex",
                padding: "12px 0",
                justifyContent: "space-between",
                alignSelf: "stretch",
                width: "100%",
                border: "none",
                background: "#fff",
                cursor: "none",
              }}
            >
              {item.question}

              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ marginRight: 8 }}
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
                  style={{ marginRight: 8 }}
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
              className="faq-answer"
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                padding: isOpen ? "10px" : "0 10px",
                maxWidth: isOpen ? "900px" : "0px",
              }}
            >
              {isOpen && <p>{item.answer}</p>}
            </div>

            <style jsx>{`
              .faq-answer {
                width: 800px;
                background: #fafafa;
                cursor: none;
                overflow: hidden;
                transition: max-height 0.5s ease, padding 0.3s ease;
              }
              @media (max-width: 640px) {
                .faq-answer {
                  width: 300px;
                }
              }
            `}</style>
          </div>
        );
      })}
    </div>
  );
};

export default FAQContact;
