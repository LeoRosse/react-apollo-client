import gql from "graphql-tag";

export const USERS_QUERY = gql`
  {
    users {
      name
      surname
      email
    }
  }
`;
