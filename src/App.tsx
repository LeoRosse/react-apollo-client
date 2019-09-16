import React from "react";
import "./App.css";
import List from "./components/List";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/create" component={Form} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
