// Carousels.tsx
"use client";

import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Itemcategory from "./item";

type Props = {
  posts: ICmsPost[];
  productInfoPosts: ICmsPost[];
  listPosts: ICmsPost[];
  extraPosts: ICmsPost[];
};

const Carousels = ({
  posts,
  productInfoPosts,
  listPosts,
  extraPosts,
}: Props) => {
  return (
    <div className="lg:block">
      <Carousel>
        <CarouselContent className="flex">
          {posts.map((post) => (
            <CarouselItem key={post._id} className="basis-[100%] shrink-0">
              <Itemcategory
                post={post}
                productPosts={productInfoPosts}
                listPosts={listPosts}
                extraPosts={extraPosts}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carousels;
