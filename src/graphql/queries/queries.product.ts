import { gql } from "@apollo/client";

const products = gql`
  query poscProducts(
    $type: String
    $categoryId: String
    $page: Int
    $perPage: Int
    $isKiosk: Boolean
    $groupedSimilarity: String
    $sortField: String
    $sortDirection: Int
    $ids: [String]
    $tag: String
  ) {
    poscProducts(
      categoryId: $categoryId
      type: $type
      page: $page
      perPage: $perPage
      isKiosk: $isKiosk
      groupedSimilarity: $groupedSimilarity
      sortField: $sortField
      sortDirection: $sortDirection
      ids: $ids
      tag: $tag
    ) {
      _id
      name
      unitPrice
      hasSimilarity
      tagIds
      tagIds
      attachment {
        url
      }
    }
  }
`;
const productDetail = gql`
  query ProductDetail($_id: String) {
    poscProductDetail(_id: $_id) {
      _id
      name
      description
      code
      type
      createdAt
      unitPrice
      remainder
      hasSimilarity
      category {
        order
        name
        _id
      }
      attachment {
        url
      }
      attachmentMore {
        url
      }
    }
  }
`;

const productsCount = gql`
  query productsCount(
    $categoryId: String
    $type: String
    $groupedSimilarity: String
    $isKiosk: Boolean
  ) {
    poscProductsTotalCount(
      categoryId: $categoryId
      type: $type
      groupedSimilarity: $groupedSimilarity
      isKiosk: $isKiosk
    )
  }
`;

const tagsQuery = gql`
  query tagsQuery(
    $type: String
    $tagIds: [String]
    $parentId: String
    $ids: [String]
    $excludeIds: Boolean
    $page: Int
    $perPage: Int
  ) {
    tags(
      type: $type
      tagIds: $tagIds
      parentId: $parentId
      ids: $ids
      excludeIds: $excludeIds
      page: $page
      perPage: $perPage
    ) {
      _id
      name
      type
      colorCode
      createdAt
      objectCount
      totalObjectCount
      parentId
      order
      relatedIds
      __typename
    }
  }
`;
const queries = {
  products,
  productsCount,
  productDetail,
  tagsQuery,
};
export default queries;
