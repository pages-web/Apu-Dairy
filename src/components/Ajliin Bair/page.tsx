"use client";
import React, { useState } from "react";
import ErxesForm from "../Erxes Form/erxesForm";
import { useLocale, useTranslations } from "next-intl";
import { useCmsPosts } from "@/src/graphql/queries/kb";

const categories = [
  { label: "Бүх байр", value: "all" },
  { label: "Санхүү & Нягтлан", value: "finance" },
  { label: "Жолооч", value: "driver" },
  { label: "IT & Систем", value: "it" },
  { label: "Бусад", value: "other" },
];

const AjliinBair = () => {
  const t = useTranslations("jobs");
  const locale = useLocale();

  const tagId = ["NYvArWicSrqEyJbDqxQGp"];
  const { cmsPosts } = useCmsPosts({
    tagIds: tagId,
    language: locale,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleClick = () => {
    const modalButton = document.querySelector(
      '[data-erxes-modal="FBWGfk"]'
    ) as HTMLElement;
    modalButton?.click();
  };

  return (
    <div className="max-w-[1415px] w-full px-4 mx-auto py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-red-100 text-red-500 text-sm px-4 py-1 rounded-full mb-4">
          {t("openLabel")}
        </span>
        <h1 className="text-2xl sm:text-3xl font-normal text-[#232323] font-sf-pro-rounded leading-normal">
          {t("title")}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm min-w-[120px] ${
              selectedCategory === cat.value
                ? "bg-red-500 text-white cursor-pointer"
                : "bg-gray-100 text-gray-600 cursor-pointer"
            }`}
          >
            {cat.label}{" "}
            {cat.value === "all" ? `(${cmsPosts?.length || 0})` : ""}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {cmsPosts?.map((post, i) => {
          const isOpen = openIndex === i;
          const postCat =
            post?.customFieldsData?.[2]?.value?.toString().toLowerCase() ||
            "other";

          const showContent =
            selectedCategory === "all" ||
            selectedCategory === "it" ||
            selectedCategory === postCat;

          return (
            <div key={i} className="border-b pb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex flex-col gap-2">
                  {selectedCategory === "finance" ||
                  selectedCategory === "driver" ? (
                    <p className="text-gray-500 italic">
                      {" "}
                      <>
                        <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-3">
                          <span>Full time</span>
                          <span className="text-gray-300">•</span>

                          <div className="font-sans text-[16px] font-normal leading-normal">
                            {!!post?.customFieldsData?.[0]?.value?.toString() ||
                              "No value"}
                          </div>
                          <span className="text-gray-300">•</span>
                          <div className="font-sans text-[20px] font-normal leading-normal">
                            {!!post?.customFieldsData?.[1]?.value?.toString() ||
                              "No value"}
                          </div>
                        </div>
                      </>
                    </p>
                  ) : showContent ? (
                    <>
                      <p className="text-gray-800 text-xl font-semibold">
                        {post.title || "No title"}
                      </p>

                      <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-3">
                        <span>Full time</span>
                        <span className="text-gray-300">•</span>

                        <div className="font-sans text-[16px] font-normal leading-normal">
                          {post?.customFieldsData?.[0]?.value?.toString() ||
                            "No value"}
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="font-sans text-[20px] font-normal leading-normal">
                          {post?.customFieldsData?.[1]?.value?.toString() ||
                            "No value"}
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center"
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

              {/* Post content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                }`}
              >
                {showContent && (
                  <p
                    className="text-gray-600 text-sm mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AjliinBair;
