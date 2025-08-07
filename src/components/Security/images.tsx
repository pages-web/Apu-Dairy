"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";

const SecureMain = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="relative w-[800px] h-[600px] rounded-3xl overflow-hidden bg-[#e3f3fc] hidden lg:block md:right-[200px]">
      {post.thumbnail?.url && (
        <Image
          src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
          alt={post.title}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover"
        />
      )}

      <div className="absolute bottom-0 left-0 w-full mb-5 rounded-3xl bg-white/30 p-5 text-white z-10">
        <p className="text-sm mb-2 font-semibold opacity-80">{post.title}</p>
        <p
          className="text-xs leading-snug font-medium whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default SecureMain;
