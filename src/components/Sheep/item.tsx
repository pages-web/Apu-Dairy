"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import AllProductsPage from "../Category/product";

const ZuragSheep = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="bg-white text-gray-800">
      {post.thumbnail?.url && (
        <div className="relative w-full h-72 sm:h-[400px] overflow-hidden rounded-b-3xl">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            sizes="100vw"
            quality={100}
            className="object-top"
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
          <h2 className="text-xl font-semibold mb-3">APU Dairy</h2>
          <p className="text-sm mb-4">
            Turn free time into growth time with engaging activities that spark
            curiosity and confidence.
          </p>
          <ul className="text-sm list-disc list-inside space-y-1 mb-4">
            <li>100% Монгол сүүгээр үйлдвэрлэсэн</li>
            <li>HACCP, ISO 22000:2018</li>
            <li>Байгальд ээлтэй савлагаа</li>
          </ul>
          <div className="flex space-x-3">
            <button className="w-10 h-10 flex justify-center items-center border border-red-500 rounded-full text-red-500 hover:bg-red-100">
              <FaFacebookF />
            </button>
            <button className="w-10 h-10 flex justify-center items-center border border-red-500 rounded-full text-red-500 hover:bg-red-100">
              <FaYoutube />
            </button>
            <button className="w-10 h-10 flex justify-center items-center border border-red-500 rounded-full text-red-500 hover:bg-red-100">
              <FaInstagram />
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-start col-span-1">
          <div className="w-px h-full bg-gray-300" />
        </div>
        <div className="col-span-12 md:col-span-7 justify-start">
          <p className="text-sm mb-3 font-normal font-sf-pro-rounded">
            Turn free time into growth time with engaging activities that spark
            curiosity and confidence. Turn free time into growth time with
            engaging activities that spark curiosity and confidence.
          </p>

          <ul className="text-sm list-disc list-inside space-y-1 mb-4">
            <li>
              Turn free time into growth time with engaging activities that
              spark curiosity and confidence.
            </li>
            <li>
              Turn free time into growth time with engaging activities that
              spark curiosity and confidence.
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 justify-between">
            <span className="flex items-center gap-2 px-3 py-1 border rounded-full text-sm">
              <img src="/images/solid.svg" alt="solid" className="w-4 h-4" />
              12 Prep time
            </span>
            <span className="flex items-center gap-2 px-3 py-1 border rounded-full text-sm">
              <img src="/images/mini.svg" alt="mini" className="w-4 h-4" />
              Prep Time
            </span>
            <span className="flex items-center gap-2 px-3 py-1 border rounded-full text-sm">
              <img src="/images/tropy.svg" alt="trophy" className="w-4 h-4" />
              Prep Time
            </span>
          </div>
        </div>
      </div>
      <AllProductsPage />
    </div>
  );
};

export default ZuragSheep;
