import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "@/routes";
import "@/styles/global.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <div id="app">
    <Routes />
  </div>
);
