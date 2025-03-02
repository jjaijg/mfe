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

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signup" component={Signup} />
          <Route path="/auth/signin" component={Signin} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
