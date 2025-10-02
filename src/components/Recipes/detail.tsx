"use client";

import React from "react";
import { getCmsPostDetail } from "@/src/graphql/queries/news";
import { DownloadIcon } from "lucide-react";
import ImageCarousel from "./detailImage";
import Instructions from "../Instructions/page";
import IngredientList from "../Instructions/sidePage";

type Props = {
  postId: string;
};

const Detail = (props: Props) => {
  const { post, loading } = getCmsPostDetail({ id: props.postId });

  if (loading) {
    return <div>Wait a minute</div>;
  }

  const thirdCustomFieldValue = post?.customFieldsData?.[2]?.value ?? null;
  const images = post.images || [];

  const pdfAttachment = post?.pdfAttachment?.pages || [];
  const handleDownload = async () => {
    if (pdfAttachment.length === 0) return;
    const res = await fetch(pdfAttachment[0].url);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = pdfAttachment[0].name || "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm">
            Breakfast
          </span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
            Vegan
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          {post.title}
        </h1>
        <p
          className="text-gray-600 mb-6 py-5 text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></p>
        {pdfAttachment.length > 0 && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm sm:text-base mb-6 cursor-none"
          >
            Жор татах [PDF] <DownloadIcon className="w-4 h-4" />
          </button>
        )}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="border rounded-lg px-3 py-2 text-center w-1/3 sm:w-auto">
            <p className="text-xs sm:text-sm text-gray-500">Prep Time</p>
            <p className="font-medium text-sm sm:text-base">5 mins</p>
          </div>
          <div className="border rounded-lg px-3 py-2 text-center w-1/3 sm:w-auto">
            <p className="text-xs sm:text-sm text-gray-500">Cook Time</p>
            <p className="font-medium text-sm sm:text-base">20 mins</p>
          </div>
          <div className="border rounded-lg px-3 py-2 text-center w-1/3 sm:w-auto">
            <p className="text-xs sm:text-sm text-gray-500">Level</p>
            <p className="font-medium text-sm sm:text-base">{post.excerpt}</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-gray-900 font-sans text-base sm:text-lg font-medium leading-normal">
            Санал болгох зөвлөмж, мэдээлэл
          </h3>
          <p className="py-5 gap-2 text-sm sm:text-base">
            {thirdCustomFieldValue ?? "No data for third custom field"}
          </p>
        </div>
      </div>
      <div>
        {images.length > 0 ? (
          <ImageCarousel images={images} />
        ) : (
          <p className="text-gray-500 text-center py-8">No image</p>
        )}
      </div>
      <div className="bg-gray-200 h-px w-full col-span-full"></div>
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <Instructions postId={props.postId} />
        <IngredientList />
      </div>
    </div>
  );
};

export default Detail;
