import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-base-200 text-white text-center p-4">
      <div className="flex justify-between items-center container">
        <img src="/bitpin-text.svg" alt="bitpin" className="w-32"/>
        <p className="dir-ltr">&copy; {new Date().getFullYear()} Ali Abbasi</p>
      </div>
    </footer>
  );
};

export default Footer;
