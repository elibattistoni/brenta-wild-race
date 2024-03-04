import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <div style={{ maxWidth: "1700px", margin: "0 auto" }}>
        <MainNavigation />
        <main style={{ minHeight: "100vh" }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
