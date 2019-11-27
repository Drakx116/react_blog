import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserList from "./Components/UserList/";
import Dashboard from "./Components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact={true} path={"/"}>
            <Dashboard />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
