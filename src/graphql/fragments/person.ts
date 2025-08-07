import { gql } from "@apollo/client";

const PERSON_FRAGMENT = gql`
  fragment PersonFragment on Person {
    _id
    firstName
    lastName
    email
    avatar {
      url
    }
    phone
  }
`;
const queries = {
  PERSON_FRAGMENT,
};
export default queries;
