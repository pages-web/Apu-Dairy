"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Button } from "../ui/Button/Button";
import { useTranslations } from "next-intl";

const Food = ({ post }: { post: ICmsPost }) => {
  const t = useTranslations("Food");
  return (
    <div className="relative w-full flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
      <Button className="border rounded-full border-red-600 px-4 py-2 text-sm sm:text-base">
        {t("food")}
      </Button>

      <h1 className="text-2xl sm:text-3xl font-medium text-[#414545] text-center mt-4 sm:mt-5 font-sf-pro-rounded">
        {post.title}
      </h1>

      <div className="max-w-2xl w-full text-center text-black font-serif font-normal text-base mt-5 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default Food;
