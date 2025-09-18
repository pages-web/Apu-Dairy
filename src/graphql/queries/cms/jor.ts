import { gql } from "@apollo/client";

const CmsPosts = gql`
  query PostList(
    $clientPortalId: String!
    $type: String
    $featured: Boolean
    $categoryIds: [String]
    $searchValue: String
    $status: PostStatus
    $page: Int
    $perPage: Int
    $tagIds: [String]
    $sortField: String
    $sortDirection: String
    $language: String
  ) {
    cmsPostList(
      clientPortalId: $clientPortalId
      featured: $featured
      type: $type
      categoryIds: $categoryIds
      searchValue: $searchValue
      status: $status
      page: $page
      perPage: $perPage
      tagIds: $tagIds
      sortField: $sortField
      sortDirection: $sortDirection
      language: $language
    ) {
      currentPage
      totalCount
      totalPages
      posts {
        _id
        type
        customPostType {
          _id
          code
          label
        }
        categoryIds
        categories {
          _id
          name
        }
        author {
          ... on User {
            _id
            username
            email
            details {
              fullName
              shortName
              avatar
              firstName
              lastName
              middleName
            }
          }
          ... on ClientPortalUser {
            _id
            fullName
            firstName
            lastName
            email
            username
            customer {
              avatar
            }
          }
        }
        featured
        status
        tagIds
        createdAt
        tags {
          _id
          name
        }
        thumbnail {
          name
          url
        }
        images {
          url
          name
        }
        title
        content
        slug
        excerpt
        customFieldsData
        customFieldsMap
      }
    }
  }
`;

const queries1 = {
  CmsPosts,
};
export default queries1;
