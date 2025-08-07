import { gql } from "@apollo/client";

const SERVICE_FRAGMENT = gql`
  fragment ServiceFragment on Service {
    _id
    name
    description
    image {
      url
      altText
    }
  }
`;
const queries = {
  SERVICE_FRAGMENT,
};
export default queries;
