"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import ReportDropdown from "./tailan";
import StrategySlider from "./content";
import { useTranslations } from "next-intl";

const Text = ({ post }: { post: ICmsPost }) => {
  const t = useTranslations("Hogjil");

  return (
    <div
      className="relative w-full min-w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpeg')" }}
    >
      <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-sm font-medium leading-normal text-[#ED3237] whitespace-nowrap bg-[rgb(250,203,205)] rounded-full font-sf-pro-rounded w-48 h-7 flex items-center justify-center z-10">
        {t("sustainableDevelopment")}
      </h2>
      <div className="relative z-0 max-w-[1400px] mx-auto px-6 py-10">
        <h1 className="text-[#ffffff] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize mb-6">
          {post.title}
        </h1>
        <div className="w-full flex justify-between items-start flex-wrap md:mb-5">
          <div
            className="w-full text-white font-sf-pro-rounded text-[16px] font-normal leading-[1.4] max-w-2xl md:ml-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="shrink-0">
            <ReportDropdown postId={post._id} />
          </div>
        </div>
        <StrategySlider />
      </div>
    </div>
  );
};

export default Text;
