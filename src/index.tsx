import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Routes from "@/routes";
import "@/styles/global.css";
import store from "@/store/store";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <div id="app">
      <Routes />
    </div>
  </Provider>
);
