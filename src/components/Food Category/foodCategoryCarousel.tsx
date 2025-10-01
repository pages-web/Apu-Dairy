import React, { useEffect } from "react";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Item from "./item";
import { Button } from "../ui/Button/Button";
import { useTranslations } from "use-intl";
import Link from "next/link";

const FoodCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const t = useTranslations("NewsMain");
  return (
    <div className="mt-10 w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <Item key={index} post={post} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/recipes">
          <Button className="h-10 w-36 px-6 rounded-full border border-white bg-white text-red-600 transition">
            {t("viewMore")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCarousel;
