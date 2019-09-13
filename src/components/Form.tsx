import React from "react";
import { Mutation, MutationFunction } from "react-apollo";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";

import { CREATE_USER_MUTATION } from "../constants/mutation";

const initialState = {
  name: "",
  surname: "",
  email: ""
};

interface FormProps extends RouteComponentProps<any> {}

const _Form: React.FC<FormProps> = ({ history }) => {
  const [user, setUser] = React.useState(initialState);
  const { name, surname, email } = user;
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };

  return (
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
      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={{ ...user }}
        onCompleted={() => history.push("/")}
      >
        {(createUser: MutationFunction) => (
          <button onClick={() => createUser()}>Submit</button>
        )}
      </Mutation>
    </div>
  );
};

export const Form = withRouter(_Form);
