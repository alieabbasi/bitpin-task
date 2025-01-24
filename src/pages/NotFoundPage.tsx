import { LocationCross, ArrowLeft } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <LocationCross size="32" className="text-amber-600" />
        <span className="text-lg mr-4">صفحه مورد نظر پیدا نشد :(</span>
      </div>
      <Link to="/" className="btn btn-lg mt-6">
        <span>رفتن به صفحه اصلی</span>
        <ArrowLeft size="20" color="white" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
