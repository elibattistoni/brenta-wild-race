import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// self-hosted Inter (only the weights the theme uses), instead of Google Fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
// mantine core styles
import "@mantine/core/styles.css";
// import styles with custom css reset
import "./global-styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
