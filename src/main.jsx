import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BlockProvider } from "./context/BlockProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlockProvider>
      <App />
    </BlockProvider>
  </React.StrictMode>
);
