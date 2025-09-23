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
  const slides: Slide[] = [];

  if (post.videoUrl) {
    slides.push({ type: "video", src: post.videoUrl });
  }

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

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrent(index);

  if (slides.length === 0) {
    return <p className="text-gray-500 text-center py-8">No image</p>;
  }

  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen overflow-hidden">
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
            ) : slide.src.includes("youtube.com") ||
              slide.src.includes("youtu.be") ? (
              <iframe
                src={slide.src.replace("watch?v=", "embed/")}
                title={`video-${i}`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
