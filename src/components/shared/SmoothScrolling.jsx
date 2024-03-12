import { ReactLenis } from "@studio-freight/react-lenis";
// https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
