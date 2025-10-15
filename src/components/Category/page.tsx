// CategoryPage.tsx
"use client";

import React from "react";
import {
  useCmsPosts,
  useCmsTags,
  useCmsPostsByCategory,
} from "@/src/graphql/queries/kb";
import Carousels from "./carousel";
import { useLocale } from "next-intl";

export default function CategoryPage() {
  const locale = useLocale();
  const currentLang = locale === "en" ? "en" : "mn";

  const { cmsTags } = useCmsTags();
  const tagId = cmsTags.find((tag) => tag.name === "Category")?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: tagId ? [tagId] : [],
    language: currentLang,
  });

  const { posts: productInfoPosts } = useCmsPostsByCategory("productinfo", {
    language: currentLang,
  });
  const { posts: listPosts } = useCmsPostsByCategory("list", {
    language: currentLang,
  });
  const { posts: extraPosts } = useCmsPostsByCategory("extra", {
    language: currentLang,
  });

  return (
    <div className="px-3">
      <Carousels
        posts={cmsPosts}
        productInfoPosts={productInfoPosts}
        listPosts={listPosts}
        extraPosts={extraPosts}
      />
    </div>
  );
}
