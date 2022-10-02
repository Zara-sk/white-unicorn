import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createGlobalStyle } from "styled-components";

import store from "@store";

import AuthApp from "./Auth";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-app-region: no-drag;
  color: white;
}
body {
  margin: 0;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Global />
    <AuthApp />
  </Provider>
);
