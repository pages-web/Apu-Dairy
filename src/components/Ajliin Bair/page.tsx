"use client";
import React, { useState } from "react";
import ErxesForm from "../Erxes Form/erxesForm";
import { useTranslations } from "next-intl";

const AjliinBair = () => {
  const t = useTranslations("jobs");
  const handleClick = () => {
    const modalButton = document.querySelector(
      '[data-erxes-modal="FBWGfk"]'
    ) as HTMLElement;
    modalButton?.click();
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-[1400px] w-full px-4 mx-auto py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-red-100 text-red-500 text-sm px-4 py-1 rounded-full mb-4">
          {t("openLabel")}
        </span>
        <h1 className="text-2xl sm:text-3xl font-normal text-[#232323] font-sf-pro-rounded leading-normal">
          {t("title")}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center mb-8 gap-2">
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          Бүх байр (6)
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          Санхүү & Нягтлан (2)
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          Жолооч (1)
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          IT & Систем (3)
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          Бусад (0)
        </button>
      </div>
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b pb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex flex-col">
                  <h2 className="text-base font-semibold text-gray-800">
                    {i === 0
                      ? "Senior Inventory Specialist"
                      : i === 1
                      ? "Senior Software Developer"
                      : i === 2
                      ? "Junior UI/UX Fullstack Designer"
                      : "Senior Inventory Specialist"}
                  </h2>
                  <div className="flex flex-wrap items-center text-gray-500 text-sm mt-1 gap-x-3">
                    <span>Full time</span>
                    <span className="text-gray-300">•</span>
                    <span>
                      {i === 0
                        ? "1.6 m - 1.8 m"
                        : i === 1
                        ? "3.5 m - 4 m"
                        : i === 2
                        ? "2.5 m - 3 m"
                        : "1.6 m - 1.8 m"}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span>
                      {i === 1 ? "Khan-Uul District" : "Bayanzurkh District"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center cursor-none"
                  >
                    <img
                      src="/images/downarrow.png"
                      alt="down arrow"
                      className={`w-5 h-5 object-contain transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={handleClick}
                    className="bg-red-500 text-white px-5 py-3 rounded-full flex items-center text-sm whitespace-nowrap"
                  >
                    {t("anket")}
                    <img
                      src="/images/forward.png"
                      alt="forward arrow"
                      className="ml-2"
                    />
                  </button>

                  <ErxesForm brandId="KMylUq" formId="FBWGfk" />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm mb-4">
                  Энэ бол тухайн ажлын байрны дэлгэрэнгүй мэдээлэл.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AjliinBair;
