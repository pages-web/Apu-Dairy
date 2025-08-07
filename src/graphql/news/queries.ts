import { gql } from "@apollo/client";

const newsDetail = gql`
  query GetNewsDetail($id: String!) {
    cmsPost(_id: $id) {
      _id
      title
      content
      thumbnail {
        url
      }
      images {
        url
        type
        name
        __typename
      }
      attachments {
        url
        type
        name
      }
      categories {
        _id
        name
        slug
      }
      tags {
        _id
        name
        __typename
      }
      customFieldsData
      __typename
    }
  }
`;

const queries = { newsDetail };
export default queries;
