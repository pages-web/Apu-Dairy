"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Content from "./content";
import { useTranslations } from "next-intl";

const Item = ({ post }: { post: ICmsPost }) => {
  const t = useTranslations("songon");
  return (
    <div className="flex flex-col items-start max-w-[1380px] w-full mx-auto">
      <h1 className="text-[14px] font-medium leading-normal text-primary font-sf-pro-rounded inline-block bg-red-100 text-red-500 text-sm px-4 py-1 rounded-full mb-4 cursor-none">
        {t("title")}
      </h1>

      <h1 className="text-2xl sm:text-3xl font-medium text-[#414545] text-left mt-4 sm:mt-5 sm:mb-12 font-sf-pro-rounde cursor-none">
        {post.title}
      </h1>
      <Content />
    </div>
  );
};

export default Item;
