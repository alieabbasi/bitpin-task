import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./pages/ErrorBoundary";
import { Suspense, useEffect } from "react";
import Loading from "./components/ui/Loading";
import useStore from "./services/store";

const Layout = () => {
  const fetchMarkets = useStore((store) => store.fetchMarkets);
  useEffect(() => {
    fetchMarkets();
  }, [fetchMarkets]);
  return (
    <div className="size-full">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loading info="در حال بارگزاری ..." />}>
          <main className="h-full p-4 bg-base-100 container min-h-[calc(100vh-120px)]">
            <Outlet />
          </main>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Layout;
