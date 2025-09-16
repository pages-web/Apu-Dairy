import { OperationVariables, useQuery } from "@apollo/client";
import queries from "./cms/queries";
import productQuery from "./product/productFilter";
import {
  ICmsCategory,
  ICmsPost,
  ICmsTag,
  IProductFilter,
} from "../types/cms.types";
import { headers } from "next/dist/client/components/headers";

export const useCmsPosts = (variables?: OperationVariables) => {
  const { data: cmsPostsData, loading } = useQuery(queries.cmsPosts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      sortField: "created-desc",
      perPage: 200,
      ...variables,
    },
    notifyOnNetworkStatusChange: true, // chuhal (orchuulga hiihed)
    fetchPolicy: "no-cache", // chuhal (orchuulga hiihed)
  });

  const cmsPosts: ICmsPost[] = cmsPostsData?.cmsPostList.posts || [];

  return { cmsPosts, loading };
};

export const useCmsCategories = (variables?: OperationVariables) => {
  const { data: cmsCategoriesData, loading } = useQuery(queries.cmsCategories, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      sortField: "created-desc",
      ...variables,
    },
  });

  const cmsCategories: ICmsCategory[] = cmsCategoriesData?.cmsCategories || [];

  return { cmsCategories, loading };
};

export const useCmsTags = (variables?: OperationVariables) => {
  const { data: cmsTagsData, loading } = useQuery(queries.cmsTags, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      sortField: "created-desc",
      ...variables,
    },
  });

  const cmsTags: ICmsTag[] = cmsTagsData?.cmsTags || [];

  return { cmsTags, loading };
};

export const useCmsPostDetail = (variables?: OperationVariables) => {
  const { data, loading } = useQuery(queries.cmsPostDetail, {
    variables: {
      ...variables,
    },
    fetchPolicy: "no-cache",
  });

  const cmsPostDetail: ICmsPost = data?.cmsPost;

  return { cmsPostDetail, loading };
};

export const useProductTag = (variables?: OperationVariables) => {
  const { data, loading } = useQuery(productQuery.productTag, {
    variables: {
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

  // зөвхөн tags буцаана
  const cmsPosts: IProductFilter[] =
    data?.tags?.map((tag: any) => ({
      id: tag._id,
      name: tag.name,
      parentId: tag.parentId,
      order: tag.order,
    })) || [];

  return { cmsPosts, loading };
};
