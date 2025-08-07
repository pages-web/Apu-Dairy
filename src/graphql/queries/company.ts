import { gql } from "@apollo/client";

export const GET_COMPANY_INFO = gql`
  query GetCompanyInfo {
    company {
      name
      description
    }
  }
`;
