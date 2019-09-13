import React from "react";
import { Query, Mutation, QueryResult, MutationFunction } from "react-apollo";
import gql from "graphql-tag";

import "./App.css";

import { User } from "./@types/user";

const USERS_QUERY = gql`
  {
    users {
      name
      surname
      email
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $surname: String, $email: String!) {
    createUser(user: { name: $name, surname: $surname, email: $email })
  }
`;

const initialState = {
  name: "",
  surname: "",
  email: ""
};

const App: React.FC = () => {
  const [user, setUser] = React.useState(initialState);
  const { name, surname, email } = user;
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };

  return (
    <div className="App">
      <div>
        <div>
          <input
            value={name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={surname}
            name="surname"
            onChange={handleChange}
            type="text"
            placeholder="Surname"
          />
          <input
            value={email}
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <Mutation mutation={CREATE_USER_MUTATION} variables={{ ...user }}>
          {(createUser: MutationFunction) => (
            <button onClick={() => createUser()}>Submit</button>
          )}
        </Mutation>
      </div>
      <Query query={USERS_QUERY}>
        {({ loading, error, data }: QueryResult) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const usersToRender = data.users;

          return (
            <div>
              {usersToRender.map((user: User, index: number) => (
                <div key={index}>
                  {user.name} {user.surname} {user.email}
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default App;
