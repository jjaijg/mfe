import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="*" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
