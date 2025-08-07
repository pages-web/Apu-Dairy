import React, { useEffect } from "react";

import { ICmsPost } from "@/src/graphql/types/cms.types";

import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselApi,
} from "@/src/components/heading/carousel";
import Brand from "./title";
const BrandCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <div className="mt-28">
      <Carousel
        className="w-full md:max-w-[100%]"
        setApi={setApi}
        data-aos="fade-up"
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index}>
              <Brand post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
