import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.LOGIN}>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
