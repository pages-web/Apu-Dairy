import React from "react";
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
          {t("filters.all")}
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          {t("filters.finance")}
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          {t("filters.drivers")}
        </button>
        <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          {t("filters.it")}
        </button>
        <button className="bg-gray-100 text-gray-400 px-4 py-2 rounded-full text-sm min-w-[120px] cursor-none">
          {t("filters.other")}
        </button>
      </div>

      <div className="space-y-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-b pb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800">
                  {i % 2 === 0
                    ? "Senior Software Developer"
                    : "Senior Inventory Specialist"}
                </h2>
                <div className="flex flex-wrap items-center text-gray-500 text-sm mt-2 gap-x-4 gap-y-1">
                  <span>Full time</span>
                  <span className="text-gray-300">•</span>
                  <span>{i % 2 === 0 ? "3.5 m - 4 m" : "1.6 m - 1.8 m"}</span>
                  <span className="text-gray-300">•</span>
                  <span>
                    {i % 2 === 0 ? "Khan-Uul District" : "Bayanzurkh District"}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <img
                  src="/images/downarrow.png"
                  alt="down arrow"
                  className="w-5 h-5 object-contain"
                />
                <button
                  onClick={handleClick}
                  className="bg-red-500 text-white px-5 py-3 rounded-full flex items-center text-sm whitespace-nowrap cursor-none"
                >
                  {t("anket")}
                  <img
                    src="/images/forward.png"
                    alt="forward arrow"
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
            <ErxesForm brandId="KMylUq" formId="FBWGfk" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AjliinBair;
