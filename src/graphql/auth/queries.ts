import { gql } from "@apollo/client";

const currentConfig = gql`
  query CurrentConfig {
    currentConfig {
      erxesAppToken
      paymentIds
      deliveryConfig
      name
      description
      pdomain
      isCheckRemainder
      branchId
      initialCategoryIds
      uiOptions {
        logo
        colors
      }
    }
  }
`;

const branchDetail = gql`
  query branchDetail($id: String!) {
    branchDetail(_id: $id) {
      _id
      title
      address
      phoneNumber
      links
      coordinate {
        longitude
        latitude
      }
      image {
        url
      }
    }
  }
`;

const queries = { currentConfig, branchDetail };

export default queries;
