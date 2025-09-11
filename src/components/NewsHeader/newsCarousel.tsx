import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Item from "./itemMain";
const NewsCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex justify-center mt-[100px]">
      <div className="w-full max-w-[1400px] mb-10">
        <Carousel>
          <CarouselContent>
            {posts.map((post, index) => (
              <CarouselItem key={index} className="flex w-full">
                <Item post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
export default NewsCarousel;
