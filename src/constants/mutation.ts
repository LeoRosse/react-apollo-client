import gql from "graphql-tag";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $surname: String, $email: String!) {
    createUser(user: { name: $name, surname: $surname, email: $email })
  }
`;
