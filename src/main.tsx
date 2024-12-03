import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { DnDProvider } from "./lib/dnd-context";
import { ReactFlowProvider } from "@xyflow/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <DnDProvider>
        <App />
      </DnDProvider>
    </ReactFlowProvider>
  </React.StrictMode>,
);
