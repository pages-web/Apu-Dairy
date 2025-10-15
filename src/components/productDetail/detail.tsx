"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const NutritionalHighlights = ({
  items,
}: {
  items: { label: string; value?: string; circle?: string }[];
}) => {
  const [open, setOpen] = useState(false);

  const t = useTranslations("Ingrediens");

  return (
    <div className="mb-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 mb-4 focus:outline-none justify-between w-full cursor-none"
        aria-expanded={open}
        aria-controls="nutritional-items"
      >
        <span className="font-semibold text-lg">
          {t("NutritionalHighlights")}
        </span>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="transition-transform duration-200"
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
            className="transition-transform duration-200"
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

      {open && (
        <div
          id="nutritional-items"
          className={`transition-all duration-500 ease-in-out ${
            open
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden"
          } flex gap-6 items-start flex-wrap`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 text-center"
            >
              <div className="flex items-center gap-1 text-sm text-gray-800 font-medium">
                <span>{item.label}</span>
                {item.value && (
                  <span className="text-gray-600 font-normal">
                    {item.value}
                  </span>
                )}
              </div>
              {item.circle && (
                <div className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center text-[10px] leading-tight text-gray-700">
                  <div className="text-center whitespace-pre-line">
                    {item.circle}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NutritionalHighlights;
