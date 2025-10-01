"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

type Slide = {
  src: string;
  type: "image" | "video";
};

type Props = {
  post: ICmsPost;
};

const BannerCarousel: React.FC<Props> = ({ post }) => {
  const slides: Slide[] = [];

  slides.push({ src: "/images/deejvideo.mp4", type: "video" });
  if (post.thumbnail?.url) {
    slides.push({
      src: `https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`,
      type: "image",
    });
  }
  if (post.images && post.images.length > 0) {
    post.images.forEach((item) =>
      slides.push({
        src: `https://apudairy.api.erxes.io/api/read-file?key=${item?.url}`,
        type: "image",
      })
    );
  }

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[93.2vh] overflow-hidden">
      {slides.length > 0 && (
        <div className="absolute inset-0">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 h-full relative">
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    autoPlay
                    loop={true}
                    muted
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={slide.src}
                    alt={`slide-${i}`}
                    fill
                    className="object-fill w-full h-full"
                    quality={100}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === dotIndex ? "bg-white scale-125" : "bg-gray-400"
                }`}
                onClick={() => goToSlide(dotIndex)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
