import React, { useEffect, useRef } from "react";
import { mount } from "marketing";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
