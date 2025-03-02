import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { defaultHistory, onNavigate, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) history.push(nextPathName);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-marketing-root");
  if (el)
    mount(el, {
      defaultHistory: createBrowserHistory(), // when we are in isolation we are going to use browser history instead of memory history,
      //  so that we can see the route updates in the url bar
    });
}

export { mount };
