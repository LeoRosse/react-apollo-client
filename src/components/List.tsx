import React from "react";
import { Query, QueryResult } from "react-apollo";
import { USERS_QUERY } from "../constants/query";

import { User } from "../@types/user";

const List: React.FC = () => {
  return (
    <Query query={USERS_QUERY}>
      {({ loading, error, data }: QueryResult) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const usersToRender = data.users;

        return (
          <div>
            {usersToRender.map((user: User, index: number) => (
              <div className="list-item" key={index}>
                {user.name} {user.surname} {user.email}
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default List;
