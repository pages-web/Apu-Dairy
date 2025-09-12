import { cn } from "@/src/lib/utils/utils";
import { IProduct } from "@/src/types/product.type";
import { Carousel, CarouselContent, CarouselItem } from "../heading/carousel";
import ProductCard from "@/src/app/[locale]/category/product-card";
import { getProducts } from "@/src/graphql/queries/product";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const RecommendedProducts = async ({
  categoryId,
  productId,
}: {
  categoryId?: string;
  productId?: string;
}) => {
  const { products } = await getProducts({
    variables: {
      categoryId,
      perPage: 12,
      isKiosk: true,
      groupedSimilarity: "config",
    },
  });
  const exceptCurrent = products.filter(
    (product: any) => product._id !== productId
  );

  if (!exceptCurrent.length) return null;

  const t = await getTranslations("RecommendProduct");

  return (
    <>
      <div>
        <h2 className="text-black font-medium text-[32px] md:ml-5 font-sans leading-normal mb-10 w-full max-w-[1000px]">
          {t("RecommendedProducts")}
        </h2>
      </div>

      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="gap-3">
          {exceptCurrent.map((product: IProduct) => (
            <CarouselItem
              className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/4 2xl:basis-1/5"
              key={product._id}
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default RecommendedProducts;
