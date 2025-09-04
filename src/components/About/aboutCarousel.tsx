"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import About from "./item";
import { useTranslations } from "next-intl";

const AboutCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const t = useTranslations("navbar");
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-16">
        <p className="bg-transparent border border-red-500 text-red-500 font-semibold py-2 px-6 rounded-full text-sm">
          {t("about")}
        </p>
      </div>

      <div className="w-full pb-10 mt-10 flex justify-center">
        <div className="w-full max-w-5xl px-4">
          {posts.map((post, index) => (
            <div key={index}>
              <About post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
