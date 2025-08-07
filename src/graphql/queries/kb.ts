import { OperationVariables, useQuery } from "@apollo/client";
import queries from "./cms/queries";
import { ICmsCategory, ICmsPost, ICmsTag } from "../types/cms.types";

export const useCmsPosts = (variables?: OperationVariables) => {
  const { data: cmsPostsData, loading } = useQuery(queries.cmsPosts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      sortField: "created-desc",
      perPage: 200,
      ...variables,
    },
    fetchPolicy: "no-cache",
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
