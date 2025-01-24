import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./components/ui/Loading";

const Layout = () => {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loading info="در حال بارگزاری ..." />}>
          <main className="p-4 bg-base-100 container min-h-[calc(100vh-120px)]">
            <Outlet />
          </main>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default Layout;
