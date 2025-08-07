import { gql } from "@apollo/client";

const TEAM_INFO = gql`
  query TEAM_INFO {
    _id
    title
    name
    description
  }
`;
const queries = {
  TEAM_INFO,
};
export default queries;
