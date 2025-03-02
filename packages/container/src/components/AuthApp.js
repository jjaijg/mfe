import React, { useEffect, useRef } from "react";
import { mount } from "auth";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathName }) => {
          const { pathname } = history.location;
          if (pathname !== nextPathName) history.push(nextPathName);
        },
        onSignIn,
      });

      history.listen((l) => {
        onParentNavigate(l);
      });
    }
  }, []);

  return <div ref={ref} />;
};
