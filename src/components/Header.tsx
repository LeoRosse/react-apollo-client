import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants/auth";
import { RouteComponentProps } from "react-router-dom";

interface HeaderProps extends RouteComponentProps<any> {}

const _Header: React.FC<HeaderProps> = ({ history }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex pa1 justify-between nowrap">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Users List</div>
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              history.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login" className="ml1 no-underline black">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export const Header = withRouter(_Header);
