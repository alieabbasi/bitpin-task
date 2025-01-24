import { Home } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-base-200">
      <nav className="text-white py-2 flex justify-between items-center container">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="btn btn-ghost flex items-center">
              <Home size="24" color="#FFF"/>
              <span className="text-base">صفحه اصلی</span>
            </Link>
          </li>
        </ul>
        <div className="w-12 h-12 rounded-lg overflow-hidden">
        <img src="/bitpin.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
