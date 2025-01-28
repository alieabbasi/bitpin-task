import useStore from "@/services/store.service";
import clsx from "clsx";
import { FC, useMemo, useRef } from "react";
import Loading from "../ui/Loading";
import { Link } from "react-router-dom";

const MarketCarousel: FC = () => {
  const { markets, isLoading } = useStore((store) => store);
  const fullList = useMemo(() => [...markets, ...markets], [markets]);

  const carouselRef = useRef<HTMLDivElement>(null);

  const pauseAnimation = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const resumeAnimation = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      className="relative overflow-hidden w-full dir-ltr"
      onMouseEnter={pauseAnimation}
      onMouseLeave={resumeAnimation}
    >
      {isLoading ? (
        <Loading customHeight={182} />
      ) : (
        <div
          className="flex gap-4 whitespace-nowrap animate-marquee"
          style={{ animationPlayState: "running" }} // default animation state
          ref={carouselRef}
        >
          {fullList.map((crypto, index) => (
            <div
              key={index}
              className="min-w-[200px] border border-base-300 bg-base-100 p-4 rounded-xl text-center"
            >
              <img
                src={crypto.currency1.image}
                alt={crypto.currency1.title_fa}
                className="w-16 h-16 mx-auto mb-2"
              />
              <div className="flex justify-between items-center">
                <p className="text-sm text-info">{crypto.currency1.code}</p>
                <p className="font-bold">{crypto.currency1.title_fa}</p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-lg font-bold">
                  {(+crypto.price).toLocale()}{" "}
                  <span className="text-sm text-info">
                    {crypto.currency2.code}
                  </span>
                </p>
                <div
                  className={clsx("px-2 dir-ltr text-nowrap", {
                    "text-green-600": crypto.price_info.change > 0,
                    "text-red-600": crypto.price_info.change < 0,
                    "text-white": crypto.price_info.change === 0,
                  })}
                >
                  {(crypto.price_info.change > 0 ? "+" : "") +
                    crypto.price_info.change}{" "}
                  %
                </div>
              </div>
              <Link
                to={"/markets/" + crypto.id}
                className="btn btn-accent btn-sm w-full mt-2"
                state={{ lastPage: "/" }}
              >
                نمایش جزئیات
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketCarousel;
