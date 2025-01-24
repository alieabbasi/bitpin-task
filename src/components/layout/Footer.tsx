import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Bitpin</p>
    </footer>
  );
};

export default Footer;
