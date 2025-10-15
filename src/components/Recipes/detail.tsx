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

  const thirdCustomFieldValue = post?.customFieldsData?.[2]?.value ?? "empty";
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
    <div className="w-full max-w-[1400px] mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start font-sans">
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
          {post.title}
        </h1>
        <p
          className="text-gray-700 mb-6 py-5 text-base sm:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></p>
        {pdfAttachment.length > 0 && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-base font-medium transition-transform hover:-translate-y-1"
          >
            Жор татах [PDF] <DownloadIcon className="w-5 h-5" />
          </button>
        )}
        <div className="mt-6 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-gray-900 font-medium text-lg sm:text-xl leading-snug">
            Санал болгох зөвлөмж, мэдээлэл
          </h3>
          <p className="py-5 text-gray-700 text-base sm:text-lg leading-relaxed">
            {thirdCustomFieldValue ?? "No data for third custom field"}
          </p>
        </div>
      </div>
      <div>
        {images.length > 0 ? (
          <ImageCarousel images={images} />
        ) : (
          <p className="text-gray-400 text-center py-8 text-lg">No image</p>
        )}
      </div>
      <div className="bg-gray-300 h-px w-full col-span-full mt-6"></div>
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
        <Instructions postId={props.postId} />
        <IngredientList />
      </div>
    </div>
  );
};

export default Detail;
