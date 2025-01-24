import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import MarketsPage from "./pages/MarketsPage";
// import MarketDetails from "./pages/MarketDetails";
import Layout from "./Layout";

const MarketsPage = lazy(() => import("./pages/MarketsPage"));
const MarketDetails = lazy(() => import("./pages/MarketDetails"));

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
        element: <MarketDetails />,
      },
    ],
  },
]);

export default router;
