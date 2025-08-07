"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import ReportDropdown from "./tailan";
import StrategySlider from "./content";

const Text = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-sm font-medium leading-normal text-[#ED3237] whitespace-nowrap bg-[rgb(250,203,205)] rounded-full font-sf-pro-rounded w-40 h-7 flex items-center justify-center">
          Тогтвортой хөгжил
        </h2>
      </div>
      <h1 className="text-[#353535] text-center font-sf-pro-rounded text-[32px] font-medium leading-normal mb-6">
        {post.title}
      </h1>
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div
          className="text-[#353535] font-sf-pro-rounded text-[16px] font-normal leading-[1.4] max-w-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="shrink-0">
          <ReportDropdown />
        </div>
      </div>
      <StrategySlider />
    </div>
  );
};

export default Text;
