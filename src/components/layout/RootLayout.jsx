import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
