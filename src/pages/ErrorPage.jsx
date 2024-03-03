import { useRouteError } from "react-router-dom";
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main style={{ minHeight: "100vh" }}>
        <div>ErrorPage -- under construction</div>
        <div>{error.status}</div>
        <div>{error.statusText}</div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
