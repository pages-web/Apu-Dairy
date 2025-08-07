import { gql } from "@apollo/client";

const NEWS_LETTER = gql`
  query Newsletter {
    services {
      _id
      name
      description
      price
      image {
        url
        altText
      }
    }
  }
`;
const queries = {
  NEWS_LETTER,
};
export default queries;
