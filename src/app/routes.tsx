import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./components/pages/LandingPage";
import { WhyTFFx } from "./components/pages/WhyTFFx";
import { GetQuote } from "./components/pages/GetQuote";
import { TrackShipment } from "./components/pages/TrackShipment";
import { Support } from "./components/pages/Support";
import { AboutUs } from "./components/pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "why-tffx", Component: WhyTFFx },
      { path: "quote", Component: GetQuote },
      { path: "track", Component: TrackShipment },
      { path: "support", Component: Support },
      { path: "about", Component: AboutUs },
      {
        path: "*",
        Component: () => {
          return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
              <p className="text-[#FF5F1F] mb-4" style={{ fontSize: "6rem", fontFamily: "var(--font-heading)" }}>404</p>
              <h2 className="text-[#E2E8F0] mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>Page Not Found</h2>
              <p className="text-[#8A8A9A] mb-8" style={{ fontSize: "0.9rem" }}>The route you're looking for doesn't exist.</p>
              <a href="/" className="px-6 py-3 bg-[#FF5F1F] text-white rounded-lg" style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem" }}>
                Return Home
              </a>
            </div>
          );
        },
      },
    ],
  },
]);
