import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="*" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
