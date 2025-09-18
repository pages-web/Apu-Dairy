"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

type Slide = {
  type: "image" | "video";
  src: string;
};

type Props = {
  post: ICmsPost;
};

const BannerCarousel: React.FC<Props> = ({ post }) => {
  // Slides array: video + олон зураг
  const slides: Slide[] = [];

  if (post.videoUrl) {
    slides.push({ type: "video", src: post.videoUrl });
  }

  console.log("post", post);

  if (post.thumbnail?.url) {
    slides.push({
      type: "image",
      src: `https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`,
    });
  }

  if (post.images && post.images.length > 0) {
    post.images.forEach((item) =>
      slides.push({
        type: "image",
        src: `https://apudairy.api.erxes.io/api/read-file?key=${item?.url}`,
      })
    );
  }

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    if (slides.length <= 1) return; // Нэгээс олон slide байвал авто slide
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 секунд тутам
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrent(index);

  if (slides.length === 0) {
    return <p className="text-gray-500 text-center py-8">No image</p>;
  }

  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full relative">
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={`slide-${i}`}
                fill
                className="object-cover w-full h-full"
                quality={100}
                loading="lazy"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === dotIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
