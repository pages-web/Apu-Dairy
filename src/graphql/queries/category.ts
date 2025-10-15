import { OperationVariables, useQuery } from "@apollo/client";
import productQuery from "./product/productFilter";
import { IProductFilter } from "../types/cms.types";

export const useCategoryTag = (variables?: OperationVariables) => {
  const { data, loading } = useQuery(productQuery.productTag, {
    variables: {
      parentId: "3nTE42k-EJJull_on7pBM",
      type: "core:product",
      page: 1,
      perPage: 20,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
    context: {
      headers: {
        "erxes-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    },
  });

  const cmsPosts: IProductFilter[] =
    data?.tags?.map((tag: any) => ({
      id: tag._id,
      name: tag.name,
      parentId: tag.parentId,
      order: tag.order,
    })) || [];

  return { cmsPosts, loading };
};
