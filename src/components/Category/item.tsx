"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";
import AllProductsPage from "./product";
import { useParams } from "next/navigation";
import { useCmsPostsByCategory } from "@/src/graphql/queries/kb";
import { useEffect } from "react";
import ProductIcons from "../Product Icon/productIcon";

const Itemcategory = ({ post }: { post: ICmsPost }) => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const { posts: productPosts, refetch: refetchProduct } =
    useCmsPostsByCategory("productinfo", { language: currentLocale });
  const { posts: listPosts, refetch: refetchList } = useCmsPostsByCategory(
    "list",
    { language: currentLocale }
  );
  const { posts: Extra, refetch: refetchExtra } = useCmsPostsByCategory(
    "extra",
    { language: currentLocale }
  );

  useEffect(() => {
    refetchProduct();
    refetchList();
    refetchExtra();
  }, [currentLocale, refetchProduct, refetchList, refetchExtra]);
  return (
    <div className="bg-white text-gray-800 max-w-[1400px] mx-auto mt-2">
      {post.thumbnail?.url && (
        <div className="relative w-full h-64 sm:h-[400px] overflow-hidden rounded-b-3xl">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="relative w-full">
        <div
          className="
            w-[160px] h-[160px] rounded-full shadow-lg border
            mx-auto sm:ml-36 mt-4 sm:-mt-20
            bg-white z-10 relative overflow-hidden flex items-start
          "
        >
          <img
            src="/images/categoryAPU.jpg"
            alt="APU logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-screen-xl py-5 mx-4 sm:mx-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 justify-start">
          <div className="flex flex-col gap-2">
            {productPosts?.map((post) => (
              <div key={post._id}>
                <h3 className="mb-2 font-semibold text-xl">{post.title}</h3>
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></p>
              </div>
            ))}
          </div>

          <div>
            {listPosts.map((list) => (
              <div key={post._id}>
                <p
                  dangerouslySetInnerHTML={{ __html: list.content }}
                  className="mb-2"
                ></p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <ProductIcons />
          </div>
        </div>
        <div className="hidden md:flex justify-start col-span-1">
          <div className="w-px h-full bg-gray-300" />
        </div>
        <div className="col-span-12 md:col-span-7 justify-start">
          <div>
            {Extra.map((extra) => (
              <div key={extra._id}>
                <p className="mb-2">{extra.title}</p>
                <p
                  className="p-3"
                  dangerouslySetInnerHTML={{ __html: extra.content }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AllProductsPage />
    </div>
  );
};

export default Itemcategory;
