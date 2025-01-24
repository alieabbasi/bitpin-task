import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="p-4 bg-base-100 container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
