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

      <h1 className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize">
        {post.title}
      </h1>
      <Content />
    </div>
  );
};

export default Item;
