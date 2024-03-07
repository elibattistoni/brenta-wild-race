import { RouterProvider } from "react-router-dom";
import routerProvider from "./routerProvider";
import { MantineProvider } from "@mantine/core";
import mantineUItheme, { resolver } from "./mantineUItheme";

function App() {
  return (
    <MantineProvider
      theme={mantineUItheme}
      forceColorScheme="dark"
      cssVariablesResolver={resolver}
    >
      <RouterProvider router={routerProvider} />
    </MantineProvider>
  );
}

export default App;
