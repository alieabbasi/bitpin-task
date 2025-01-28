import { ArrowLeft } from "iconsax-react";
import { FC, lazy } from "react";
import { Link } from "react-router-dom";

// import MarketCarousel from "@/components/HomePage/MarketsCarousel";
const MarketCarousel = lazy(
  () => import("@/components/HomePage/MarketsCarousel")
);

const HomePage: FC = () => {
  return (
    <div className="w-full h-full self-center flex flex-col">
      <div className="container flex flex-col justify-center max-sm:items-center">
      <div className="h-60 w-[50vw] rounded-full bg-white blur-[190px] absolute -top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:opacity-50"></div>

        <h1 className="text-xl sm:text-3xl font-extrabold flex max-sm:justify-center items-center">
          {/* <div className="size-10 rounded-lg overflow-hidden max-sm:mb-4 sm:ml-4">
          <img src="/bitpin.png" alt="بیت‌پین" />
        </div> */}
          به{" "}
          <img
            src="/bitpin-text.svg"
            className="w-32 sm:w-40 mx-2 sm:mx-4"
            alt="بیت‌پین"
          />{" "}
          خوش آمدید 👋
        </h1>
        <h4 className="mt-4 opacity-60 max-sm:text-center">
          برای مشاهده آخرین وضعیت بازارها کلیک کنید.
        </h4>
        <Link to="/markets" className="btn btn-lg btn-accent my-8 w-max">
          <span>مشاهده بازارها</span>
          <ArrowLeft size="20" color="white" />
        </Link>
      </div>
      <MarketCarousel />
    </div>
  );
};

export default HomePage;
