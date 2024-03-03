import { RouterProvider } from "react-router-dom";
import routerProvider from "./routerProvider";
import { MantineProvider } from "@mantine/core";
import mantineUItheme from "./mantineUItheme";

function App() {
  return (
    <MantineProvider theme={mantineUItheme} forceColorScheme="dark">
      <RouterProvider router={routerProvider} />
    </MantineProvider>
  );
}

export default App;
