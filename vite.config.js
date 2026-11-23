import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// Content-Security-Policy for the production build. GitHub Pages can't set
// response headers, so it ships as a <meta> tag. Build-only: the dev server
// injects an inline React Refresh script that 'self' would block.
// 'unsafe-inline' styles are needed by Mantine (CSS variables <style> tag and
// style props). frame-ancestors is ignored in <meta>, so it isn't listed.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join("; ");

const cspMeta = () => ({
  name: "csp-meta",
  apply: "build",
  transformIndexHtml: () => [
    {
      tag: "meta",
      attrs: {
        "http-equiv": "Content-Security-Policy",
        content: contentSecurityPolicy,
      },
      injectTo: "head-prepend",
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
    cspMeta(),
  ],
  assetsInclude: ["**/*.gpx"],
  base: "/",
});
