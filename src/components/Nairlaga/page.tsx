"use client";

import React from "react";
import FAQ from "./faq";
import { useTranslations } from "next-intl";

const Nairlaga = () => {
  const t = useTranslations("Product");
  const ingredients = t.raw("Ingredients");
  const intro = t("RecipeIntro");

  return (
    <div className="w-full mx-auto px-4 py-1">
      <div className="text-center mb-4">
        <h1 className="inline-block bg-[#FFEFF0] text-[#ED3237] font-sf-pro-rounded text-[13px] font-medium leading-[100%] px-4 py-1 rounded-full">
          Гол найрлага
        </h1>
      </div>
      <h2 className="text-[#232323] text-center font-sf-pro-rounded text-[28px] sm:text-[32px] font-medium leading-normal max-w-3xl mx-auto mb-10 px-2">
        {intro}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ingredients.map((item: any) => (
          <div
            key={item.name}
            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl shadow px-4 py-4 sm:h-40 border border-gray-200"
          >
            <div className="pr-0 sm:pr-4 mb-4 sm:mb-0 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-[#232323] mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                {item.description}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
          </div>
        ))}
      </div>
      <FAQ />
    </div>
  );
};

export default Nairlaga;
