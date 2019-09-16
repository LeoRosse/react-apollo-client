import React from "react";
import List from "./components/List";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="switch-routes">
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/create" component={Form} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </>
  );
};

export default App;
