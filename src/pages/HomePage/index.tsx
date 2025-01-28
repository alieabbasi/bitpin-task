import { ArrowLeft } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="w-full h-full self-center flex flex-col justify-center">
      <h1 className="text-4xl font-extrabold flex">
        <div className="size-10 rounded-lg overflow-hidden ml-4">
          <img src="/bitpin.png" alt="بیت‌پین" />
        </div>
        به بیت‌پین خوش آمدید 👋
      </h1>
      <h4 className="mt-4 opacity-60">
        برای مشاهده آخرین وضعیت بازارها کلیک کنید.
      </h4>
      <Link to="/markets" className="btn btn-lg btn-accent mt-8 w-max">
        <span>مشاهده بازارها</span>
        <ArrowLeft size="20" color="white" />
      </Link>
    </div>
  );
};

export default HomePage;
