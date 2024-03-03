import HomePage from "./pages/HomePage";
import TrailHomePage from "./pages/trail/TrailHomePage";
import EditionsHomePage from "./pages/editions/EditionsHomePage";
import SponsorsPage from "./pages/SponsorsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./components/layout/RootLayout";
import TrailPathVariantsPage from "./pages/trail/TrailPathVariantsPage";
import TrailPrizesPage from "./pages/trail/TrailPrizesPage";
import TrailProgramPage from "./pages/trail/TrailProgramPage";
import TrailRegistrationPage from "./pages/trail/TrailRegistrationPage";
import TrailRulesPage from "./pages/trail/TrailRulesPage";
import EditionsDetailsPage from "./pages/editions/EditionDetailsPage";

import { createBrowserRouter } from "react-router-dom";

const routeDefinitions = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/gara",
        children: [
          { index: true, element: <TrailHomePage /> },
          {
            path: "/gara/percorso-varianti",
            element: <TrailPathVariantsPage />,
          },
          { path: "/gara/programma", element: <TrailProgramPage /> },
          { path: "/gara/regolamento", element: <TrailRulesPage /> },
          { path: "/gara/montepremi", element: <TrailPrizesPage /> },
          { path: "/gara/iscrizione", element: <TrailRegistrationPage /> },
        ],
      },
      { path: "/edizioni", element: <EditionsHomePage /> },
      { path: "/edizioni/:year", element: <EditionsDetailsPage /> },
      { path: "/sponsor", element: <SponsorsPage /> },
      { path: "/contatti", element: <AboutPage /> },
    ],
  },
];

const routerProvider = createBrowserRouter(routeDefinitions);

export default routerProvider;
