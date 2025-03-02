import React, { useEffect, useRef } from "react";
import { mount } from "marketing";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: ({ pathname: nextPathName }) => {
          const { pathname } = history.location;
          if (pathname !== nextPathName) history.push(nextPathName);
        },
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={ref} />;
};
