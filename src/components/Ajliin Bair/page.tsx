"use client";
import React, { useState } from "react";
import ErxesForm from "../Erxes Form/erxesForm";
import { useLocale, useTranslations } from "next-intl";
import { useCmsPosts } from "@/src/graphql/queries/kb";

const AjliinBair = () => {
  const t = useTranslations("jobsa");
  const locale = useLocale();
  const tagId = ["NYvArWicSrqEyJbDqxQGp"];
  const { cmsPosts } = useCmsPosts({ tagIds: tagId, language: locale });

  const categoryMap: Record<string, { label: string; value: string }> = {
    KJaB42B5qEInQK4mNVIwC: { label: t("categories.it"), value: "it" },
    nvj1XLbzvdC9ZHooLQXhA: { label: t("categories.finance"), value: "finance" },
    nu3WeRhoKC2gOrbae9UUh: { label: t("categories.driver"), value: "driver" },
    YGkarLgduP1WqqlSoPf9M: { label: t("categories.other"), value: "other" },
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoriesFromPosts = React.useMemo(() => {
    if (!cmsPosts) return [{ label: t("categories.all"), value: "all" }];
    const catIds = cmsPosts.flatMap((post) => post.categoryIds || []);
    const uniqueCatIds = Array.from(new Set(catIds));
    const cats = uniqueCatIds.map((id) => categoryMap[id]).filter(Boolean);
    return [{ label: t("categories.all"), value: "all" }, ...cats];
  }, [cmsPosts, t]);

  const filteredPosts = React.useMemo(() => {
    if (selectedCategory === "all") return cmsPosts;
    return cmsPosts.filter((post) =>
      post.categoryIds?.some(
        (id) => categoryMap[id]?.value === selectedCategory
      )
    );
  }, [cmsPosts, selectedCategory]);

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
        {categoriesFromPosts.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm min-w-[120px] ${
              selectedCategory === cat.value
                ? "bg-red-500 text-white cursor-none"
                : "bg-gray-100 text-gray-600 cursor-none"
            }`}
          >
            {cat.label}{" "}
            {cat.value === "all" ? `(${cmsPosts?.length || 0})` : ""}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredPosts?.map((post, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={post._id} className="border-b pb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-800 text-xl font-semibold">
                    {post.title || "No title"}
                  </p>
                  <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-3">
                    <span>{t("fulltime")}</span>
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
                </div>

                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center"
                  >
                    <img
                      src="/images/downarrow.png"
                      alt="down arrow"
                      className={`w-5 h-5 object-contain transform transition-transform duration-300 cursor-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
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
                  <ErxesForm brandId="KMylUq" formId="FBWGfk" />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                }`}
              >
                <p
                  className="text-gray-600 text-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AjliinBair;
