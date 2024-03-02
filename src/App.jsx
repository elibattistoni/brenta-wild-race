import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routerProvider from "./routerProvider";
import mantineUItheme from "./mantineUItheme";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider theme={mantineUItheme}>
      <RouterProvider router={routerProvider} />
    </MantineProvider>
  );
}

export default App;
