import { createApp } from "vue";

import Dashboard from "./components/Dashboard.vue";
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-dashboard-root"); //vue adashboar
  if (el) mount(el);
}

export { mount };
