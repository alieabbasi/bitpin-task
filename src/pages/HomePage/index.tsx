import MarketCarousel from "@/components/HomePage/MarketsCarousel";
import { ArrowLeft } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="w-full h-full self-center flex flex-col justify-center max-sm:items-center">
      <h1 className="text-xl sm:text-4xl font-extrabold flex max-sm:flex-col justify-center items-center">
        <div className="size-10 rounded-lg overflow-hidden max-sm:mb-4 sm:ml-4">
          <img src="/bitpin.png" alt="بیت‌پین" />
        </div>
        به بیت‌پین خوش آمدید 👋
      </h1>
      <h4 className="mt-4 opacity-60 max-sm:text-center">
        برای مشاهده آخرین وضعیت بازارها کلیک کنید.
      </h4>
      <Link to="/markets" className="btn btn-lg btn-accent my-8 w-max">
        <span>مشاهده بازارها</span>
        <ArrowLeft size="20" color="white" />
      </Link>
      <MarketCarousel />
    </div>
  );
};

export default HomePage;
