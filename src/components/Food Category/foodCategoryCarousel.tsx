import React, { useEffect } from "react";

import { ICmsPost } from "@/src/graphql/types/cms.types";

import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselApi,
} from "@/src/components/heading/carousel";
import Item from "./item";
import { Button } from "../ui/Button/Button";
import Link from "next/link";

const FoodCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <div>
      <Carousel
        className="w-full md:max-w-[100%]"
        setApi={setApi}
        data-aos="fade-up"
      >
        <CarouselContent
          className="flex flex-wrap overflow-visible justify-center gap-2"
          containerClassname="overflow-visible"
        >
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="flex-grow min-w-[280px] max-w-[335px] shrink-0 px-2"
            >
              <Item post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-8 flex justify-center">
        <Button className="h-10 w-36 px-6 rounded-full border border-white bg-white text-red-600 hover:bg-red-50 transition">
          Цааш үзэх
        </Button>
      </div>
    </div>
  );
};

export default FoodCarousel;
