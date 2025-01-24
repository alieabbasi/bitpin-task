import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import MarketsPage from "./pages/MarketsPage";
// import MarketDetails from "./pages/MarketDetails";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage";

const MarketsPage = lazy(() => import("./pages/MarketsPage"));
const MarketDetailPage = lazy(() => import("./pages/MarketDetailPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MarketsPage />,
      },
      {
        path: "/:id",
        element: <MarketDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);

export default router;
