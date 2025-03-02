import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
