"use client";

import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

const NewsCard = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen lg:h-[120vh] overflow-hidden">
      <div className="absolute inset-0 z-50">
        <Image
          src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail?.url}`}
          alt={post.title}
          fill
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>
    </div>
  );
};

export default NewsCard;
