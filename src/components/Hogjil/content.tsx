"use client";

import React, { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "ЯМАГТ ОРШИХ ӨВ СОЁЛ",
    circle: "/images/Circle1.png",
    desc: "Монгол үндэстний гайхамшигт өв соёлыг ямагт амьд байлгаж, хойч үедээ өвлүүлэн үлдээхэд АПУ ХК өөрийн бизнесийн практик, хамтын ажиллагаа, нөөц боломжоо бүрэн ашиглана.",
    corner: "/images/Corner1.png",
  },
  {
    title: "БАЙГАЛЬ ОРЧИН ДАХЬ УЛ МӨР",
    circle: "/images/circle2.png",
    desc: "Эх дэлхий, байгаль орчинд үлдээж буй ул мөрөө багасгахын тулд сэтгэлгээний хэвшмэл хязгаарыг давж, сэтгэл зүтгэл гарган, өвөг дээдсийнхээ хадгалан үлдээсэн байгаль экологийн тэнцвэрийг идэвхтэй хамгаална",
    corner: "/images/Corner2.png",
  },
  {
    title: "ОРОЛЦОГЧ ТАЛУУД ДАХЬ НӨЛӨӨЛӨЛ",
    circle: "/images/circle3.png",
    desc: "Хамт олон, бусад гол оролцогч талууд маань хөгжиж дэвших боломж бүхий Монгол гэр бүлийн үнэт зүйлд нийцүүлэн ажлын орчныг хөгжүүлснээрээ манлайлагч ажил олгогч болно.",
    corner: "/images/Corner3.png",
  },
  {
    title: "ХАРИУЦЛАГАТАЙ ХЭРЭГЛЭЭ",
    circle: "/images/circle4.png",
    desc: "Өдөр тутмын амьдрал болон хэрэглээнд эрүүл сонголтуудыг сэдэлжүүлж, боломжийг нэмснээр Монгол мөн чанар шингэсэн зохистой амьдралын хэв маягийг дэвжээнэ.",
    corner: "/images/Corner4.png",
  },
  {
    title: "ИЛ ТОД БАЙДАЛ, ЗАСАГЛАЛ",
    circle: "/images/circle5.png",
    desc: "Монголын нээлттэй хувьцаат компаниудын дунд байгаль орчин, нийгэм, засаглалын нөлөөллөөрөө жишиг байгууллага байна. ",
    corner: "/images/Corner5.png",
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
    <div className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-6 gap-16">
      <div className="relative w-[500px] h-[500px] flex-shrink-0 flex items-center justify-center">
        <Image
          src={currentSlide.circle}
          alt="Rotate Wheel"
          width={500}
          height={500}
          className="rounded-full transition-transform duration-700 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <button
          onClick={handlePrev}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-transparent border border-white rounded-full p-3 shadow-md transition hover:bg-white/20"
        >
          <img src="/images/Frame.svg" alt="Prev" className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-transparent border border-white rounded-full p-3 shadow-md transition hover:bg-white/20"
        >
          <img src="/images/Frame1.svg" alt="Next" className="w-6 h-6" />
        </button>
      </div>
      <div className="relative flex flex-col justify-end items-start w-full lg:w-[600px] flex-shrink-0">
        <div
          className={`relative w-[400px] md:w-[800px] h-[400px] md:h-[600px] flex-shrink-0 overflow-hidden rounded-xl transition-all duration-700 ${
            slideEnter
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Image
            src={currentSlide.corner}
            alt="Corner Image"
            fill
            className="object-fill scale-110"
          />
        </div>
        <h2
          className={`mt-6 text-3xl lg:text-4xl font-normal md:w-[750px] w-full text-white leading-snug transition-all duration-700 ${
            slideEnter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {currentSlide.title}
        </h2>
        <h4
          className={`mt-6 text-xl lg:text-xl md:w-[700px] w-full text-white leading-snug transition-all duration-700 ${
            slideEnter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {currentSlide.desc}
        </h4>
      </div>
    </div>
  );
};

export default StrategySlider;
