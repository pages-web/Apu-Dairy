"use client";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import React from "react";

const cards = [
  {
    bg: "bg-yellow-400",
    rotate: "-rotate-5",
    translateX: "-translate-x-100",
    translateY: "-translate-y-16",
    img: "/images/Vector@2x.png",
    textColor: "text-gray-800",
  },
  {
    bg: "bg-red-500",
    rotate: "-rotate-5",
    translateX: "-translate-x-70",
    translateY: "",
    img: "/images/red.svg",
    textColor: "text-white",
  },
  {
    bg: "bg-blue-600",
    rotate: "",
    translateX: "-translate-x-5",
    translateY: "",
    img: "/images/blue.png",
    textColor: "text-white",
    zIndex: "z-10",
  },
  {
    bg: "bg-red-500",
    rotate: "rotate-6",
    translateX: "translate-x-70",
    translateY: "",
    img: "/images/red.svg",
    textColor: "text-white",
  },
  {
    bg: "bg-green-500",
    rotate: "rotate-12",
    translateX: "translate-x-100",
    translateY: "-translate-y-10",
    img: "/images/green.png",
    textColor: "text-white",
    zIndex: "z-20",
  },
];

const Item = () => {
  const tagIds = [
    "s6DBTN9aBYvuTPvfCTMRd", // red card
    "wqlbGxAHIBH0WFq5PJsF9", // blue card
    "04D5cBojsYfI3UCMl21Jn", // yellow card
    "Ki3h0j7LGclf27wudzRQK", // red 2 card
    "69iXgS7Fagi0rmjMmJTuF", // green card
  ];
  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    language: locale,
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible min-h-[30rem] p-32">
      {cards.map((card, idx) => {
        const post = cmsPosts?.[idx];

        return (
          <div
            key={idx}
            className={`
              absolute w-64 h-96 rounded-2xl shadow-lg p-6
              ${card.bg} ${card.textColor}
              transform
              ${card.rotate} ${card.translateX} ${card.translateY}
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:z-30 w-80
              overflow-visible
              ${card.zIndex ? card.zIndex : ""}
              flex flex-col justify-end
            `}
          >
            <div className="absolute top-6 left-0 right-0 flex justify-center">
              <img
                src={card.img}
                alt={post?.title || "card"}
                className="w-32 h-32 object-contain"
                draggable={false}
              />
            </div>
            <div className="mt-auto text-center">
              <div
                className="text-sm space-y-3"
                dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
