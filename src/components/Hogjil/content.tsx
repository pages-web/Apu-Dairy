"use client";

import React, { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Фермийн сургалт, эрдэмлэг хамтын ажиллагаа",
    imageUrl: "/images/Marketing Campaign 1 1.png",
  },
  {
    title: "Монгол улсын итгэмжлэгдсэн лаборатори",
    imageUrl: "/images/yellow1.png",
  },
  {
    title: "Нийт 40 сая долларын хөрөнгө оруулалт",
    imageUrl: "/images/green1.png",
  },
  { title: "Хүчирхэг хамт олон", imageUrl: "/images/red1.png" },
  {
    title: "Баялаг, хариуцлагатай үйлдвэрлэл",
    imageUrl: "/images/orange1.png",
  },
];

const StrategySlider = () => {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [slideEnter, setSlideEnter] = useState(true);

  const handlePrev = () => {
    setRotation((prev) => prev - 72);
    setSlideEnter(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setSlideEnter(true);
      setRotation((prev) => prev + 72);
    }, 400);
  };

  const handleNext = () => {
    setRotation((prev) => prev + 72);
    setSlideEnter(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setSlideEnter(true);
      setRotation((prev) => prev - 72);
    }, 400);
  };

  const currentSlide = slides[index];

  return (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-6 py-20 bg-cover bg-center">
      <div className="relative flex-shrink-0 w-full lg:w-[450px] h-[450px] flex items-center justify-center mx-auto lg:mx-0">
        <Image
          src="/images/rotate.png"
          alt="Rotate Wheel"
          width={450}
          height={450}
          className="rounded-full transition-transform duration-700 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <button
          onClick={handlePrev}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-transparent border border-white rounded-full p-3 shadow-md transition"
        >
          <img src="/images/Frame.svg" alt="Prev" className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-transparent border border-white rounded-full p-3 shadow-md transition"
        >
          <img src="/images/Frame1.svg" alt="Next" className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[600px] flex-shrink-0 space-y-6">
        <div
          className={`w-full h-[350px] flex-shrink-0 transition-transform duration-500 ${
            slideEnter
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <Image
            src={currentSlide.imageUrl}
            alt="Slide Image"
            width={600}
            height={350}
            className="rounded-xl shadow-lg object-contain w-full h-full"
          />
        </div>

        <div
          className={`w-full flex-shrink-0 transition-transform duration-500 ${
            slideEnter
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-red-800 text-center lg:text-left">
            {currentSlide.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StrategySlider;
