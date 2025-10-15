import React from "react";
import { getProductDetail } from "@/src/graphql/queries/product";
import { IAttachment } from "@/src/types";
import SizeSelector from "@/src/components/productDetail/hemjee";
import NutritionalHighlights from "@/src/components/productDetail/detail";
import BarcodeDescriptionToggle from "@/src/components/productDetail/barCodedescription";
import Nairlaga from "@/src/components/Nairlaga/page";
import LongLine from "@/src/components/Nairlaga/longline";
import RecommendedProducts from "@/src/components/recommended-products/recommended-products";
import SideImage from "@/src/components/ProductSideImage/page";
import { getTranslations } from "next-intl/server";
import ParentChildDropdowns from "@/src/components/Product Category/page";

export const revalidate = 300;

const Product = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { product } = await getProductDetail({
    variables: { _id: slug },
  });

  const {
    attachment,
    attachmentMore,
    description,
    barcodeDescription,
    tagIds,
  } = product;
  const attachments = (attachmentMore || []).concat([
    attachment as IAttachment,
  ]);

  const sampleItems = [
    { label: "Lowfat", value: "", circle: "LACTOSE\nFREE" },
    { label: "Protein", value: "20g", circle: "HIGH\nPROTEIN" },
    { label: "Calories", value: "140", circle: "LOW\nCAL" },
    { label: "B12", value: "70% DV", circle: "VITAMIN\nB12" },
  ];

  const t = await getTranslations("Detail");

  const selectedTagIds = (tagIds || []).map((tag) => tag);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 py-10 max-w-[1500px] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-5">
          <ParentChildDropdowns selectedTagIds={selectedTagIds} />
          <div>
            <p
              className="text-gray-700 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description || "" }}
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Хэмжээ</p>
            <SizeSelector />
          </div>
          <div>
            <NutritionalHighlights items={sampleItems} />
            <LongLine />
            <BarcodeDescriptionToggle
              barcodeDescription={barcodeDescription || ""}
            />
            <LongLine />
          </div>
        </div>
        <SideImage attachments={attachments} />
      </div>
      <LongLine />
      <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[1380px] px-4 md:mt-10">
        <div className="w-full">
          <Nairlaga />
        </div>
        <RecommendedProducts />
      </div>
    </>
  );
};

export default Product;
