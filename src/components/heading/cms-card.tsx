"use client";

import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

const BannerCard = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen overflow-hidden">
      <Image
        src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail?.url}`}
        alt={post.title}
        fill
        className="object-cover w-full h-full"
        quality={100}
        loading="lazy"
      />
    </div>
  );
};

export default BannerCard;
