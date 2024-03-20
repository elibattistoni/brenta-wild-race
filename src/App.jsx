import { MantineProvider } from "@mantine/core";
import mantineUItheme, { resolver } from "./mantineUItheme";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import RootLayout from "./components/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import { paths } from "./utils/paths";
import Loading from "./components/shared/Loading";
import PrivacyBanner from "./components/layout/PrivacyBanner";

const HomePage = lazy(() => import("./pages/HomePage"));
const TrailPathVariantsPage = lazy(() =>
  import("./pages/trail/TrailPathVariantsPage")
);
const TrailRegistrationPage = lazy(() =>
  import("./pages/trail/TrailRegistrationPage")
);
const TrailPrizesPage = lazy(() => import("./pages/trail/TrailPrizesPage"));
const TrailRulesPage = lazy(() => import("./pages/trail/TrailRulesPage"));
const TrailProgramPage = lazy(() => import("./pages/trail/TrailProgramPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SponsorsPage = lazy(() => import("./pages/SponsorsPage"));
const EditionDetailsPage = lazy(() =>
  import("./pages/editions/EditionDetailsPage")
);
const EditionsHomePage = lazy(() =>
  import("./pages/editions/EditionsHomePage")
);
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));

const App = () => {
  return (
    <MantineProvider
      theme={mantineUItheme}
      forceColorScheme="dark"
      cssVariablesResolver={resolver}
    >
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={paths.home.link} element={<RootLayout />}>
              <Route index={true} element={<HomePage />} />
              <Route path={paths.gara.linkOff}>
                <Route
                  path={paths.gara.children.percorsoVarianti.link}
                  element={<TrailPathVariantsPage />}
                />
                <Route
                  path={paths.gara.children.programma.link}
                  element={<TrailProgramPage />}
                />
                <Route
                  path={paths.gara.children.regolamento.link}
                  element={<TrailRulesPage />}
                />
                <Route
                  path={paths.gara.children.montepremi.link}
                  element={<TrailPrizesPage />}
                />
                <Route
                  path={paths.gara.children.iscrizione.link}
                  element={<TrailRegistrationPage />}
                />
              </Route>
              <Route
                path={paths.edizioni.link}
                element={<EditionsHomePage />}
              />
              <Route
                path={`${paths.edizioni.link}/:year`}
                element={<EditionDetailsPage />}
              />
              <Route path={paths.sponsor.link} element={<SponsorsPage />} />
              <Route path={paths.contatti.link} element={<AboutPage />} />
              <Route
                path={paths.privacy.link}
                element={<PrivacyPolicyPage />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
        <PrivacyBanner />
      </HashRouter>
    </MantineProvider>
  );
};

export default App;
