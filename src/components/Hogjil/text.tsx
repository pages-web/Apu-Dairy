"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import ReportDropdown from "./tailan";
import StrategySlider from "./content";
import { useTranslations } from "next-intl";

const Text = ({ post }: { post: ICmsPost }) => {
  const t = useTranslations("Hogjil");
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <h2 className="text-sm font-medium leading-normal text-[#ED3237] whitespace-nowrap bg-[rgb(250,203,205)] rounded-full font-sf-pro-rounded w-48 h-7 flex items-center justify-center">
          {t("sustainableDevelopment")}
        </h2>
      </div>
      <h1 className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize mb-6">
        {post.title}
      </h1>
      <div className="w-full flex justify-between items-start flex-wrap md:mb-5">
        <div
          className="w-full text-[#353535] font-sf-pro-rounded text-[16px] font-normal leading-[1.4] max-w-2xl md:ml-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="shrink-0">
          <ReportDropdown postId={post._id} />
        </div>
      </div>
      <StrategySlider />
    </div>
  );
};

export default Text;
