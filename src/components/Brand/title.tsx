"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

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
    { name: "Дээж", image: "/images/deej.png" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start pt-16 md:pt-28 px-4">
      <div>
        <img src="/images/Group.svg" alt="brand image" className="mb-8" />
      </div>

      <div
        className="max-w-4xl w-full text-center text-[#353535] font-sf-pro-rounded text-3xl md:text-5xl font-medium leading-normal mb-36"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div
        className="mt-12 md:mt-24 space-y-12 z-10 flex flex-col items-center w-full
          max-h-[600px] sm:max-h-[700px] md:max-h-[800px] overflow-y-auto 
          scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        style={{ paddingTop: "8px", paddingBottom: "8px" }}
      >
        {textList.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center 
  h-[150px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full px-4 group"
          >
            <span
              className="relative block w-full px-4 py-6 
    h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] 
    text-[10vw] sm:text-[8vw] md:text-[6vw] xl:text-[5vw] 
    tracking-wide whitespace-nowrap overflow-hidden 
    text-[#131313] text-center font-bold leading-none"
            >
              {item.name}
              <span
                className="absolute left-0 top-0 w-full opacity-0 
      group-hover:opacity-100 transition-opacity duration-500 
      bg-center bg-contain bg-no-repeat -z-10"
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "100%",
                }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
