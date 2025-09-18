import { gql } from "@apollo/client";

const cmsPosts = gql`
  query CmsPosts(
    $clientPortalId: String!
    $type: String
    $featured: Boolean
    $categoryIds: [String]
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
      type: $type
      featured: $featured
      categoryIds: $categoryIds
      status: $status
      page: $page
      perPage: $perPage
      tagIds: $tagIds
      sortField: $sortField
      sortDirection: $sortDirection
      language: $language
    ) {
      posts {
        _id
        title
        slug
        content
        customFieldsData
        videoUrl
        categoryIds
        thumbnail {
          url
        }
        images {
          url
          type
          name
          __typename
        }
      }
    }
  }
`;

const cmsCategories = gql`
  query CmsCategories(
    $clientPortalId: String!
    $status: CategoryStatus
    $page: Int
    $perPage: Int
    $sortField: String
    $sortDirection: String
  ) {
    cmsCategories(
      clientPortalId: $clientPortalId
      status: $status
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      _id
      clientPortalId
      createdAt
      description
      name
      slug
      status
      customFieldsData
      parent {
        _id
        name
        slug
        status
      }
      parentId
    }
  }
`;

const cmsTags = gql`
  query CmsTags(
    $clientPortalId: String!
    $page: Int
    $perPage: Int
    $sortField: String
    $sortDirection: String
  ) {
    cmsTags(
      clientPortalId: $clientPortalId
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      _id
      clientPortalId
      name
      slug
      colorCode
      createdAt
      updatedAt
    }
  }
`;

const cmsPostDetail = gql`
  query Post($id: String, $language: String) {
    cmsPost(_id: $id, language: $language) {
      _id
      type
      clientPortalId
      title
      slug
      content
      excerpt
      categoryIds
      status
      tagIds
      authorId
      featured
      featuredDate
      scheduledDate
      autoArchiveDate
      reactions
      reactionCounts
      thumbnail {
        url
        type
        name
      }
      images {
        url
        type
        name
      }
      video {
        url
        type
        name
      }
      audio {
        url
        type
        name
      }
      documents {
        url
        type
        name
      }
      attachments {
        url
        type
        name
      }
      pdfAttachment {
        pages {
          url
          name
          type
          size
          duration
        }
      }
      videoUrl
      createdAt
      updatedAt
      authorKind
      author {
        ... on User {
          _id
          username
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
          username
          customer {
            avatar
          }
        }
      }
      categories {
        _id
        name
        slug
      }
      tags {
        _id
        name
      }
      customFieldsData
      customFieldsMap
    }
  }
`;

const queries = { cmsPosts, cmsCategories, cmsTags, cmsPostDetail };

export default queries;
