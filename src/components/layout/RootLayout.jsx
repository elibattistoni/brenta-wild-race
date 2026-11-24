import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const RootLayout = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  //! lenis for smooth scroll: one instance, one animation loop, and both
  //! are stopped on unmount (StrictMode mounts effects twice in dev)
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  //! scroll to top whenever the path changes, through Lenis so its own
  //! scroll position stays in sync (window.scrollTo would bypass it)
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

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
