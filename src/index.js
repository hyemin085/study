// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { createRoot } from "react-dom/client";
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
//
// function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log("rendered");
//   });
//
//   return <App tab="home" />;
// }
//
// const container = document.getElementById("app");
// const root = ReactDOM.createRoot(container);
// root.render(<AppWithCallbackAfterRender />);
import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
