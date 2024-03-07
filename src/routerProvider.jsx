import HomePage from "./pages/HomePage";
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
      // { index: true, element: <HomePage /> },
      { path: "/brenta-wild-race/", element: <HomePage /> },
      {
        path: "/brenta-wild-race/gara",
        children: [
          {
            path: "/brenta-wild-race/gara/percorso-varianti",
            element: <TrailPathVariantsPage />,
          },
          {
            path: "/brenta-wild-race/gara/programma",
            element: <TrailProgramPage />,
          },
          {
            path: "/brenta-wild-race/gara/regolamento",
            element: <TrailRulesPage />,
          },
          {
            path: "/brenta-wild-race/gara/montepremi",
            element: <TrailPrizesPage />,
          },
          {
            path: "/brenta-wild-race/gara/iscrizione",
            element: <TrailRegistrationPage />,
          },
        ],
      },
      { path: "/brenta-wild-race/edizioni", element: <EditionsHomePage /> },
      {
        path: "/brenta-wild-race/edizioni/:year",
        element: <EditionsDetailsPage />,
      },
      { path: "/brenta-wild-race/sponsor", element: <SponsorsPage /> },
      { path: "/brenta-wild-race/contatti", element: <AboutPage /> },
    ],
  },
];

const routerProvider = createBrowserRouter(routeDefinitions);

export default routerProvider;
