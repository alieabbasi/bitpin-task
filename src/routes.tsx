import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import MarketsPage from "./pages/MarketsPage";
// import MarketDetails from "./pages/MarketDetails";
// import Layout from "./Layout";
// import NotFoundPage from "./pages/NotFoundPage";
import withSuspenseLoading from "./components/withSuspenceLoading";
import HomePage from "./pages/HomePage";

const MarketsPage = withSuspenseLoading(
  lazy(() => import("./pages/MarketsPage"))
);
const MarketDetailPage = withSuspenseLoading(
  lazy(() => import("./pages/MarketDetailPage"))
);
const NotFoundPage = withSuspenseLoading(
  lazy(() => import("./pages/NotFoundPage"))
);
const Layout = withSuspenseLoading(lazy(() => import("./Layout")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "markets",
        element: <MarketsPage />,
      },
      {
        path: "markets/:id",
        element: <MarketDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
