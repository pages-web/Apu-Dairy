import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import NewsCard from "./cms-card";

const NewsCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="relative">
      <Carousel className="relative">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/3 h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh]"
            >
              <div className="w-full h-full">
                <NewsCard post={post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
