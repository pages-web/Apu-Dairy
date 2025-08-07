import React, { useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Itemcategory from "./item";

const Carousels = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-8">
      <div className=" lg:block mt-12">
        <Carousel>
          <CarouselContent className="flex">
            {posts.map((post, index) => (
              <CarouselItem key={index} className="basis-[100%] shrink-0 px-2">
                <Itemcategory post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;
