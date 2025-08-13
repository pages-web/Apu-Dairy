"use client";

import React, { useState } from "react";

const images = [
  "/images/zurag.png",
  "/images/zurag1.png",
  "/images/zurag2.png",
  "/images/zurag3.png",
  "/images/zurag4.png",
  "/images/zurag5.png",
  "/images/zurag6.png",
];

const SideImage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    // Хэрвээ яг одоогийн идэвхтэй зураг дээр дахин дарж байвал идэвхийг арилгана
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 h-[150px]">
      {images.map((src, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-center rounded-full cursor-pointer shadow-md bg-blue-300 transition-transform duration-100 ${
              isActive ? "w-28 h-28 scale-110" : "w-16 h-16 hover:scale-110"
            }`}
          >
            <img
              src={src}
              alt={`image-${index}`}
              className={`object-contain transition-all duration-200 ${
                isActive ? "w-24 h-24" : "w-12 h-12"
              }`}
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SideImage;
