"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { useState } from "react";

const Brand = ({ post }: { post: ICmsPost }) => {
  const textList = [
    { name: "Цэвэр сүү", image: "/images/tsever-suu.png" },
    {
      name: "Хонин нуга",
      image:
        "https://www.apudairy.mn/wp-content/uploads/2023/08/product-poster-copy.webp",
    },
    {
      name: "Про+",
      image:
        "https://www.apudairy.mn/wp-content/uploads/2023/10/b-1024x1024.png",
    },
    { name: "Фрутта", image: "/images/prutta.jpg" },
    { name: "Булгар Йогурт", image: "/images/bulgar.jpg" },
    { name: "Ийли", image: "/images/iili.png" },
    { name: "Эрүүл сүү", image: "/images/eruul.png" },
    { name: "Сайн", image: "/images/sain.png" },
    { name: "Дээж", image: "/images/deej.jpg" },
  ];

  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-16 md:pt-28 px-4">
      <div className="w-full max-w-4xl text-center mb-20">
        <img
          src="/images/Group.svg"
          alt="brand image"
          className="mx-auto mb-8"
        />
        <div
          className="text-[#353535] text-[48px] md:text-5xl font-medium leading-normal"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="fixed inset-0 transition-opacity duration-700 ease-in-out -z-10"
          style={{
            backgroundImage: hoverImage ? `url(${hoverImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: hoverImage ? 1 : 0,
          }}
        />
        <div className="relative z-10 w-full h-[80vh] overflow-y-auto flex flex-col items-center">
          {textList.map((item, index) => (
            <span
              key={index}
              className={`font-mogul cursor-none 
                         text-[172px] font-bold leading-none 
                         text-center transition-colors duration-300 
                         ${
                           hoverIndex === index
                             ? "text-white"
                             : hoverIndex !== null
                             ? "text-gray-400"
                             : "text-[#131313]"
                         }`}
              onMouseEnter={() => {
                setHoverImage(item.image);
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverImage(null);
                setHoverIndex(null);
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
