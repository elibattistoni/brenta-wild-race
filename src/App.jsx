import { RouterProvider } from "react-router-dom";
import routerProvider from "./routerProvider";
import mantineUItheme from "./mantineUItheme";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider theme={mantineUItheme} forceColorScheme="dark">
      <RouterProvider router={routerProvider} />
    </MantineProvider>
  );
}

export default App;
