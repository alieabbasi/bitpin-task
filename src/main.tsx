import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./pages/ErrorBoundary";
import Loading from "./components/ui/Loading";
import Decimal from "decimal.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60,
    },
  },
});

globalThis.dateFormatter = new Intl.DateTimeFormat("fa", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

Decimal.prototype.toLocaleString = function (
  locales?: string | string[],
  options?: Intl.NumberFormatOptions
) {
  return this.toNumber().toLocaleString(locales, options);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={routes} />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>
);
