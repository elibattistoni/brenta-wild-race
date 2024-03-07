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
import { paths } from "./utils/paths";

const routeDefinitions = [
  {
    path: paths.home.link,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: paths.gara.linkOff,
        children: [
          {
            path: paths.gara.children.percorsoVarianti.link,
            element: <TrailPathVariantsPage />,
          },
          {
            path: paths.gara.children.programma.link,
            element: <TrailProgramPage />,
          },
          {
            path: paths.gara.children.regolamento.link,
            element: <TrailRulesPage />,
          },
          {
            path: paths.gara.children.montepremi.link,
            element: <TrailPrizesPage />,
          },
          {
            path: paths.gara.children.iscrizione.link,
            element: <TrailRegistrationPage />,
          },
        ],
      },
      { path: paths.edizioni.link, element: <EditionsHomePage /> },
      {
        path: `${paths.edizioni.link}/:year`,
        element: <EditionsDetailsPage />,
      },
      { path: paths.sponsor.link, element: <SponsorsPage /> },
      { path: paths.contatti.link, element: <AboutPage /> },
    ],
  },
];

const routerProvider = createBrowserRouter(routeDefinitions);

export default routerProvider;
