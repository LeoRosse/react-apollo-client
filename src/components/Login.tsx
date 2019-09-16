import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants/auth";

const initialState = {
  email: "",
  password: "",
  name: ""
};

export const Login: React.FC = () => {
  const [user, setUser] = React.useState(initialState);
  const [switchForm, setSwitchForm] = React.useState(false);

  const { name, password, email } = user;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };

  const confirm = async () => {
    // ... you'll implement this 🔜
  };

  const saveUserData = (token: string) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
  return (
    <div>
      <h4 className="mv3">{!switchForm ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {switchForm && (
          <input
            value={name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={() => confirm()}>
          {!switchForm ? "login" : "create account"}
        </div>
        <div
          className="pointer button"
          onClick={() => setSwitchForm(!switchForm)}
        >
          {!switchForm
            ? "need to create an account?"
            : "already have an account?"}
        </div>
      </div>
    </div>
  );
};
