import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToggleThemeProvider } from "./Context/ToggleTheme.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleThemeProvider>
      <App />
    </ToggleThemeProvider>
  </React.StrictMode>
);
