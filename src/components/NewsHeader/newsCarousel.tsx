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
    <div className="md:px-8 md:py-28 lg:py-28 max-sm:mt-20 mb-10">
      <Carousel>
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Item post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
