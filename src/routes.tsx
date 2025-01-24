import { createBrowserRouter } from "react-router-dom";
import Markets from "./pages/Markets";
import MarketDetails from "./pages/MarketDetails";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Markets />,
      },
      {
        path: "/:id",
        element: <MarketDetails />,
      },
    ],
  },
]);

export default router;
