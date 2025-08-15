import React, { useState } from "react";
import Image from "next/image";

const images = [
  { text: "Нийт 40 сая долларын гэрээ...", imageUrl: "/images/green1.png" },
  {
    text: "Фермерийн сургалт, эрдэмлэг...",
    imageUrl: "/images/Marketing Campaign 1 1.png",
  },
  { text: "Монгол улсын итгэмжлэгдсэн...", imageUrl: "/images/yellow1.png" },
  { imageUrl: "/images/orange1.png" },
  { imageUrl: "/images/red1.png" },
];

const bgColors = [
  "bg-[rgb(52,128,64)]", // red
  "bg-[rgb(48,122,188)]", // orange
  "bg-[rgb(233,177,50)]", // yellow
  "bg-[rgb(220,109,37)]", // blue
  "bg-[rgb(238,50,57)]", // green
];

const StrategySlider = () => {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setRotation((prev) => prev - 75);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setRotation((prev) => prev + 75);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between gap-16 p-10 rounded-3xl max-w-screen w-full mx-auto h-[350px] ${
        bgColors[index % bgColors.length]
      }`}
    >
      <div className="relative w-60 h-60 flex-shrink-0">
        <div className="relative w-full h-full">
          <div
            className="transition-transform duration-500 relative"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            <Image
              src="/images/rotate.png"
              alt="Wheel"
              width={540}
              height={240}
              loading="lazy"
              className="rounded-full w-[600px] h-[240px]"
            />
          </div>
          <div className="absolute bottom-24 right-[-20px] -translate-y-1/2">
            <img
              src="/images/Polygon 1.svg"
              alt="Polygon"
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={handlePrev}
            className="bg-white/20 text-green-800 px-3 py-2 rounded-full shadow hover:bg-white/30 transition"
          >
            <img src="/images/Frame.svg" alt="zuun sum" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/20 text-green-800 px-3 py-2 rounded-full shadow hover:bg-white/30 transition"
          >
            <img src="/images/Frame1.svg" alt="baruun sum" />
          </button>
        </div>
      </div>
      <div className="w-full text-white">
        <h1 className="text-lg md:text-xs font-normald flex justify-start">
          RESILIENT LEGACY
        </h1>

        <div className="flex items-start gap-4 mt-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-24 h-20 flex flex-col justify-center items-center text-center">
            <img src="/images/tea.svg" alt="" />
            <p className="text-[12px] leading-[13.2px] font-semibold text-[#307ABD] text-center font-sf-pro-rounded">
              Хөрөнгө оруулалт
            </p>
          </div>
          <p className="text-[14px] leading-[15.4px] font-semibold text-white font-sfpro">
            Нийт 40 сая долларын гэрээг Азийн Хөгжлийн Банк (АХБ) болон Европын
            Сэргээн Босголт Хөгжлийн банк (ЕСБХБ)-тай байгуулав
          </p>
        </div>

        <div className="flex items-start gap-4 mt-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-24 h-20 flex flex-col justify-center items-center text-center">
            <img src="/images/tea.svg" alt="" />
            <p className="text-[12px] leading-[13.2px] font-semibold text-[#307ABD] text-center font-sf-pro-rounded">
              Сургалт хөтөлбөр
            </p>
          </div>
          <p className="text-[14px] leading-[15.4px] font-semibold text-white font-sfpro">
            “Фермерийн сургалт, өдөрлөг”, "Эрүүл малчин хөтөлбөр", "Харилцагч
            фермерүүдийн туршлага солилцох хөтөлбөр"-үүдийг амжилттай
            хэрэгжүүллээ
          </p>
        </div>

        <div className="flex items-start gap-4 mt-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-24 h-20 flex flex-col justify-center items-center text-center">
            <img src="/images/Group01.svg" alt="" />
            <p className="text-[12px] leading-[13.2px] font-semibold text-[#307ABD] text-center font-sf-pro-rounded">
              Бүтээгдэхүүн
            </p>
          </div>
          <p className="text-[14px] leading-[15.4px] font-semibold text-white font-sfpro">
            MONT-YAK брэндийн нийт дөрвөн бүтээгдэхүүн нь Монгол Улсын
            Итгэмжлэгдсэн байгууллагаас олгодог органик хүнсний олон улсын
            гэрчилгээг авав
          </p>
        </div>
      </div>
      <div className="max-w-xs w-full hidden md:block lg:block items-center justify-end space-x-4 px-4">
        <Image
          src={images[index].imageUrl}
          alt="Right Side"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default StrategySlider;
