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
    <div className="mt-5">
      <div>
        <h2 className="text-black font-medium text-[32px] font-sans leading-normal mb-10">
          {t("RecommendedProducts")}
        </h2>
      </div>

      <Carousel opts={{ dragFree: true }}>
        <CarouselContent>
          {exceptCurrent.map((product: IProduct) => (
            <CarouselItem
              className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/4 2xl:basis-1/5"
              key={product._id}
            >
              <ProductCard
                {...product}
                className={cn(product.hasSimilarity && "pb-8")}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RecommendedProducts;
