// src/index.js
// This is the entry point of the React app.
// It renders the App component into the root div.

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // global styles

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
