import Gallery from "@/src/components/gallery/gallery";
import NutritionalHighlights from "@/src/components/productDetail/detail";
import { getProductDetail } from "@/src/graphql/queries/product";
import { IAttachment } from "@/src/types";
import React from "react";
import SizeSelector from "@/src/components/productDetail/hemjee";
import BarcodeDescriptionToggle from "@/src/components/productDetail/barCodedescription";
import Nairlaga from "@/src/components/Nairlaga/page";
import LongLine from "@/src/components/Nairlaga/longline";
import RecommendedProducts from "@/src/components/recommended-products/recommended-products";
import SideImage from "@/src/components/ProductSideImage/page";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { product } = await getProductDetail({
    variables: { _id: slug },
  });

  const { attachment, description, name, barcodeDescription } = product || {};

  return {
    title: name,
    description: description || "",
    barcodeDescription: barcodeDescription || "",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: attachment?.url
      ? {
          images: [
            {
              url: attachment?.url,
              width: 400,
              height: 400,
              alt: name,
            },
          ],
        }
      : null,
  };
}

const Product = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { product } = await getProductDetail({
    variables: { _id: slug },
  });

  const { attachment, attachmentMore, description, barcodeDescription, name } =
    product;
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

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 py-10 max-w-[1500px] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:mt-28 lg:mt-28 mt-10">
          <div className="flex gap-2 flex-wrap">
            {[
              t("immunity"),
              t("organic"),
              t("vegan"),
              t("weight_loss"),
              t("vitamin"),
            ].map((badge) => (
              <span
                key={badge}
                className="bg-white border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-800"
              >
                {badge}
              </span>
            ))}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-red-600">{name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-red-500 text-xl">★★★★★</div>
              <span className="text-sm text-red-500">458 {t("Comment")}</span>
            </div>
          </div>
          <div>
            <p
              className="text-gray-700 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description || "" }}
            ></p>
          </div>
          <SideImage />
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
        <div className="w-full lg:w-1/2">
          <Gallery attachments={attachments} />
        </div>
      </div>
      <LongLine />
      <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1450px] px-4 md:mt-10">
        <div className="w-full">
          <Nairlaga />
        </div>
        <RecommendedProducts />
      </div>
    </>
  );
};

export default Product;
