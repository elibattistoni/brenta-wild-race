import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const RootLayout = () => {
  //! scroll top top whenever the path changes
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //! lenis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div style={{ width: "95%", maxWidth: "121ch", margin: "0 auto" }}>
        <MainNavigation />
        <main style={{ minHeight: "100svh" }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
