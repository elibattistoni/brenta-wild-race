import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// mantine core styles
import "@mantine/core/styles.css";
// import styles with custom css reset
import "./global-styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
