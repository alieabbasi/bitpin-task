import { CloseCircle, DollarCircle, Home } from "iconsax-react";
import { FC, useRef } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    inputRef.current?.click();
  };

  return (
    <div className="drawer">
      <input
        ref={inputRef}
        id="main-side-bar"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col bg-base-300">
        {/* Navbar */}
        <div className="p-0 navbar container w-full">
          <div className="flex-none sm:hidden">
            <label
              htmlFor="main-side-bar"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <nav className="hidden sm:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to="/" className="btn btn-ghost flex items-center">
                  <Home size="24" color="#FFF" />
                  <span className="text-base">صفحه اصلی</span>
                </Link>
              </li>
              <li>
                <Link to="/markets" className="btn btn-ghost flex items-center">
                  <DollarCircle size="24" color="#FFF" />
                  <span className="text-base">بازار</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mx-2 px-2 flex-1 justify-end">
            <div className="w-12 h-12 rounded-lg overflow-hidden hover:animate-wiggle">
              <img src="/bitpin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <nav className="drawer-side z-10">
        <label
          htmlFor="main-side-bar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <div className="flex justify-between items-center mt-4">
            <img className="w-48 hover:bg-none" src="/bitpin-text.svg" alt="" />
            <button
              role="close"
              aria-label="close"
              className="w-max rounded-full btn btn-circle p-1.5"
              onClick={toggleMenu}
            >
              <CloseCircle size={32} color="white" />
            </button>
          </div>
          <hr className="my-6 " />
          <li>
            <Link
              to="/"
              className="btn btn-ghost flex justify-start"
              onClick={toggleMenu}
            >
              <Home size="24" color="#FFF" />
              <span className="text-base">صفحه اصلی</span>
            </Link>
          </li>
          <li>
            <Link
              to="/markets"
              className="btn btn-ghost flex justify-start"
              onClick={toggleMenu}
            >
              <DollarCircle size="24" color="#FFF" />
              <span className="text-base">بازار</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
