import { gql } from "@apollo/client";

export const CONTACT_FORM = gql`
  query contact(
    $productIds: [String]
    $customerId: String
    $page: Int
    $perPage: Int
  ) {
    contact(
      productIds: $productIds
      customerId: $customerId
      page: $page
      perPage: $perPage
    ) {
      _id
      productId
      customerId
      review
      description
      info
    }
  }
`;

const queries = {
  CONTACT_FORM,
};

export default queries;
