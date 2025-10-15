// Itemcategory.tsx
"use client";

import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";
import AllProductsPage from "./product";
import ProductIcons from "../Product Icon/productIcon";

type Props = {
  post: ICmsPost;
  productPosts: ICmsPost[];
  listPosts: ICmsPost[];
  extraPosts: ICmsPost[];
};

const Itemcategory = ({ post, productPosts, listPosts, extraPosts }: Props) => {
  return (
    <div className="bg-white text-gray-800 max-w-[1400px] mx-auto mt-2">
      {post.thumbnail?.url && (
        <div className="relative w-full h-64 sm:h-[400px] overflow-hidden rounded-b-3xl">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="relative w-full">
        <div className="w-[160px] h-[160px] rounded-full shadow-lg border mx-auto sm:ml-36 mt-4 sm:-mt-20 bg-white z-10 relative overflow-hidden flex items-start">
          <img
            src="/images/categoryAPU.jpg"
            alt="APU logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-screen-xl py-5 mx-4 sm:mx-32 grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-4 justify-start">
          {productPosts.map((p) => (
            <div key={p._id} className="mb-4">
              <h3 className="mb-2 font-semibold text-xl">{p.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: p.content }} />
            </div>
          ))}

          {listPosts.map((list) => (
            <div key={list._id} className="mb-2">
              <p dangerouslySetInnerHTML={{ __html: list.content }} />
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3">
            <ProductIcons />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-start col-span-1">
          <div className="w-px h-full bg-gray-300" />
        </div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-7 justify-start">
          {extraPosts.map((extra) => (
            <div key={extra._id} className="mb-4">
              <p className="mb-2 font-semibold">{extra.title}</p>
              <p
                className="p-3"
                dangerouslySetInnerHTML={{ __html: extra.content }}
              />
            </div>
          ))}
        </div>
      </div>

      <AllProductsPage />
    </div>
  );
};

export default React.memo(Itemcategory);
